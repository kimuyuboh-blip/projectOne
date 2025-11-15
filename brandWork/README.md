# Kimuyu TechWorks

## Live Demo

=======live site =======

## Project Overview

Kimuyu TechWorks is a modern, high-performance repair service website designed to showcase expert device repair services including mobile phones, laptops, diagnostics, optimization, and more. The platform blends a futuristic brand identity with a highly responsive UI, smooth animations, and optimized performance for both mobile and desktop users.

## Brand Identity

### Color System

* **Primary: #3A9BD9** — Represents trust, clarity, and technical precision. Used for brand elements, highlights, and headings.
* **Secondary: #1DE9B6** — Symbolizes efficiency, freshness, and energy. Applied in buttons, gradients, and key call-to-action elements.
* **Dark Base: #1E1E1E** — Provides a sleek, modern foundation for dark mode.
* **Light Base: #FAFAFA / #F0F0F0** — Clean, bright backgrounds enhancing readability.
* **Accent Grays (#505050 / #B5B5B5)** — Used for secondary labels and supporting text.

Note: I chose to use a gradient of these colors for a more dynamic look.

### Typography

* **Headings: Poppins / Inter Extra-Bold**
  Chosen for geometric clarity, modern display quality, and strong impact in hero sections.
* **Body: Inter / Roboto Regular**
  Optimized for long-form readability, high legibility, and device adaptability.

## Design Decisions

### Layout Adherence

* All spacing follows an **8px–12px modular system**, ensuring consistency in padding, margins, and component structure.
* Tailwind's utility classes enforce precise measurement, while Figma prototypes guided all layout decisions.

### Tools Used for Design Accuracy

* Figma for spacing, wireframes, and visual consistency.
* Chrome DevTools for real-time UI inspection.
* Framer Motion timeline tools for animation smoothing and testing.

### Creative Departures

* **Content Strategy:** Messaging focuses on clarity, confidence, and highlighting quantified expertise (“9,000+ phones repaired”).
* **Brand Positioning:** Futuristic gradients, neon undertones, and motion-based storytelling to reinforce skill and trust.
* **MD Breakpoint Decisions:** Navigation shifts to mobile drawer, images resize proportionally, and grids collapse elegantly for readability.

## Component Architecture

The UI is built using modular, memoized, and reusable components:

* **Header:** Scroll-aware with `requestAnimationFrame` optimization, mobile drawer, and brand-linked navigation.
* **Hero:** Large typography, background media overlay, animated counters, and CTA actions.
* **Feature Section:** Two-column responsive layout with animated service listings.

**Reusability Strategy:**

* Encapsulated motion logic inside each component.
* Shared color and gradient patterns.
* Navigation logic isolated from content for scalability.

## Performance Optimizations

* Scroll events optimized using `ticking` and `requestAnimationFrame`.
* `React.memo` used to reduce unnecessary re-renders.
* Lazy loading of images (`loading="lazy"`).
* Compressed `.webp` assets for faster load times.
* Conditional rendering of animations only when in viewport.
* Tailwind JIT removes unused styles to reduce CSS size.

## Image Credits

* **hero background.webp** — Licensed stock image depicting technician repair scenario.
* **feature.webp** — Licensed stock image of mobile repair advertisement from one of my work logs.
* Most of the images were from my own catalogue.

## Installation & Setup

```bash
# Clone repository
git clone https://github.com/kimuyuboh-blip/projectOne.git

# Navigate into project directory
cd projectOne/brandWork

# Install dependencies
npm install

# Start development server
npm run dev

# Server side
cd projectOne/brandWork/server

# Run server
node server.js
```

## Technologies Used

* **React** 18+
* **Tailwind CSS** 3+
* **Framer Motion** for animations
* **Lucide React** for icons
* **Vite** as the build tool

## Challenges & Solutions

### **1. Header Flickering During Scroll**

**Challenge:** Rapid state updates caused jittery background transitions.
**Solution:** Used `requestAnimationFrame` and ref-based throttling to ensure smooth, controlled updates.

### **2. Mobile Navigation Drawer Performance**

**Challenge:** Drawer animation felt heavy on mid-range devices.
**Solution:** Transitioned to GPU-accelerated transforms (`translate-x-full`) plus a soft backdrop blur.

### **3. Maintaining Text Readability Over Dynamic Hero Background**

**Challenge:** Hero background image reduced contrast.
**Solution:** Added dark overlays, gradient masking, and text-shadow highlights.

## Future Improvements

* Add a CMS dashboard for managing services and product listings.
* Integrate appointment booking and automated email notifications.
* Implement cart functionality for product sales.
* Add multilingual support (English, Swahili, French).
* Add automated testing suite with Jest / React Testing Library.
* Make the web app much more faster.
