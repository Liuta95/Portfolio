---
name: Anastasiia Liuta — Portfolio
description: A dark, editorial product-design portfolio with an amber accent that reads as a signal, not decoration.
colors:
  bg: "#0a0a0c"
  ink: "#ffffff"
  ink-soft: "#b6b6c0"
  ink-muted: "#8a8a95"
  ink-faint: "#828286"
  amber-signal: "#eab308"
  amber-signal-warm: "#f59e0b"
  amber-signal-pale: "#fde047"
  amber-signal-soft: "rgba(234, 179, 8, 0.16)"
  panel-bg: "rgba(255, 255, 255, 0.045)"
  panel-bg-soft: "rgba(255, 255, 255, 0.03)"
  panel-bg-hover: "rgba(255, 255, 255, 0.075)"
  panel-border: "rgba(255, 255, 255, 0.09)"
  panel-border-strong: "rgba(255, 255, 255, 0.20)"
  panel-divider: "rgba(255, 255, 255, 0.08)"
  panel-highlight: "rgba(255, 255, 255, 0.12)"
typography:
  display:
    fontFamily: "Instrument Serif, Times New Roman, serif"
    fontWeight: 400
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontWeight: 500
rounded:
  sm: "8px"
  md: "14px"
  lg: "20px"
  xl: "28px"
  pill: "100px"
  cta: "10px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.amber-signal}"
    textColor: "{colors.bg}"
    rounded: "{rounded.cta}"
    padding: "8px 18px"
  button-secondary:
    backgroundColor: "#1c1c20"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.panel-bg}"
    rounded: "{rounded.lg}"
---

# Design System: Anastasiia Liuta — Portfolio

## Overview

**Creative North Star: "The Amber Terminal"**

The site reads as a dark technical console that occasionally lights up — a near-black canvas (`#0a0a0c`) with a single warm amber signal color, monospace labels standing in for system readouts, and a hexagon-grid texture behind the hero like a faint circuit board. It is restrained by default: surfaces are flat, borders are hairline, and color is scarce. The amber only appears where something matters — the name, the primary action, an active state — so its rarity is what makes it read as a signal rather than decoration.

The one confirmed rejection: a cyan/blue accent was used earlier in this project and was deliberately replaced site-wide with the amber palette. Blue must not return as an accent color anywhere in this system.

**Key Characteristics:**
- Near-black, low-noise canvas with translucent white panels instead of distinct card colors
- One accent color family (amber), used sparingly and never paired with blue
- Serif display type for the name/headlines, monospace for every label/eyebrow/meta value
- Flat at rest; shadow and glow appear only as a hover response
- A hand-built hexagon-grid texture is the site's one recurring signature motif

## Colors

The palette is almost monochrome — near-black, white, and grayscale panel translucencies — with exactly one warm accent family carrying all emphasis.

### Primary
- **Amber Signal** (`#eab308`): the sole accent. Used for the name gradient, primary CTA buttons, active/hover states, and the hexagon pattern's occasional filled cells. Never exceeds a small fraction of any screen.
- **Amber Signal Warm** (`#f59e0b`) / **Amber Signal Pale** (`#fde047`): gradient partners to Amber Signal. Always used together in a gradient (button fills, the "Liuta." name text, the hero glow) — never as flat standalone fills.

### Neutral
- **Void** (`#0a0a0c`): the page background and the color primary-button text sits on.
- **Paper White** (`#ffffff`): primary text (`ink`).
- **Soft Ink** (`#b6b6c0`) / **Muted Ink** (`#8a8a95`) / **Faint Ink** (`#828286`): secondary text, descending in emphasis — body copy, captions, and the quietest metadata respectively.
- **Panel White** (`rgba(255,255,255,0.045–0.12)`): every "surface" in the system (cards, the nav pill, secondary buttons) is this same white laid over the void at low opacity, not a distinct hex color — depth comes from opacity steps, not new colors.

### Named Rules
**The One Signal Rule.** Amber is the only accent color in the system. It never mixes with a second hue (no blue, no purple) — that combination was tried and explicitly reverted.

## Typography

**Display Font:** Instrument Serif (with Times New Roman fallback)
**Body Font:** Inter (with system-ui fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace fallback)

**Character:** A quiet serif for the one or two words that carry personality (the name, case-study titles), a plain grotesque for everything read at length, and monospace for anything that behaves like a system label — nav eyebrows, section counters, tags, meta values. The mono voice is what gives the site its "terminal" read.

### Hierarchy
- **Display** (400, `clamp(48px, 8vw, 96px)`, line-height 1): case-study and hero titles, set in Instrument Serif.
- **Body** (400, 15–17px, line-height 1.55–1.6): paragraph copy, set in Inter.
- **Label** (500–700, 10–13px, uppercase where used, letter-spacing 0.06–0.12em): nav meta, section eyebrows, badges, meta grid labels — always JetBrains Mono.

### Named Rules
**The Mono-Label Rule.** Any text acting as a system label, not prose — eyebrows, tags, counters, badges, nav meta — is set in JetBrains Mono, uppercase, letter-spaced. Prose is never set this way.

## Layout

