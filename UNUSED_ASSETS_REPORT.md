# DataClyve GetAlpha.ca - Unused Assets & Code Analysis Report
**Generated:** May 2, 2026

---

## 1. MISSING FILES (Referenced but Don't Exist)

### Images Referenced in HTML but Missing from /images Folder:

| File Name | Reference Location | Used In |
|-----------|-------------------|---------|
| `alpha-og.webp` | META TAGS (Open Graph & Twitter) | Lines 30, 40, 76 in index.html + Schema.org JSON-LD |
| `Alpha-Logo.svg` | Schema.org JSON-LD | Line 75 in index.html |

**Impact:** 
- `alpha-og.webp` - Social media sharing will fail (OG image not available)
- `Alpha-Logo.svg` - Schema.org structured data references a missing file (though not critical for rendering)

**Action Required:** 
- Either add these files to `/images/` folder or remove/update references in index.html

---

## 2. UNUSED ASSET FILES

### Images in /images Folder NOT Referenced in Index.html:

| File Name | File Size | Status | Recommendation |
|-----------|-----------|--------|-----------------|
| `cameron_logo_horizontal_lightbg.webp` | Client/partner logo | UNUSED | Delete or document if planned for future use |
| `mmfn-logo.webp` | Logo file | UNUSED | Delete or document if planned for future use |
| `townofcomox.webp` | Municipal logo | UNUSED | Delete or document if planned for future use |

**Analysis:** These appear to be client/partner logos that may have been removed from the page but left in the assets directory.

**Current Image Usage:**
- ✓ aws-logo.png - AWS cloud platform logo (Line 571)
- ✓ microsoft-logo.png - Microsoft logo (Line 572)
- ✓ googlecloud-logo.png - Google Cloud logo (Line 573)
- ✓ osprey_b@2x.webp - Client: Osprey Electric (Line 574)
- ✓ nsswd-logo.webp - Client: North Salt Spring Waterworks (Line 575)
- ✓ xa-klaho@2x.webp - Client: Klahoose First Nation (Line 576)
- ✓ DC-logo.png - Company logo (Lines 307, 963)
- ✓ DC-site-icon.png - Favicon (Line 11)
- ✓ DC-team-image.jpeg - Team photo (Line 560)
- ✓ DC-touch-icon.png - Apple touch icon (Line 12)

---

## 3. UNUSED FONTS

### Fonts Referenced in CSS but Issue:

| Font File | Status | Details |
|-----------|--------|---------|
| `GothamHTF-Thin.otf` | DEFINED but NO PRELOAD | Font weight: 100 - defined in CSS @font-face (line 62) but NOT preloaded in index.html head |

**Preloaded Fonts (Optimized):**
- ✓ GothamHTF-Light.otf - Weight 300 (Line 18 preload + CSS line 70)
- ✓ GothamHTF-Book.otf - Weight 400 (Line 19 preload + CSS line 78)
- ✓ GothamHTF-Medium.otf - Weight 500 (Line 20 preload + CSS line 86)
- ✓ GothamHTF-Bold.otf - Weight 700 (Line 21 preload + CSS line 94)
- ✓ GothamHTF-Ultra.otf - Weight 800 (Line 22 preload + CSS line 102)

**Analysis:** GothamHTF-Thin (weight 100) is declared in CSS but not preloaded. Check if it's actually used in the design. If font-weight: 100 is never explicitly used in HTML elements, this font is unnecessary.

---

## 4. COMMENTED-OUT CODE BLOCKS

### Index.html
**Result:** NO dead/commented-out code found.
- Contains 19 comment markers, but all are **structural section markers** (e.g., `<!-- HERO -->`, `<!-- SERVICES -->`, `<!-- INDUSTRIES -->`)
- These are intentional navigation aids and not dead code

### Global.css
**Result:** NO HTML-style comment blocks (`<!-- -->`).
- File uses standard CSS syntax and roadmap notes embedded in /* */ comments
- All comments are documentation/planning notes with "HARDCODED" flags noting technical debt

### Global.js
**Result:** NO commented-out code blocks.
- 8 inline comments found (lines 9, 20, 27, 33, 48, 64, 83, 103)
- All are documentation comments explaining functionality
- No `/*` multi-line or dead/disabled code blocks

**Conclusion:** Code is well-maintained with no abandoned/commented-out sections.

---

## 5. UNUSED CSS CLASSES

### Defined in global.css but Potentially Unused:

Based on analysis of `global.css`, the following CSS selectors may be defined for future use or on other pages not included in this single `index.html` file:

