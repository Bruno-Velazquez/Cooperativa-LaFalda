---
name: Agua de La Falda
colors:
  surface: '#f8f9ff'
  surface-dim: '#d9dae0'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3f9'
  surface-container: '#ededf4'
  surface-container-high: '#e7e8ee'
  surface-container-highest: '#e1e2e8'
  on-surface: '#191c20'
  on-surface-variant: '#414750'
  inverse-surface: '#2e3035'
  inverse-on-surface: '#eff0f6'
  outline: '#727781'
  outline-variant: '#c1c7d2'
  surface-tint: '#1b60a2'
  primary: '#003e6f'
  on-primary: '#ffffff'
  primary-container: '#005596'
  on-primary-container: '#a4caff'
  inverse-primary: '#a2c9ff'
  secondary: '#00658d'
  on-secondary: '#ffffff'
  secondary-container: '#3dbeff'
  on-secondary-container: '#004a69'
  tertiary: '#642d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#873f01'
  on-tertiary-container: '#ffb88c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004881'
  secondary-fixed: '#c6e7ff'
  secondary-fixed-dim: '#83cfff'
  on-secondary-fixed: '#001e2d'
  on-secondary-fixed-variant: '#004c6b'
  tertiary-fixed: '#ffdbc8'
  tertiary-fixed-dim: '#ffb68a'
  on-tertiary-fixed: '#321300'
  on-tertiary-fixed-variant: '#743500'
  background: '#f8f9ff'
  on-background: '#191c20'
  surface-variant: '#e1e2e8'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The design system for the **Cooperativa de Agua Potable y Servicios Públicos de La Falda** is built on the pillars of transparency, reliability, and community service. It adopts a **Modern Corporate Minimalism** style that prioritizes clarity over ornamentation, ensuring that critical public service information is accessible to all demographics, particularly seniors.

The visual language uses abundant whitespace to reduce cognitive load and high-contrast elements to ensure legibility. The interface feels institutional yet approachable, moving away from bureaucratic density toward a breathable, service-oriented digital environment.

## Colors
The palette is rooted in the "Institutional Water Blue," symbolizing stability and the primary resource managed by the cooperative.

- **Primary (#005596):** Used for navigation, headers, and brand-critical elements.
- **Secondary (#00A8E8):** A vibrant "Electric Cyan" reserved strictly for high-priority Call-to-Actions (CTAs) and interactive states to guide the eye.
- **Background (#F8FAFC):** An off-white "Cool Slate" that reduces screen glare and provides a soft foundation for content.
- **Surface (#FFFFFF):** Pure white is used exclusively for elevated cards and containers to create a clear visual hierarchy.
- **Functional Colors:** Use standard semantic greens for payment success and reds for overdue balance alerts, ensuring they meet AA accessibility contrast ratios against the light background.

## Typography
Montserrat is the sole typeface, chosen for its geometric clarity and high legibility. 

- **Scale:** Larger-than-average body text (18px for `body-lg`) is used to accommodate elderly users. 
- **Weights:** Use Bold (700) for page titles, SemiBold (600) for subheaders and labels, and Regular (400) for long-form reading.
- **Hierarchy:** Maintain clear vertical rhythm. Section headers should have significant top-margin spacing to separate distinct service areas (e.g., "Mi Factura" vs "Reportar Avería").

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a centered, authoritative feel, and a fluid layout on mobile.

- **Desktop:** 12-column grid with a 1200px max-width.
- **Mobile:** Single column with generous 16px side margins.
- **Spacing Rhythm:** Use multiples of 8px. Use `stack-lg` (32px) between unrelated sections and `stack-md` (16px) between related elements within a card.
- **Whitespace:** Do not crowd the interface. If a screen feels "empty," it is likely achieving the goal of clarity for the user base.

## Elevation & Depth
This design system uses a **Tonal Layering** approach combined with extremely soft ambient shadows.

- **Level 0 (Background):** #F8FAFC.
- **Level 1 (Cards/Containers):** #FFFFFF with a 1px border (#E2E8F0) or a very soft shadow (0px 4px 20px rgba(0, 0, 0, 0.05)).
- **Depth:** Avoid heavy drop shadows. Depth should be suggested through subtle shifts in surface color and thin, low-contrast outlines.
- **Interactions:** When a card is hovered or pressed, it may slightly lift (increase shadow spread) or gain a primary-colored 2px border.

## Shapes
In alignment with the cooperative’s approachable nature, all interactive elements and containers feature soft, friendly corners.

- **Base Radius:** 12px (defined as `rounded-md`). This applies to input fields, buttons, and small cards.
- **Large Radius:** 24px (`rounded-xl`) for main content areas or large callout sections.
- **Buttons:** Use the base radius (12px) rather than fully rounded pills to maintain a professional, corporate structure.

## Components
- **Buttons:** Primary buttons use #005596 with white text. High-priority "Pagar Factura" (Pay Bill) buttons use #00A8E8. All buttons should have a minimum height of 48px for touch accessibility.
- **Cards:** White background, 12px border radius, and a subtle 1px border. Used for grouping account details or news items.
- **Input Fields:** Large, clear labels placed above the field. Use a 12px radius and a 2px border on focus using the Primary color.
- **Status Chips:** Small, rounded-md indicators for "Pagado" (Paid), "Pendiente" (Pending), or "En Trámite" (In Progress), using low-saturation background tints of green, yellow, and blue respectively.
- **Lists:** Clean rows with 16px padding and a thin separator line. Each row should have a clear trailing icon (e.g., a chevron) to indicate interactivity.
- **Alerts:** Inline banners for water outages or maintenance work should use a soft blue background with a bold primary-colored icon.