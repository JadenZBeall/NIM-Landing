NIM Project Constitution
Ohana Belle Press | Narrative Intelligence Method
Version 1.0 | June 2026
This document governs all development and modification of the NIM web infrastructure. It is the single reference for architectural decisions and takes precedence over any prior conversation or document. All future development sessions begin here.
Part I: Immutable Philosophy
These principles do not change regardless of implementation state, development phase, or business pressure.
The NIM is a diagnostic, not an editorial service. The distinction is the source of all positioning and pricing power. Copy, structure, and CTAs must always reflect this distinction. Language that implies editing, critique, or judgment is prohibited.
The page earns rather than persuades. The psychological sequence is Recognition, Reframing, Transfer of Trust, Safe Action. No section may skip ahead. Trust must be present before any call to action.
Proof is load-bearing, not decorative. The Hurston blind test is the primary credibility asset. It is real, verifiable, and structurally impressive. It must appear on the page before any pricing or submission prompt.
No fabricated NIM output anywhere. No illustrative scores, no sample Hearthprints from runs that did not occur, no representative examples that were not produced by an actual pipeline run. This applies to every page and every document in the project, without exception.
Confidential IP stays confidential. The 14 axis names, VR classification labels, and internal scoring rubrics do not appear in any public-facing file. The Four Forces (Direction, Connection, Meaning, Desire) is the public framework. Nothing further.
The literary audience requires clarity, specificity, and intellectual honesty. Hype, urgency, and vague promises produce the opposite of conversion for this audience. Every sentence must be defensible and specific.
No em dashes anywhere in any output. Use commas, colons, parentheses, or restructure the sentence.
Part II: Locked Decisions
These decisions have been made and are not subject to revisitation without explicit authorization.
Decision
Status
Rationale
Direct payment model
Locked
Application-then-accept model creates a cooling window that loses warm buyers. Writer selects tier, pays via Stripe, submits manuscript.
PayPal retired
Locked
Stripe is the payment system. Three active payment links at $47/$147/$297.
Video component removed
Locked
Tier III (Premium, $297) is written debrief only. No Loom, no video, no walkthrough.
Application language retired
Locked
"Apply," "Application," "Accepted" create friction. Replaced with direct submission language.
App build deferred
Locked
Not until five manual clients are complete. Not before.
Two Claude Projects
Locked
Execution project (deterministic, constrained) and development project (open, collaborative). Do not mix.
Part III: Architecture
Target Landing Page Structure
The nine-section architecture is the target state for index.html. Sections must appear in this order:
Hero
Problem
Diagnosis vs Editing (comparison table)
How It Works
Hurston Proof
Deliverables
Objections
Lead Magnet
Pricing and Submission
Conversion Flow (current model)
Code
Custom success page redirect from Stripe to nim-intake-form.html is a known open item. Currently defaults to Stripe-hosted confirmation.
Repository Structure
Code
Part IV: Brand Identity (Locked)
Color Palette
Landing page (nimlab.netlify.app):
Token
Hex
Role
Night
#06050d
Page background
Ember
#F0B05A
Primary accent, links, highlights
Ember Mid
#D4783E
Secondary accent, CTAs
Ember Low
#8a4020
Tertiary, depth
Bone
#F8F0DC
Body text on dark
Dim
#7A6A50
Muted labels, hints
Line
rgba(212,120,62,0.18)
Borders, dividers
NIM product palette (Hearthprint and signal report):
Token
Hex
Page
#F0EDE4
Ink
#1C1C18
Ink Mid
#323228
Ink Light
#585850
Ink Faint
#7A7A72
Rule
#C0BEB4
Typography
Landing page:
Cormorant Garamond: display, wordmark, italic accents
Jost: body, labels, metadata (deliberate UI exception to press identity)
Press identity (Hearthprint, press materials):
Crimson Pro: display
Cormorant Garamond: body
Cormorant SC: labels, metadata
IM Fell English italic: pull quotes only
No sans-serif in press identity materials. No exceptions.
Part V: Session Protocol
Every development session follows this sequence before any code is written or modified:
Fetch the live URL (nimlab.netlify.app) to confirm current deployed state.
Check the GitHub repo for current file list and recent commits.
Read this Constitution.
Read NIM_Change_Log.md for recent change history.
Read the relevant Change Order.
Execute only what the Change Order specifies.
If anything discovered during step 1 or 2 conflicts with the Change Order, stop and report before proceeding.
Part VI: Change Order Authority
All modifications to the repository must be issued as Change Orders. Change Orders are numbered sequentially (CO-001, CO-002, etc.) and logged in NIM_Change_Log.md.
A Change Order must specify:
Objective
Exact tasks
Explicit constraints (what not to touch)
Required deliverables (summary, files modified, commit hash, issues found)
Any ambiguity in a Change Order is resolved by preserving the current implementation and reporting the ambiguity, never by making assumptions.
Ohana Belle Press | West Virginia | Est. 2025
Narrative Intelligence Method | Hearthprint™
