# Incluu Consultancy Website - Product Requirements Document

Professional B2B consultancy website showcasing Incluu's expertise in tech equity, ethics, and AI governance with proven track record of $200M+ cost savings and $500M+ market access value creation.

**Experience Qualities**:
1. **Professional Authority** - Establishes immediate credibility through clean design and compelling metrics
2. **Accessible Expertise** - Makes complex tech governance concepts approachable for decision-makers
3. **Trust-Building** - Emphasizes Dr. Dédé's credentials and proven client outcomes

**Complexity Level**: Content Showcase (information-focused)
The site primarily presents Incluu's services, expertise, and value proposition to potential enterprise clients, with a single consultation booking form for lead generation.

## Essential Features

**Hero Value Proposition**
- Functionality: Prominently displays $200M+ savings and $500M+ market access metrics with compelling headline
- Purpose: Immediately establishes ROI and credibility for enterprise prospects
- Trigger: Page load
- Progression: Visual impact → Key metrics → Clear value statement → CTA to learn more
- Success criteria: Visitors understand Incluu's impact within 5 seconds

**Services Portfolio**
- Functionality: Detailed breakdown of three core service areas with outcomes and methodologies
- Purpose: Helps prospects identify relevant solutions and understand Incluu's comprehensive approach
- Trigger: Navigation or scroll from hero
- Progression: Service overview → Specific deliverables → Client benefits → Case study highlights
- Success criteria: Visitors can match their needs to specific services

**Leadership & Credibility**
- Functionality: Dr. Dédé's background, credentials, speaking engagements, and thought leadership
- Purpose: Establishes personal authority and expertise in tech equity and AI governance
- Trigger: About section navigation or scroll
- Progression: Professional photo → Credentials → Experience → Recognition → Publications
- Success criteria: Builds trust for high-stakes enterprise consulting decisions

**Client Social Proof**
- Functionality: Testimonials and case study snippets highlighting business outcomes
- Purpose: Validates Incluu's approach through peer endorsement
- Trigger: Testimonials section view
- Progression: Client quote → Context → Outcome achieved → Industry relevance
- Success criteria: Prospects see similar organizations achieving results

**Consultation Booking**
- Functionality: Professional contact form capturing consultation requests with business context
- Purpose: Converts qualified prospects into sales conversations
- Trigger: CTA buttons throughout site or direct navigation
- Progression: Contact intent → Business details → Consultation type → Scheduling preferences → Confirmation
- Success criteria: Qualified leads submit consultation requests with sufficient context

## Edge Case Handling

- **Mobile Navigation**: Collapsible hamburger menu with clear service access
- **Form Validation**: Real-time validation with helpful error messaging
- **Loading States**: Professional loading indicators for form submissions
- **Accessibility**: Full keyboard navigation and screen reader optimization
- **Performance**: Image optimization and lazy loading for fast enterprise network access

## Design Direction

The design should evoke sophisticated professionalism and trustworthy expertise—feeling polished, authoritative, and accessible to C-suite decision-makers while remaining approachable for operational stakeholders. Minimal interface with purposeful use of white space to let content and credibility indicators breathe.

## Color Selection

Complementary (opposite colors) scheme balancing warmth with professionalism to reflect both the personal expertise and corporate consulting context.

- **Primary Color**: Deep Professional Navy (oklch(0.2 0.08 240)) - Communicates trust, stability, and enterprise credibility
- **Secondary Colors**: Warm Whites and Light Grays (oklch(0.98 0.005 240), oklch(0.94 0.01 240)) - Supporting clean, premium aesthetic
- **Accent Color**: Sophisticated Teal (oklch(0.55 0.12 190)) - Highlights CTAs and important elements while maintaining professional tone
- **Foreground/Background Pairings**: 
  - Background White (oklch(1 0 0)): Navy text (oklch(0.2 0.08 240)) - Ratio 8.2:1 ✓
  - Primary Navy (oklch(0.2 0.08 240)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent Teal (oklch(0.55 0.12 190)): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓
  - Muted Gray (oklch(0.94 0.01 240)): Navy text (oklch(0.2 0.08 240)) - Ratio 7.8:1 ✓

## Font Selection

Typography should convey authoritative expertise while remaining highly readable for executive audiences scanning for key information quickly.

- **Typographic Hierarchy**:
  - H1 (Hero Headlines): Inter Bold/48px/tight letter spacing - Maximum impact for value propositions
  - H2 (Section Headers): Inter SemiBold/32px/normal spacing - Clear content organization  
  - H3 (Service Titles): Inter Medium/24px/normal spacing - Service differentiation
  - Body (Primary Content): Inter Regular/16px/relaxed line height - Optimal readability
  - Caption (Credentials): Inter Medium/14px/tight spacing - Credibility details

## Animations

Subtle professional animations that guide attention and reinforce quality without distracting from business content.

- **Purposeful Meaning**: Smooth transitions communicate polish and attention to detail that reflects consulting quality
- **Hierarchy of Movement**: Gentle fade-ins for content sections, subtle hover states for interactive elements, smooth scroll-triggered reveals for testimonials

## Component Selection

- **Components**: Hero section with Card components for services, Avatar for Dr. Dédé's profile, Form components for consultation booking, Testimonial cards with quotation styling
- **Customizations**: Professional consultation form with business context fields, service cards with hover interactions, mobile-optimized navigation
- **States**: Button hover states with subtle elevation, form field focus with teal accent, loading states for form submission
- **Icon Selection**: Professional icons for services (Shield for governance, Users for equity, Presentation for workshops), LinkedIn and contact icons
- **Spacing**: Generous padding using Tailwind's 8, 12, 16, 24 scale for premium feel
- **Mobile**: Stacked service cards, collapsible navigation, touch-optimized consultation form with larger input targets