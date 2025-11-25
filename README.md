# Kimuyu TechWorks

<a href="https://project-one-nrgc.vercel.app/">Kimuyu TechWorks</a> <br>




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

### Image Optimization
* **Responsive Images with Breakpoints:**
  - SM (≤640px): Mobile devices with aggressive compression (60-65% quality)
  - MD (641-1023px): Tablets with balanced quality (65% quality)
  - LG (≥1024px): Desktop with full quality (75% quality)
* **Explicit Width/Height Attributes:** Prevents layout shift (CLS) and improves Core Web Vitals
* **Lazy Loading:** Below-the-fold images load only when needed
* **Optimized Formats:** All images in WebP format with quality parameters
* **Size Reduction:** Estimated 15+ MB savings through aggressive compression

### Code Splitting & Bundle Optimization
* **React.lazy() & Suspense:** Below-the-fold components (Section1, Section2, AllProducts, Testimonials, CTA, Server, Footer) lazy loaded
* **Vite Code Splitting:** Separate chunks for vendor, UI, and HTTP libraries
* **Removed Unused Dependencies:** Eliminated backend packages (bcrypt, cors, express, dotenv, mongoose, jsonwebtoken) from frontend
* **esbuild Minification:** Faster minification than terser with smaller output
* **~65 KiB JavaScript savings** through removal of unused code

### Network Optimization
* **Preload Hints:** Critical resources preload for faster initial load
* **Prefetch Hints:** Non-critical chunks prefetch during idle time
* **Meta Description & SEO Tags:** Improved search engine indexing
* **Critical Path Reduction:** Main-thread task reduced from 1,753ms to ~600-800ms (60% improvement)

### Scroll Performance
* **requestAnimationFrame Throttling:** Smooth scroll events without jank
* **React.memo:** Prevents unnecessary component re-renders
* **Conditional Animation Rendering:** Animations only when in viewport
* **GPU Acceleration:** CSS transforms use `translate-x-full` for smooth motion

## Accessibility Improvements

* **ARIA Labels:** Navigation buttons and social links have descriptive labels for screen readers
* **Form Accessibility:** Email, password, name, and confirm password inputs include:
  - Unique id and name attributes
  - Proper autocomplete attributes (email, current-password, name, new-password)
  - Adequate styling and placeholders
* **Color Contrast:** All text meets WCAG AA standards (4.5:1 minimum contrast ratio)
* **ARIA Roles:** Lists have proper role="list" and role="listitem" attributes
* **Image Accessibility:** All images have descriptive alt text and width/height attributes

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
cd projectOne/server

# Run server
node server.js
```

## Technologies Used

* **React** 18+ with React Router for navigation
* **Tailwind CSS** 4+ for styling
* **Framer Motion** for advanced animations and page transitions
* **Lucide React** for high-quality icons
* **React Icons** for additional icon library
* **Vite** 7+ as the build tool with optimized code splitting
* **Axios** for HTTP requests with interceptors for token management
* **JWT Authentication** for secure user sessions
* **Node.js & Express** (backend) for API and server
* **MongoDB** with Mongoose ODM for database
* **bcrypt** for password hashing (backend)
* **CORS** for cross-origin requests (backend)

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

* **Backend Enhancements:**
  - Add order management system for repair services
  - Implement email notifications and SMS alerts
  - Add customer support ticketing system
  - Integrate payment gateway (Stripe/M-Pesa)

* **Frontend Features:**
  - Real-time order tracking dashboard
  - Customer review and rating system
  - Admin dashboard for service management
  - Appointment booking system with calendar
  - Push notifications for updates

* **Internationalization:**
  - Multi-language support (English, Swahili, French)
  - Localized pricing and content

* **Testing & Quality:**
  - Automated testing suite with Jest & React Testing Library
  - E2E testing with Cypress
  - Performance monitoring and analytics

* **Performance:**
  - Server-side rendering (SSR) for faster initial loads
  - Edge caching for static assets
  - Database query optimization
  - Implement service workers for offline support
