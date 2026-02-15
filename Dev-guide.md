┌─────────────────────────────────────────────────────────────────┐
│  LAYER 1: Block Theme (rarely touch)                            │
│  static/assets/css/theme.min.css                                │
│  → Keep as-is, only rebuild for major theme updates             │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  LAYER 2: Flinker Overrides (frequently edit)                   │
│  assets/css/flinker.scss  (NEW - Hugo Pipes)                    │
│  → CSS custom properties + component styles                     │
│  → Processed by Hugo, no separate build needed                  │
└─────────────────────────────────────────────────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  LAYER 3: Page-specific (avoid when possible)                   │
│  Inline <style> blocks in content                               │
│  → Move to Layer 2 whenever reused                              │
└─────────────────────────────────────────────────────────────────┘
