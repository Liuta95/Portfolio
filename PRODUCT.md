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

A visitor scans the hero, skims "Selected Work" case-study cards (PetPal, AI Agent), and either opens a full case study or checks Experience/Contact. Case-study pages follow the template: hero with domain tags as the eyebrow, Role/Timeline/Team/Industry meta, a "What I did" pill row (`.case-tags`), Overview, Challenge, then whichever process sections really happened (Discovery, Working Sessions / Workshops, Testing, Feedback), Key Screens, Outcomes, Reflection. Where something didn't happen, a `.case-note` says so plainly instead of leaving a gap or implying it. No backend — static HTML/CSS/JS, deployed to Vercel, source on GitHub.

## Capabilities and Constraints

- Static site: plain HTML/CSS/JS. No framework, no build tooling, no npm-installed component libraries (e.g. shadcn/Magic UI cannot be installed via their CLI here — equivalent effects are hand-built in CSS/SVG).
- Three case studies today: PetPal (`petpal.html`, pet-sitter marketplace), AI Agent (`ai-agent.html`, internal enterprise AI platform, under NDA), and HealthConnect (`healthconnect.html`, multi-role healthcare SaaS platform).
- No CMS/backend — all content is hand-authored in the HTML files.

## Brand Commitments

- Name: Anastasiia Liuta. Role line: "Product Designer."
- Visual identity: full black theme, yellow accent (`#eab308` family, chosen deliberately to replace an earlier cyan/blue accent), Instrument Serif (display) + Inter (sans) + JetBrains Mono (mono/labels).
- Contact channels: email `anasssta9@gmail.com`, phone `+48 577 202 312`, Telegram `t.me/LiuAna`. Location: Kraków, Poland.

## Evidence on Hand

- PetPal case study (`petpal.html`): real live product at `petpal-ivory.vercel.app`, source at `github.com/Liuta95/Petpal`.
- AI Agent case study (`ai-agent.html`): per the user (Oct 2026), an internal enterprise AI platform worked on under NDA — Product Designer (UX/UI, User Research & Prototyping), Jul 2025 – Oct 2026, cross-functional team (Product Designer, PM, Engineers, QA, Business Stakeholders). Her areas: scheduled daily briefs, creating/editing Skills, role management. Confirmed process: research & testing sessions (no separate upfront discovery phase), stakeholder workshops (flow reviews, testing, input for new scenarios), complex Figma Make prototypes, moderated + unmoderated tests. User feedback on the page (briefs, Skills draft/save/publish confusion, roles) is the user's own account. The page no longer says "Solo project" or "personal AI workspace", and the public live-demo/GitHub links (`ai-agent-pi-jet.vercel.app`, `github.com/Liuta95/AI-Agent`) were removed from the hero since the work is under NDA — restore only if the user confirms they're OK to show. Do not name the company. Case-study copy was deliberately rewritten from scratch after the user's first draft was found to be copied verbatim from another designer's portfolio — nothing in that page may be reused. Homepage card cover (`assets/ai-agent-hero-mockup.jpg`) is the real Welcome screen — pulled from the user's "Sidekick redesign" Figma file (a different file/name than the AI Agent repo above, same real design) via the Figma MCP — composited into the user's own "Dark Room" MacBook mockup photo (`Documents/Mockups for PSD/Free mockups for ps/Dark Room Macbook Pro 16/`).
- HealthConnect Discovery / Working Sessions / Feedback & Validation sections are sourced from the user's own account: the medical intake form was analysed with the CEO and a physician familiar with such questionnaires (questions collected in Figma, structure and completion difficulty analysed, thematic steps + merging/removing questions proposed). No interviews with doctors/attorneys, no competitive analysis, no usability testing, no recorded user feedback — the page says so explicitly. The sessions are called "working sessions", not "workshops", because their format wasn't recorded. Completion support (reminders, staff help, co-filling on a call) was *explored*, not confirmed shipped. Keep these limits if the copy is edited.
- HealthConnect case study (`healthconnect.html`): real client/employer project, UX/UI Designer, Mar 2024 – Jan 2025. No public live link or repo (confidential). Key Screens images in `assets/healthconnect/` are exported directly from the production Figma file (via the Figma MCP, given a node URL per screen), unedited — content, layout, and color are the real design, not a recreation. The small mark in the sidebar is a placeholder logo from the design file itself, not the client's real branding, per the user — it does not need to be removed. Currently two screens (`doctor-home.png`, `screen-2.png` — the Consultation Report/Diagnosis step) shown in the horizontal `.case-slider`; more are expected to be added the same way as the user supplies node URLs — add each as another `.case-slider__slide` + matching `.case-screens-legend` entry. This is disclosed directly on the case-study page under the Key Screens heading — keep that disclosure line accurate to whatever sourcing is true at the time if the section is edited. An earlier version of this section used hand-built HTML/CSS recreations instead, then briefly painted out the sidebar mark as if it were real branding — both superseded by this unedited real-export approach.
- Experience section: real employers only — Trinetix, wht. agency, Upwork. No fictional/NDA-style project names.
- **Hard constraint carried across this whole project: never fabricate metrics, employer names, testimonials, or screenshots.** Where a real screenshot can't be exported into this environment, cover art is disclosed as a hand-built recreation, not presented as a real capture.

## Product Principles

1. Real over impressive — every claim, number, and case study must be traceable to something Anastasiia actually shipped; no invented metrics or logos.
2. AI fluency is shown, not just stated — the case studies themselves (PetPal's AI matching, the AI Agent workspace) carry the "AI-driven" positioning.
3. One clear next action — every page should make it obvious how to get in touch (email/Telegram) or go deeper into a case study.
4. Static-first simplicity — no framework/build step; every visual effect stays achievable in plain HTML/CSS/JS/SVG.

## Accessibility & Inclusion

WCAG contrast (4.5:1 minimum for text) is a standing requirement — already audited once for the yellow accent (found and fixed white-on-yellow button text that failed at ~1.9:1).
