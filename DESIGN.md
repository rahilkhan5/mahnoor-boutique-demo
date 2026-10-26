---
name: Mahnoor Boutique
description: A demo Lahore boutique store printed as a cash on delivery consignment slip.
colors:
  form-blue: "#1f3fbf"
  form-line: "#b8c2ea"
  courier-orange: "#c9380d"
  courier-orange-deep: "#a82e08"
  ink: "#141414"
  ink-soft: "#4a4a4a"
  slip-paper: "#fbfaf5"
  slip-deep: "#f1eee4"
  label-white: "#ffffff"
  carbon-pink: "#f8e6e4"
  carbon-yellow: "#f7efcc"
  kraft-tape: "#c9a77c"
  fix-red: "#b00020"
typography:
  display:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.25rem, 1.8rem + 5.6vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 3.75rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.01em"
  headline-small:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.6rem, 1.2rem + 1.4vw, 2.25rem)"
    fontWeight: 850
    lineHeight: 1
  title:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0"
  body:
    fontFamily: "IBM Plex Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  body-small:
    fontFamily: "IBM Plex Sans, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0.08em"
  button:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 800
    letterSpacing: "0.06em"
  stamp:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.3125rem"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "0.1em"
  data:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
    fontSize: "1.0625rem"
    fontWeight: 500
    letterSpacing: "0"
    fontFeature: "\"tnum\" 1"
  urdu-stamp:
    fontFamily: "Nastaliq Names, Noto Nastaliq Urdu, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.55
rounded:
  none: "0px"
  stamp: "4px"
  stamp-large: "6px"
  dot: "50%"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
  "9": "7rem"
components:
  button:
    backgroundColor: "{colors.slip-paper}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 2rem"
    height: "54px"
  button-hover:
    backgroundColor: "{colors.slip-deep}"
  button-pay:
    backgroundColor: "{colors.courier-orange}"
    textColor: "{colors.label-white}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 2rem"
    height: "54px"
  button-pay-hover:
    backgroundColor: "{colors.courier-orange-deep}"
  button-disabled:
    backgroundColor: "{colors.slip-deep}"
    textColor: "{colors.ink-soft}"
  cod-box:
    backgroundColor: "transparent"
    textColor: "{colors.courier-orange}"
    typography: "{typography.data}"
    rounded: "{rounded.none}"
    padding: "0.25rem 0.75rem 0.5rem"
  field-input:
    backgroundColor: "{colors.label-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0.75rem"
    height: "50px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.form-blue}"
    rounded: "{rounded.none}"
    padding: "0 1rem"
    height: "44px"
  chip-pressed:
    backgroundColor: "{colors.form-blue}"
    textColor: "{colors.label-white}"
  stamp:
    textColor: "{colors.form-blue}"
    typography: "{typography.stamp}"
    rounded: "{rounded.stamp}"
    padding: "2px 10px 0"
  consignment-label:
    backgroundColor: "{colors.label-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 1rem 1rem"
    width: "320px"
  carbon-yellow-panel:
    backgroundColor: "{colors.carbon-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
  carbon-pink-panel:
    backgroundColor: "{colors.carbon-pink}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
  tape-band:
    backgroundColor: "{colors.kraft-tape}"
    textColor: "{colors.ink}"
    padding: "0.75rem 0"
---

# Design System: Mahnoor Boutique

## Overview

**Creative North Star: "The Cash on Delivery Slip"**

The store is the parcel on its way to the customer. Every surface is a courier form: slip paper printed in form blue for the labels, boxes and rules, filled in with ink for whatever the customer or the boutique wrote, and stamped with rubber stamp marks when something happens. Each piece wears a consignment label with its article code, what is in the box, the cash on delivery amount and delivery days by city, so ordering reads as certain as signing for a parcel at the door.