| Class Name | Used? | Notes |
|-----------|-------|-------|
| `.nav-nl.active` | DEFINED | Only set dynamically by JS on multi-page sites |
| `.nav-drop-res` | DEFINED | Resources dropdown - exists but may only be on /resources/ page |
| `.cat-pill--strategy` | DEFINED | Blog category pills (only used if blog section rendered) |
| `.cat-pill--cyber` | DEFINED | Blog category pills - cybersecurity |
| `.cat-pill--news` | DEFINED | Blog category pills - news |
| `.cat-pill--managed-it` | DEFINED | Blog category pills - managed IT |
| `.cat-pill--workplace` | DEFINED | Blog category pills - workplace |
| `.filter-btn` | DEFINED | Blog filter buttons (only on blog index) |
| `.blog-card` | DEFINED | Blog card layout (only on blog pages) |
| `.bc` | DEFINED | Dark blog card variant (blog sections) |
| `.bph-meta` | DEFINED | Blog post hero meta (blog post pages only) |
| `.bph-date` | DEFINED | Blog post date (blog pages only) |
| `.bph-back` | DEFINED | Back link on blog posts |
| `.guide-card` | DEFINED | Guide/resource cards (on guides page) |
| `.guide-card-cat` | DEFINED | Guide category labels |
| `.guide-card-title` | DEFINED | Guide titles |
| `.guide-card-desc` | DEFINED | Guide descriptions |
| `.ph.ph-compact` | DEFINED | Compact page hero variant |

**Assessment:** These are likely **intentionally defined** in a shared `global.css` that applies to the entire site (home page + internal pages). They are NOT wasted—just not visible on the home page alone.

**Key Classes Actively Used on Index.html:**
- Navigation: `.nav`, `.nav-i`, `.nav-logo`, `.nav-links`, `.nav-ni`, `.nav-nl`, `.nav-drop`, `.nav-dl`, `.nav-mtog`, `.nav-mob`
- Typography: `.h-hero`, `.h-page`, `.h2`, `.h3`, `.h4`, `.h-mid`, `.body-lg`, `.body-md`, `.body-sm`, `.ey`
- Cards: `.prop`, `.prop-g`, `.feat-g`, `.feat`, `.ind-card`, `.ind-img-card`, `.tc` (testimonial)
- Buttons: `.btn-p`, `.btn-dk`, `.nav-cta`
- Layout: `.s`, `.s-sm`, `.w`, `.ph`, `.ph-in`
- Animation: `.fu`, `.vis` (fade-up on scroll)
- Utility: `.wh` (white text on dark)

---

## 6. UNUSED JAVASCRIPT FUNCTIONALITY

### Active JavaScript Functions in global.js:

1. **Navigation Light Mode Toggle** (Lines 7-45)
   - ✓ Used: Detects section background color, switches nav glass effect
   - Function: `tick()` - called on scroll, resize, and DOMContentLoaded

2. **Mobile Menu Toggle** (Lines 48-62)
   - ✓ Used: `.nav-mtog` button toggles `.nav-mob` panel
   - Requires: HTML elements with IDs `nav` and `nav-mob`

3. **Accordion Functionality** (Lines 64-80)
   - ✓ Used: `.acc-b` buttons toggle `.acc-bd` panels
   - One-at-a-time expansion logic implemented

4. **Scroll-Reveal Animation** (Lines 83-100)
   - ✓ Used: IntersectionObserver adds `.vis` class to `.fu` elements
   - Progressive animation delay: `transitionDelay = (i % 6 * .08)s`
   - Fallback: Adds `.fu-ready` class if IntersectionObserver available

5. **Cookie Consent Banner** (Lines 103-127)
   - ✓ Used: `.ck-banner` with `.ck-acc` and `.ck-dec` buttons
   - Stores choice in localStorage with key `alpha_ck_consent`

**Unused Code:** NONE - all functions are wired to active HTML elements.

### CSS Classes Used by JavaScript:
- `.nav` - Navigation container (light mode class `.lt` toggled)
- `.nav-mtog` - Mobile toggle button (aria-expanded toggled)
- `.nav-mob` - Mobile menu panel (class `.open` toggled)
- `.acc-b` - Accordion button (classes `.on` toggled)
- `.acc-bd` - Accordion body (class `.open` toggled)
- `.fu` - Fade-up elements (class `.vis` added on scroll)
- `.ck-banner` - Cookie banner (display toggled)

---

## 7. HARDCODED VALUES & TECHNICAL DEBT

### CSS Hardcoded Colors (Ready for Refactoring):

The following elements use hardcoded RGBA values instead of CSS variables. These are documented with `/* HARDCODED */` comments:

