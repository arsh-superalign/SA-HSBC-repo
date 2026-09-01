# Component — Trace Disclosure

**Purpose**
Provenance: how the answer was found, and what the model added.

**Used on**
Chat, on all three answer variants.

**Variants**
None.

**States**
Collapsed · expanded.

**Interactions**
The trigger toggles ("How this answer was found +" / "Hide how this was found −"). Each added term has a removable ✕, per message.

**Important visual rules**
- Six numbered steps, each with an optional MODEL or PERM badge and a duration.
- Then the term chips, then the closing line: "The model can only add candidates — it can never remove your wording."
- **That line is the point of the panel.** Keep it last and keep it verbatim.
- The trigger is a quiet action: `#808080` becoming accent on hover.

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
