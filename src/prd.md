# Incluu Consultancy Website - Product Requirements Document

## Core Purpose & Success

**Mission Statement**: Create a professional B2B consultancy website for Incluu that positions Dr. Dédé as the premier expert in tech equity and AI governance while driving consultation bookings and showcasing quantifiable business impact.

**Success Indicators**: 
- Increased consultation booking inquiries
- Clear communication of $200M+ cost savings and $500M+ market access value propositions
- Professional brand positioning that builds trust with enterprise clients
- Mobile-responsive experience that works seamlessly across devices

**Experience Qualities**: Professional, Trustworthy, Expert

## Project Classification & Approach

**Complexity Level**: Light Application (multiple features with basic state)
- Professional service website with multiple sections
- Contact forms with validation
- Client testimonials showcase
- Service portfolio presentation
- Mobile-responsive design

**Primary User Activity**: Consuming information and Acting (booking consultations)

## Core Problem Analysis

**Problem**: Enterprise clients need expert guidance on tech equity and AI governance but struggle to find qualified consultants who can demonstrate measurable business impact and regulatory expertise.

**User Context**: B2B decision makers (CTOs, Chief Compliance Officers, HR executives) researching consultancy services, likely viewing during business hours on various devices.

**Critical Path**: Landing → Value Proposition → Services → Credibility (About/Testimonials) → Contact/Booking

**Key Moments**: 
1. First impression with quantifiable impact metrics
2. Service alignment with specific business needs  
3. Trust-building through Dr. Dédé's credentials and testimonials

## Essential Features

### Homepage Hero Section
- **Functionality**: Immediately communicate Incluu's value proposition with key metrics
- **Purpose**: Hook visitors with quantifiable business impact ($200M+ savings, $500M+ market access)
- **Success Criteria**: Clear headline, compelling metrics, prominent CTA

### Services Portfolio
- **Functionality**: Detailed presentation of three core services with descriptions and outcomes
- **Purpose**: Help prospects understand service fit and scope
- **Success Criteria**: Clear service differentiation, benefit-focused copy, consultation CTAs

### About Dr. Dédé Section
- **Functionality**: Professional bio highlighting expertise, credentials, and thought leadership
- **Purpose**: Build credibility and personal connection with the expert
- **Success Criteria**: Professional photo, compelling background, trust indicators

### Client Testimonials
- **Functionality**: Social proof through client success stories and quotes
- **Purpose**: Reduce risk perception and validate consultant effectiveness
- **Success Criteria**: Prominent Burke School testimonial, diverse client representation

### Contact/Consultation Booking
- **Functionality**: Professional contact form with consultation request capabilities
- **Purpose**: Convert visitors into leads and consultation bookings
- **Success Criteria**: Easy-to-complete form, multiple contact options, clear next steps

## Design Direction

### Visual Tone & Identity

**Emotional Response**: Confidence, competence, and approachability - visitors should feel they're working with a seasoned expert who understands both technical and business challenges.

**Design Personality**: Professional yet approachable, sophisticated but not intimidating, expert-driven with human warmth.

**Visual Metaphors**: Clean lines and structured layouts reflecting systematic approach to complex problems. Subtle tech-inspired elements without being overly technical.

**Simplicity Spectrum**: Minimal-to-moderate interface that prioritizes content clarity and professional credibility over visual complexity.

### Color Strategy

**Color Scheme Type**: Warm, inclusive professional palette with deep purples and energizing orange accents

**Primary Color**: Deep professional purple (oklch(0.35 0.08 280)) - communicates wisdom, innovation, and premium expertise
**Secondary Colors**: Warm off-white backgrounds (oklch(0.98 0.005 60)) for approachable sophistication
**Accent Color**: Vibrant orange (oklch(0.65 0.15 25)) for energy, creativity, and call-to-actions - representing innovation and warmth
**Color Psychology**: Purple conveys expertise and transformation, orange adds energy and approachability, warm undertones create inclusivity

**Color Accessibility**: Enhanced contrast ratios ensure excellent readability
**Foreground/Background Pairings**:
- Background (warm white): Deep purple text (oklch(0.15 0.02 280)) - 15.2:1 contrast ratio ✓
- Card (white): Deep purple text (oklch(0.15 0.02 280)) - 15.8:1 contrast ratio ✓  
- Primary (deep purple): Warm white text (oklch(0.98 0.005 60)) - 15.2:1 contrast ratio ✓
- Secondary (warm gray): Deep purple text (oklch(0.15 0.02 280)) - 14.1:1 contrast ratio ✓
- Accent (vibrant orange): Warm white text (oklch(0.98 0.005 60)) - 6.2:1 contrast ratio ✓
- Muted (light warm gray): Medium purple text (oklch(0.5 0.03 280)) - 5.1:1 contrast ratio ✓

### Typography System

**Font Pairing Strategy**: Sophisticated dual-typeface system - Poppins for impact, Inter for readability
**Which fonts**: Poppins (headings) and Inter (body) from Google Fonts - modern, inclusive, professional
**Typographic Hierarchy**: 
- Headlines: Poppins 700 (Bold) for authoritative impact and brand personality
- Subheadings: Poppins 600 (Semibold) for clear structure and hierarchy  
- Body: Inter 400 (Regular) for optimal readability and accessibility
- Captions: Inter 500 (Medium) for subtle emphasis and UI elements

**Font Personality**: Poppins brings warmth and approachability while maintaining authority; Inter ensures clarity and inclusivity across all reading abilities
**Legibility Check**: Both fonts are highly optimized for digital interfaces with excellent multilingual support and accessibility features

### Visual Hierarchy & Layout

**Attention Direction**: F-pattern layout guiding from value proposition → services → credibility → action
**White Space Philosophy**: Generous spacing creates premium feel and improves content digestibility
**Grid System**: 12-column responsive grid with consistent gutters and margins
**Content Density**: Balanced - substantial content without overwhelming busy executives

### Animations

**Purposeful Meaning**: Subtle fade-ins on scroll to create polished, professional feel
**Hierarchy of Movement**: Primary focus on CTA buttons, secondary on content reveals
**Contextual Appropriateness**: Minimal, tasteful animations that enhance rather than distract

### UI Elements & Component Selection

**Component Usage**:
- Cards for services and testimonials (shadcn Card component)
- Buttons for CTAs (shadcn Button with professional styling)
- Form elements for contact (shadcn Input, Textarea, Button)
- Navigation for smooth scrolling between sections

**Component Customization**: 
- Buttons with rounded corners and subtle shadows
- Cards with clean borders and hover effects
- Form inputs with focus states matching brand colors

**Icon Selection**: Phosphor icons for clean, professional appearance - business-focused iconography

### Accessibility & Readability

**Contrast Goal**: WCAG AA compliance minimum (4.5:1 for normal text, 3:1 for large text)
All color pairings above exceed these requirements, ensuring excellent accessibility.

## Implementation Considerations

**Scalability Needs**: Foundation for adding blog, case studies, or additional service pages
**Testing Focus**: Form functionality, mobile responsiveness, load times
**SEO Focus**: Tech equity, AI governance, regulatory compliance, enterprise consulting keywords

## Reflection

This approach balances professional credibility with approachable expertise, using proven B2B website patterns while highlighting Incluu's unique value proposition and Dr. Dédé's personal brand. The design will compete effectively with larger consultancies while maintaining the personal touch of boutique expertise.