| Location | Current Value | CSS Variable Alternative | Usage |
|----------|--------------|------------------------|-------|
| `.nav` | rgba(8, 8, 8, .55) | N/A | Dark glass background |
| `.nav-nl` | rgba(255, 255, 255, .82) | `--tx-dk3` | Nav link text color |
| `.nav-ph` | rgba(255, 255, 255, .82) | `--tx-dk-muted` | Phone number text |
| `.nav-mob a` | #dcdcdc | N/A | Mobile menu links |
| `.body-xs-lt` | #fff | N/A | Light text on dark |
| `.quote-text.wh` | rgba(255, 255, 255, .88) | `--tx-dk` | Quote text on dark |
| `.quote-cite.wh` | #fff | N/A | Quote attribution |
| `.feat p` | #fff | N/A | Feature card text |
| `.svc-card-dk p` | #fff | N/A | Service card text |
| `.svc-card-dk-lg p` | #fff | N/A | Large service card |
| `.tc-q` | #fff | N/A | Testimonial quote |
| `.tc-o` | #fff | N/A | Testimonial role |
| `.btn-gh.wh` | Multiple | N/A | Ghost button on dark |
| `.f-tp` | rgba(255, 255, 255, .92) | `--tx-dk2` | Footer tagline |
| `.f-ct a` | rgba(255, 255, 255, .92) | `--tx-dk2` | Footer contact |
| `.f-col h4` | #fff | `--tx-dk` | Footer column headings |
| `.f-col a` | rgba(255, 255, 255, .92) | `--tx-dk2` | Footer links |
| `.f-copy` | #fff | N/A | Copyright text |
| `.f-pp` | #fff | N/A | Privacy policy link |

**Roadmap Notes Found:** CSS comments indicate intent to centralize these values in `:root` variables.

---

## 8. SUMMARY & RECOMMENDATIONS

### Quick Wins (Do Now):

1. **Add Missing Image Files** - Create or source:
   - `alpha-og.webp` (1200x630px for social sharing)
   - `Alpha-Logo.svg` (for schema.org validation)

2. **Delete Unused Images** (to reduce deployment size):
   - `cameron_logo_horizontal_lightbg.webp`
   - `mmfn-logo.webp`
   - `townofcomox.webp`

3. **Verify Font Usage** - Check if weight 100 (Thin) is needed:
   - If `font-weight: 100` never appears in CSS or HTML, remove `GothamHTF-Thin.otf` and its @font-face declaration

### Medium Priority (Refactor):

1. **Centralize CSS Colors** - Move hardcoded RGBA values to `:root` variables (note: CSS comments indicate this is planned)
   - This will make maintenance easier and brand changes faster

2. **Document Multi-Page Usage** - Clarify which CSS classes are used on blog, guides, and other pages
   - Current global.css includes extensive classes for blog cards, guides, filters that aren't visible on index.html

### Low Priority (Technical Debt):

1. Monitor for future removed sections where CSS/JS may become dead code
2. Consider CSS class audit after new pages go live

---

## 9. FILE INVENTORY

### Working Directory Structure:
```
/d:/projects/DataClyve/getalpha.ca/
├── index.html (1050+ lines)
├── css/
│   └── global.css (3000+ lines)
├── js/
│   └── global.js (127 lines)
├── images/ (12 files)
│   ├── aws-logo.png ✓
│   ├── cameron_logo_horizontal_lightbg.webp ✗ UNUSED
│   ├── DC-logo.png ✓
│   ├── DC-site-icon.png ✓
│   ├── DC-team-image.jpeg ✓
│   ├── DC-touch-icon.png ✓
│   ├── googlecloud-logo.png ✓
│   ├── microsoft-logo.png ✓
│   ├── mmfn-logo.webp ✗ UNUSED
│   ├── nsswd-logo.webp ✓
│   ├── osprey_b@2x.webp ✓
│   ├── townofcomox.webp ✗ UNUSED
│   └── xa-klaho@2x.webp ✓
└── fonts/ (5 files)
    ├── GothamHTF-Bold.otf ✓
    ├── GothamHTF-Book.otf ✓
    ├── GothamHTF-Light.otf ✓
    ├── GothamHTF-Medium.otf ✓
    ├── GothamHTF-Ultra.otf ✓
    └── GothamHTF-Thin.otf (DEFINED but NOT PRELOADED)
```

---

## Final Assessment

| Category | Status | Issues | Risk |
|----------|--------|--------|------|
| **Missing Files** | ⚠️ 2 files | alpha-og.webp, Alpha-Logo.svg | Medium - Affects social sharing & schema validation |
| **Unused Assets** | ⚠️ 3 files | 3 unused logo images | Low - Just storage bloat |
| **Unused Fonts** | ⚠️ 1 issue | Thin weight possibly unused | Low - Small file size impact |
| **Dead Code** | ✓ None | Clean codebase | Low |
| **Unused CSS** | ✓ N/A | Classes are for multi-page site | Low - Intentional design |
| **Unused JS** | ✓ None | All functions active | Low |
| **Code Quality** | ⚠️ Technical Debt | Hardcoded values in CSS | Low - Works fine, planned refactor |

**Overall:** The project is clean with good code organization. Main improvements needed are adding missing social media assets and removing obsolete image files.