Density is that of a well kept form: ruled boxes, tabular figures, generous space around big honest photos. Photos stay large and true in colour; the form sits beside and on top of them, never over the clothes. Motion is physical and short: buttons press like a rubber stamp, stamps land with a thud, tracking lines print left to right like a courier printer. The world refuses the white fashion grid with a campaign banner and the "DM for price" habit; prices are always printed.

**Key Characteristics:**
- Slip paper ground, form blue print, ink fill, courier orange for money.
- Square corners everywhere except rubber stamps.
- Printed form labels in condensed uppercase above every filled in value.
- Codes, prices, quantities and tracking lines in monospaced tabular figures.
- Barcodes drawn from each article code; the boutique name stamped in Nastaliq.
- Kraft parcel tape bands seal one part of a page from the next.

## Colors

A printed courier form: one blue for everything printed, ink for everything filled in, one orange for the money, and two carbon copy tints.

### Primary
- **Form Blue** (form-blue): the printing on the slip. Form labels, ruled borders on panels, the label and note header bands, chips, size options, radio dots, focus rings, selection, the Sale and New stamps, trail timestamps.
- **Form Rule Blue** (form-line): the faint printed rules between fields, field side borders, dividers inside labels and tables, disabled stepper glyphs.

### Secondary
- **Courier Orange** (courier-orange): the money and the parcel. COD amount boxes, the Add to parcel and Place order buttons, the header parcel count once it holds a piece, prices in the ranked drop list, and the stamps that mark the parcel's progress (ADDED, BOOKED, DELIVERED).
- **Courier Orange Deep** (courier-orange-deep): hover and focus ring on pay buttons only.

### Tertiary
- **Carbon Yellow** (carbon-yellow): the yellow copy. The consignment summary at checkout and the payment slip on the home page; also the boutique's reply note behind Ask about this piece.
- **Carbon Pink** (carbon-pink): the pink copy. The consignment note after an order, the tracking trail (home example and track page), and the payment demo notes under JazzCash, Easypaisa and card.
- **Kraft Tape** (kraft-tape): parcel tape bands only, with ink text at 72% opacity.

### Neutral
- **Slip Paper** (slip-paper): the page ground and the plain button face.
- **Slip Deep** (slip-deep): photo placeholders, button hover, disabled buttons, scrollbar track.
- **Label White** (label-white): stuck on paper: consignment labels, input faces, the delivery slip, review receipts, order cards.
- **Ink** (ink): all filled in text, plain button borders, the demo strip, the Sold out stamp, filled review stars.
- **Soft Ink** (ink-soft): secondary lines, hints, notes, struck through old prices.
- **Fix Red** (fix-red): the one red, for anything the visitor has to fix: invalid field borders, field errors, order status errors.

### Named Rules
**The Pay Orange Rule.** Courier orange marks money and the parcel's journey, never navigation or general actions. Exactly two buttons are orange: Add to parcel and Place order. Every other button is the plain ink bordered slip button.

**The Two Carbons Rule.** Carbon pink and carbon yellow are the only panel tints. Yellow carries what you will pay; pink carries what happened or what the demo skipped. Every other panel is label white or bare slip paper with a form blue rule.

## Typography

**Display Font:** Sofia Sans Extra Condensed (with Arial Narrow)
**Body Font:** IBM Plex Sans (with Segoe UI, system-ui)
**Label/Mono Font:** IBM Plex Mono (with Consolas) for filled in data; Nastaliq Names (with Noto Nastaliq Urdu) for the Urdu stamps

**Character:** Condensed heavy type is the printed form; Plex Sans is the customer reading; Plex Mono is what the clerk filled in. The Nastaliq appears only as a rubber stamp.

