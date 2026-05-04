---
name: Digital Citizen System
colors:
  surface: '#f3fbf8'
  surface-dim: '#d4dcd9'
  surface-bright: '#f3fbf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eef5f3'
  surface-container: '#e8f0ed'
  surface-container-high: '#e2eae7'
  surface-container-highest: '#dce4e2'
  on-surface: '#161d1c'
  on-surface-variant: '#3b4a47'
  inverse-surface: '#2a3230'
  inverse-on-surface: '#ebf2f0'
  outline: '#6b7a77'
  outline-variant: '#bacac6'
  surface-tint: '#006a62'
  primary: '#006a62'
  on-primary: '#ffffff'
  primary-container: '#00d1c1'
  on-primary-container: '#00544d'
  inverse-primary: '#2addcd'
  secondary: '#994700'
  on-secondary: '#ffffff'
  secondary-container: '#fb7800'
  on-secondary-container: '#592600'
  tertiary: '#7825ea'
  on-tertiary: '#ffffff'
  tertiary-container: '#cbacff'
  on-tertiary-container: '#6200cb'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#57fae9'
  primary-fixed-dim: '#2addcd'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#ffb68b'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753400'
  tertiary-fixed: '#ebdcff'
  tertiary-fixed-dim: '#d4bbff'
  on-tertiary-fixed: '#270058'
  on-tertiary-fixed-variant: '#5d00c2'
  background: '#f3fbf8'
  on-background: '#161d1c'
  surface-variant: '#dce4e2'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.2'
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 32px
---

## Brand & Style
The design system is engineered to resonate with the digital-native Vietnamese student population. It balances the cutting-edge aesthetic of the "Social Media Era" with a warm, accessible interface that fosters learning and digital responsibility.

The visual style is a fusion of **Glassmorphism** and **High-Contrast Modernism**. This approach utilizes translucent layers and vibrant background blurs to suggest a high-tech, multi-dimensional digital space. The atmosphere is optimistic and energetic, characterized by "squish-friendly" 3D shapes that make complex digital concepts feel tactile and non-intimidating. 

Key brand pillars:
*   **Dynamic Intelligence:** Reflecting the fast-paced nature of social media.
*   **Youthful Authority:** Establishing trust without being overly corporate.
*   **Spatial Depth:** Using layers and 3D elements to visualize the vastness of the digital world.

## Colors
The palette is rooted in high-energy, digitally-native hues. 
*   **Vibrant Teal (#00D1C1):** Acts as the primary anchor, representing clarity and the "digital" frontier.
*   **Energetic Orange (#FF7A00):** Used sparingly for call-to-actions and critical focus points to provide heat and movement.
*   **Purple Gradients:** Used for hero sections and 3D accents, bridging the gap between teal and orange while evoking the aesthetic of modern social platforms.

Neutral tones are kept cool (slate/zinc) to ensure the vibrant colors pop. Backgrounds should remain light and airy to maintain the "generous whitespace" requirement, while dark mode should leverage deep navy instead of pure black to maintain depth.

## Typography
The typography strategy uses two distinct sans-serifs to balance "tech" with "friendliness."

*   **Space Grotesk** is used for headlines. Its geometric quirks and tabular spacing provide a technical, futuristic edge that feels "pro" and modern.
*   **Plus Jakarta Sans** is used for all body text and UI labels. It is chosen for its soft, rounded terminals and high legibility, which offsets the sharpness of the headline font and provides a welcoming reading experience for Vietnamese students.

All headlines should use a tight letter-spacing to emphasize the bold, punchy nature of the brand. Body text maintains a generous line-height to ensure readability during long-form educational content.

## Layout & Spacing
This design system utilizes a **12-column fluid grid** with an emphasis on oversized margins to create an "airy" feel.

*   **Rhythm:** An 8px base unit drives all spacing decisions.
*   **Whitespace:** Horizontal sections should be separated by `lg` or `xl` spacing to prevent visual clutter and allow 3D assets to "breathe" without overlapping text.
*   **Grid:** Use wide 32px gutters to separate content cards, reinforcing the minimalist, organized structure. 
*   **Margins:** Page margins on desktop should never fall below 80px to ensure the content remains centered and focused.

## Elevation & Depth
The system conveys hierarchy through a combination of **Glassmorphism** and **Ambient Shadows**.

1.  **The Base Layer:** Solid white or very light gray surfaces.
2.  **The Glass Layer:** Translucent panels (Background blur: 16px - 32px) with a subtle 1px white inner stroke. This is used for navigation bars and floating sidebars.
3.  **The Shadow Model:** Instead of heavy black shadows, use "Tinted Ambient Shadows." Shadows should inherit a small percentage of the primary color (Teal) or Tertiary color (Purple) to make elements feel like they are floating in a light-filled space.
4.  **3D Elements:** Illustrations and icons should utilize soft-body physics (rounded edges) and realistic lighting to appear as if they are physically resting on or hovering above the UI planes.

## Shapes
The shape language is defined by a "Rounded" (Level 2) philosophy.

*   **Standard UI Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) radius.
*   **Container Cards:** Large content blocks and feature cards use a 1.5rem (24px) radius to emphasize the playful, friendly nature of the system.
*   **3D Assets:** All 3D shapes (spheres, tori, capsules) must avoid sharp points.
*   **Selection States:** Active states for chips or navigation items should use fully pill-shaped (rounded-full) geometry to provide a clear, soft contrast to the rectangular grid.

## Components
Consistent component styling ensures the product feels unified and high-quality.

*   **Buttons:** Primary buttons use the Purple-to-Teal gradient with a subtle drop shadow that expands on hover. Text is uppercase `button` style. Secondary buttons use a thick 2px Teal border with no fill.
*   **Cards:** "Glass" cards are the signature component. They feature a 20% opacity white fill, a 1px border, and a 40px backdrop blur. Use these for featured content.
*   **Input Fields:** Use a light-gray solid fill with a 1px border that turns into a 2px Teal border on focus. Labels sit outside the field in the `label-bold` style.
*   **Chips:** Always pill-shaped. Use subtle pastel backgrounds (Teal at 10% opacity) for inactive states and solid Teal for active states.
*   **Progress Indicators:** Use the Energetic Orange for progress bars to show momentum and achievement.
*   **3D Icons:** Every major section header should be accompanied by a 3D icon (e.g., a 3D translucent globe for "Digital Citizen") to maintain the high-tech visual narrative.