// Shared helpers for the build and for the browser scripts.

export const rupees = (n) => `Rs ${Math.round(n).toLocaleString('en-PK')}`;

export const unitPrice = (p) => p.salePrice ?? p.price;

// The type line printed on every label.
export function typeLine(p) {
  if (p.type === 'unstitched') return `${p.pieces.length}-piece unstitched`;
  return `Stitched, XS to XL`;
}

// Working days skip Sunday. Returns "Wed 29 Oct to Thu 30 Oct".
export function arrival(days, extra = 0, from = new Date()) {
  const [lo, hi] = days.split(' to ').map(Number);
  const add = (n) => {
    const d = new Date(from);
    let left = n + extra;
    while (left > 0) {
      d.setDate(d.getDate() + 1);
      if (d.getDay() !== 0) left -= 1;
    }
    return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
  };
  return `${add(lo)} to ${add(hi ?? lo)}`;
}

// A barcode drawn from the article code: each character sets three bar widths.
export function barcode(code) {
  const bars = [];
  let x = 0;
  const push = (w, on) => {
    if (on) bars.push({ x, w });
    x += w;
  };
  push(2, true);
  push(1, false);
  push(1, true);
  push(2, false);
  for (const ch of code) {
    const n = ch.charCodeAt(0);
    push(1 + (n % 3), true);
    push(1 + ((n >> 2) % 2), false);
    push(1 + ((n >> 3) % 3), true);
    push(1 + ((n >> 1) % 2), false);
    push(1 + ((n >> 4) % 2), true);
    push(2, false);
  }
  push(1, true);
  push(1, false);
  push(2, true);
  return { bars, width: x };
}

// The parcel (cart) lives on this device only.
export const PARCEL_KEY = 'mb-parcel';
export const ORDERS_KEY = 'mb-orders';

export function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeStore(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export function parcelCount() {
  return readStore(PARCEL_KEY, []).reduce((n, line) => n + line.qty, 0);
}

// How many of one piece are already in the parcel, across sizes.
export function qtyInParcel(slug) {
  return readStore(PARCEL_KEY, []).reduce((n, l) => (l.slug === slug ? n + l.qty : n), 0);
}

// Adds a line to the parcel, merging with the same piece, size and stitching.
export function addToParcel(line) {
  const list = readStore(PARCEL_KEY, []);
  const same = list.find((l) => l.slug === line.slug && l.size === line.size && l.stitching === line.stitching);
  if (same) same.qty = Math.min(9, same.qty + line.qty);
  else list.push({ ...line, qty: Math.min(9, line.qty) });
  const ok = writeStore(PARCEL_KEY, list);
  window.dispatchEvent(new Event('mb:parcel'));
  return ok;
}