### Hierarchy
- **Display** (900, clamp 3.25rem to 6rem, line height 0.86): the week's piece name on the home page; product names at a slightly looser 0.88.
- **Headline** (850, clamp 2.25rem to 3.75rem, 0.92): section headings and collection names; the consignment note title at 900.
- **Headline Small** (850, clamp 1.6rem to 2.25rem, 1): the brand name in the header and footer, large COD amounts, the order number.
- **Title** (800, 1.3125rem, 1.05): piece names on cards, panel headings.
- **Body** (400, 1.0625rem, 1.55): reading text, held to 34 to 46ch beside photos. **Body Small** (0.9375rem) for hints, notes and card contents lines.
- **Label** (700, 0.9375rem, 0.08em, uppercase, form blue): the printed field label above every value; 0.8125rem inside COD boxes.
- **Data** (Plex Mono 500, tabular figures): article codes, prices, quantities, delivery days, trail lines; 600 for amounts, the stepper number and size options.

### Named Rules
**The Filled In Rule.** Anything a person or system would write onto the slip (codes, prices, dates, counts, tracking lines) is monospaced with tabular figures. Printed words are condensed sans. Never swap them.

**The Ranked Drop Rule.** When listing a drop, the newest piece is biggest: headline, then headline small, then title.

## Layout

A centred page column of min(1280px, 100% minus 2rem). Space steps from 0.25rem to 7rem on a nine step scale; sections open with 4.5rem to 7rem of air, while a kraft tape band's own 4.5rem block margin replaces the next section's top padding.

The home hero is one piece per view: a tall photo (up to 78svh, at least 520px) at 1.1fr beside 0.9fr of words, with the consignment label hanging off the photo's lower right corner past its edge. At 900px and below the hero stacks in story order: name, photo with a compact label inside the corner, the buttons, then the rest.

Collections are racks: on wide screens each collection is one row, with grid columns equal to that collection's piece count set through a cols custom property on the grid. At 1100px and below the rack becomes 3 columns, at 640px and below 2 columns. Card photos are 2:3.

Checkout is a form column beside a sticky consignment summary, single column at 960px and below. The header is brand, centred nav, parcel link; at 960px the nav drops to its own horizontally scrolling row, at 600px the demo strip shortens, at 480px the brand name hides and the stamp remains.

## Elevation & Depth

Mostly flat paper. Depth means one thing: a piece of paper stuck or laid on top of the slip. Only the consignment label, the consignment summary, the consignment note and the order card on the track page carry a lift; everything else is flat with ruled borders.

### Shadow Vocabulary
- **Paper Lift** (`box-shadow: 0 1px 2px rgb(20 20 20 / 0.1), 0 16px 30px -18px rgb(20 20 20 / 0.45)`): a soft contact shadow under stuck on paper.

### Named Rules
**The Stuck Paper Rule.** A shadow means a separate sheet. Buttons, chips, cards and fields never cast shadows. No hard offset shadows.

## Shapes

Square corners on everything printed or cut: buttons, fields, chips, panels, labels, COD boxes, size options (0px). Only rubber stamps are rounded (4px for marks, 6px for the larger Nastaliq stamps) and only stamps and paper tilt: the label at minus 2 degrees, the brand stamp at minus 4, stamps between minus 8 and minus 14, tape bands between minus 1.2 and plus 0.8. Radio dots are the one circle. Rules are 1.5px form blue for panel borders, 1px form rule blue between fields, a 4px double form blue rule under the header, dashed blue rules between trail and summary lines.

## Components

### Buttons
Rubber stamps: they press down and slightly twist.
- **Shape:** square (0px), at least 54px tall, 2rem side padding, condensed 800 uppercase at 0.06em with an optional 22px icon.
- **Plain:** slip paper face, 2px ink border, ink text. Used for See the piece, Track an order, Find, Show the next step, Keep shopping, and every other non pay action.
- **Pay:** courier orange face and border, white text. Only Add to parcel and Place order (which also prints the amount in data type).
- **Hover / Focus:** plain fills to slip deep; pay deepens to courier orange deep. Focus is a 3px form blue outline 3px off (deep orange on pay). Active scales to 0.96 and rotates minus 0.6 degrees over 120ms.
- **Disabled:** form rule border, slip deep face, soft ink text, no press.

### Chips
- **Style:** filter toggles, transparent with a 1.5px form blue border, form blue condensed uppercase text, 44px tall.
- **State:** pressed fills form blue with white text. Size options on the product page share the shape with monospaced 600 sizes.

