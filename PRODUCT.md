# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience: recruiters and hiring managers evaluating Anastasiia for full-time product design roles, and clients/prospects evaluating her for freelance or contract work. Both arrive to judge her craft and decide whether to reach out (apply/interview her, or hire her).

## Product Purpose

A personal portfolio site for Anastasiia Liuta, Product Designer. It exists to showcase real shipped work (case studies, experience) and convert a visitor's evaluation into contact — an interview invite, a freelance inquiry, or a hire.

## Positioning

AI-driven product design with 5+ years of experience. The differentiator versus other product designers is fluency designing AI-native product surfaces (conversational UX, AI workspaces) alongside traditional product design — demonstrated by the case studies themselves (PetPal's AI-matched sitters, the AI Agent workspace), not just claimed in copy.

## Operating Context

A visitor scans the hero, skims "Selected Work" case-study cards (PetPal, AI Agent), and either opens a full case study or checks Experience/Contact. Case-study pages follow a fixed template: hero, role/timeline/team/scope meta, Overview, Challenge, Approach, Key Screens, Outcomes, Reflection. No backend — static HTML/CSS/JS, deployed to Vercel, source on GitHub.

## Capabilities and Constraints

- Static site: plain HTML/CSS/JS. No framework, no build tooling, no npm-installed component libraries (e.g. shadcn/Magic UI cannot be installed via their CLI here — equivalent effects are hand-built in CSS/SVG).
- Three case studies today: PetPal (`petpal.html`, pet-sitter marketplace), AI Agent (`ai-agent.html`, personal AI workspace), and HealthConnect (`healthconnect.html`, multi-role healthcare SaaS platform).
- No CMS/backend — all content is hand-authored in the HTML files.

## Brand Commitments

- Name: Anastasiia Liuta. Role line: "Product Designer."
- Visual identity: full black theme, yellow accent (`#eab308` family, chosen deliberately to replace an earlier cyan/blue accent), Instrument Serif (display) + Inter (sans) + JetBrains Mono (mono/labels).
- Contact channels: email `anasssta9@gmail.com`, phone `+48 577 202 312`, Telegram `t.me/LiuAna`. Location: Kraków, Poland.

## Evidence on Hand

- PetPal case study (`petpal.html`): real live product at `petpal-ivory.vercel.app`, source at `github.com/Liuta95/Petpal`.
- AI Agent case study (`ai-agent.html`): real live product at `ai-agent-pi-jet.vercel.app`, source at `github.com/Liuta95/AI-Agent`. Case-study copy was deliberately rewritten from scratch after the user's first draft was found to be copied verbatim from another designer's portfolio — nothing in that page may be reused.
- HealthConnect case study (`healthconnect.html`): real client/employer project, UX/UI Designer, Mar 2024 – Jan 2025. No public live link or repo (confidential). Key Screens images in `assets/healthconnect/` are exported directly from the production Figma file (via the Figma MCP, given a node URL per screen), unedited — content, layout, and color are the real design, not a recreation. The small mark in the sidebar is a placeholder logo from the design file itself, not the client's real branding, per the user — it does not need to be removed. Currently one screen (`doctor-home.png`); more are expected to be added the same way as the user supplies node URLs — restore the horizontal `.case-slider` markup (CSS already in place, unused while count is 1) once there are 2+. This is disclosed directly on the case-study page under the Key Screens heading — keep that disclosure line accurate to whatever sourcing is true at the time if the section is edited. An earlier version of this section used hand-built HTML/CSS recreations instead, then briefly painted out the sidebar mark as if it were real branding — both superseded by this unedited real-export approach.
- Experience section: real employers only — Trinetix, wht. agency, Upwork. No fictional/NDA-style project names.
- **Hard constraint carried across this whole project: never fabricate metrics, employer names, testimonials, or screenshots.** Where a real screenshot can't be exported into this environment, cover art is disclosed as a hand-built recreation, not presented as a real capture.

## Product Principles

1. Real over impressive — every claim, number, and case study must be traceable to something Anastasiia actually shipped; no invented metrics or logos.
2. AI fluency is shown, not just stated — the case studies themselves (PetPal's AI matching, the AI Agent workspace) carry the "AI-driven" positioning.
3. One clear next action — every page should make it obvious how to get in touch (email/Telegram) or go deeper into a case study.
4. Static-first simplicity — no framework/build step; every visual effect stays achievable in plain HTML/CSS/JS/SVG.

## Accessibility & Inclusion

WCAG contrast (4.5:1 minimum for text) is a standing requirement — already audited once for the yellow accent (found and fixed white-on-yellow button text that failed at ~1.9:1).