Content sits in a centered column (`max-width: 1000px`) with hairline `panel-divider` borders on both sides, giving the impression of a fixed-width printed page floating on the dark canvas. Spacing loosely follows a 4px-based rhythm (8/12/16/24/32px recur most) rather than a strict token grid. The hero and case-study heroes break out to full-bleed for their background layer while keeping the same centered text column. Selected Work cards stack in a single centered column (`max-width: 760px`) rather than a side-by-side grid.

## Elevation & Depth

Flat by default. Cards, buttons, and the nav pill sit with no shadow at rest — depth comes from a subtle inset highlight (`panel-highlight`) and a barely-visible border, not a shadow. Shadow and glow are reserved entirely for interaction: hovering a card lifts it slightly and adds `--tile-shadow`; hovering a button adds an amber-tinted glow. Depth is something the interface does, not something it has.

### Named Rules
**The Hover-Only Shadow Rule.** No element carries a resting box-shadow. Shadow/glow is added only in a `:hover` (or equivalent active) state, and removed again at rest.

## Shapes

Three form languages coexist deliberately: soft rounded rectangles (`8–28px` radius, scaling with the element's size) for cards, art tiles, and panels; full pill shapes (`100px` radius) for secondary/ghost buttons, badges, tags, and the nav bar itself; and a tighter rounded rectangle (`10–12px`) reserved only for the primary gold CTA, whose textured metal fill reads better with a squarer edge than a full pill. Corners are never sharp on an interactive element. The hexagon is the one non-rectangular motif, appearing only as a background texture (never as a component shape).

## Components

### Buttons
- **Shape:** primary CTA ("Let's talk," "Get in touch") uses a tight rounded rectangle (`10–12px`); every other button (secondary/ghost, badges) stays full pill (`100px`).
- **Primary:** textured gold-foil fill — a diagonal amber gradient (`#fde047 → #eab308 → #d97706`) layered under a streaky diagonal highlight gradient and a low-opacity fractal-noise overlay (`mix-blend-mode: overlay`) for a brushed-metal read, `#92400e` hairline border, inset top highlight. Text set in `--bg` (near-black) for contrast — never white text on the amber fill.
- **Secondary/Ghost:** dark gradient fill (`#1c1c20` base with a faint top-light gradient), a hairline `rgba(255,255,255,0.14)` border, soft ink text. Used for "View code," "Back to Selected Work," and case-card badges.
- **Hover / Focus:** primary scales up slightly (nav) or lifts (contact) and deepens its shadow; secondary brightens its border and text toward full white and deepens its shadow. No color hue changes on hover, only intensity.

### Named Rules
**The Gold-Foil CTA Rule.** The primary CTA is the only button with a textured (noise-overlaid) fill and the only one that breaks the pill radius. That combination — texture + squared corners — is reserved for it alone; it must not spread to secondary buttons or cards.

### Cards (Selected Work)
- **Corner Style:** `--r-lg` (20px).
- **Background:** `panel-bg` (translucent white over void).
- **Cover art:** fills the full card at 16:9; on hover it blurs (6px) and scales up (1.08×) while a bottom-anchored dark gradient overlay fades in, carrying the project title, description, and a "View Project →" CTA — the info lives on the image only on hover, not permanently below it.
- **Shadow Strategy:** none at rest; lifts 3px with `--tile-shadow` on hover (see Elevation & Depth).
- **Border:** 1px `panel-border`, brightens to `panel-border-strong` on hover.

### Navigation
- Floating centered pill, fixed to the top of the viewport, translucent panel background with backdrop blur. Contains the logo/name, an "Available for projects" status with a pulsing green dot, and the primary amber CTA button. No hover state changes its shape — only the CTA button reacts.

### Signature: Hexagon Field
A hand-built (no library) SVG hexagon grid used as the hero's background texture: mostly hairline outlines at low opacity, with a sparse (~7%) random subset of cells filled in a soft amber gradient, radially masked so it fades out toward the hero's edges. This is the system's one piece of generative/textural decoration; it does not repeat as a small tile (which previously produced a visible diagonal stripe artifact) — it's generated once as a single large non-repeating field.

## Do's and Don'ts

### Do:
- **Do** keep amber (`#eab308` family) as the only accent color anywhere in the system.
- **Do** put primary-button text in `--bg` (near-black), never white, on any amber fill — white-on-amber fails WCAG contrast (~1.9:1, audited and fixed once already).
- **Do** keep secondary buttons, badges, and the nav bar pill-shaped, non-interactive containers softly rounded (8–28px), and only the primary gold CTA on its own tighter rounded-rect (10–12px).
- **Do** keep shadows and glows hover-only; nothing carries a resting shadow.
- **Do** set any label-like text (eyebrows, tags, meta, counters) in JetBrains Mono, uppercase, letter-spaced.

### Don't:
- **Don't** reintroduce a blue or cyan accent — it was tried in this project and explicitly reverted to amber.
- **Don't** put white text directly on an amber fill.
- **Don't** tile a small repeating pattern fragment for texture (the hexagon field learned this the hard way — repetition of a fragment with filled cells reads as a stripe, not sparse texture); generate decorative textures once, at full size.
- **Don't** give a card or button a resting shadow; reserve shadow/glow for hover.