### Cards / Containers
- **Product card:** a 2:3 photo (slow 1.03 zoom on hover) above a tag ruled off by a form blue line: article code in blue data type, name, contents line, a small COD box and a stock note. Stamps sit at the photo's top right on a white backing.
- **Slips and panels:** label white or a carbon tint, 1.5px form blue border, 1.5rem padding, square. Forms with a header band (consignment label, consignment note, order card) carry a full width form blue band with white condensed uppercase text and data on the right.
- **Receipts:** label white with a 6px dashed form rule top edge, for reviews.

### Inputs / Fields
- **Style:** a blank line on the slip: white face, 1.5px form rule border with a 2px form blue bottom line, square, at least 50px tall, printed label above.
- **Focus:** border turns fully form blue with a 3px form blue outline.
- **Error:** border and bottom line in fix red with a 600 weight red message below.
- **Stepper:** minus, number, plus in a 1.5px ink box on white, 46px cells, monospaced count.
- **Placeholders:** numbers read 03XX XXXXXXX; order numbers read MB-123456.

### Navigation
Condensed 800 uppercase links at 0.04em, 44px tall; hover and current page get a 3px form blue underline. The parcel link is boxed in 2px ink with a count box that turns courier orange once it holds a piece and stamps in (scale 1.45 and minus 10 degrees, settling over 340ms) each time the count goes up. A black demo strip sits above everything on every page.

### Consignment Label
The signature. A white, minus 2 degree, lifted label: form blue header band (Cash on delivery and the MB number), a two column grid of printed fields (article, contents, COD amount box, delivery days for LHE and KHI) and a barcode drawn from the article code. The compact variant at 900px and below keeps only the COD amount, the days and a shorter barcode at about 62% width.

### Stamp Marks
Rubber stamp text: condensed 900 uppercase, 2.5px border in the current colour, 4px corners, tilted, multiplied onto the paper at 90% opacity. Sale and New are form blue, Sold out is ink. Event stamps are courier orange and land with a 380 to 420ms scale from 1.6: ADDED over the label's barcode on the home hero (beside the COD box on the product page), BOOKED on the consignment note, DELIVERED on a delivered order.

### Kraft Tape
A reusable tape band with a tilt setting: kraft background, ink text at 72%, condensed 800 uppercase at 0.14em repeating the boutique name, Cash on delivery and All over Pakistan, overflowing the page width. Three bands on the home page (after the collections, after the trail, and the footer band); only the footer band on other pages. Never inside the checkout form.

### Tracking Trail
A carbon pink sheet of monospaced lines, time in form blue in a 7.5rem column, dashed blue rules between lines. New lines print left to right in 700ms over 28 steps; pending lines are soft ink.

## Do's and Don'ts

### Do:
- **Do** put the price in a courier orange COD box with monospaced tabular figures wherever a piece or an order shows its price.
- **Do** put a printed form blue uppercase label above every filled in value.
- **Do** keep photos big, 2:3 on cards, and never cover the clothes with the label or a stamp.
- **Do** label everything as a demo: the demo strip on every page, demo notes at checkout and on the note, example reviews marked as written for the demo, credits for every photo.
- **Do** honour reduced motion: stamps, ticks, presses and printing collapse to instant.
- **Do** keep pages out of search with noindex, nofollow.

### Don't:
- **Don't** use courier orange on any button other than Add to parcel and Place order, or for links, nav, or decoration.
- **Don't** tint a panel any colour other than carbon pink or carbon yellow.
- **Don't** round corners on anything that is not a rubber stamp.
- **Don't** add card number, wallet, PIN or CNIC fields; payment steps are a plain written demo note.
- **Don't** print a real phone number; example numbers read 03XX XXXXXXX.
- **Don't** cast shadows from buttons, chips, fields or cards; only stuck on paper lifts.
- **Don't** put tape inside the checkout form.
