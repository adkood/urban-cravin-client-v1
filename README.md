# Urban Cravin - Streetwear Landing Page

A high-conversion ecommerce landing page for Urban Cravin streetwear brand, built with Next.js, TypeScript, Framer Motion, and Tailwind CSS.

## ✨ Features

### Core Features
- **Water Ripple Effect**: Interactive WebGL-powered ripple effect on hero section with graceful fallback
- **Smooth Scroll Animations**: Velocity-aware reveals and scroll-driven transforms using Framer Motion
- **Dark Aesthetic**: Near-black backgrounds with high-contrast white copy and deep red (#9B1E22) accents
- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Performance Optimized**: Lazy loading, responsive images, and capped frame rates

### Sections

1. **USP Bar**: Auto-hiding top bar with key value propositions (Free shipping, COD, Easy returns)
2. **Navigation**: Sticky navbar with background blur on scroll
3. **Hero**: Full-viewport section with water ripple effect, animated headline, and dual CTAs
4. **Featured Collection**: 3-card grid with hover effects, size selection, and quick add to cart
5. **New Arrivals**: Responsive product grid with color swatches and badges
6. **Lifestyle Lookbook**: Horizontal scroll gallery with parallax effects
7. **Stats Band**: Social proof metrics (Orders, Dispatch time, Return rate, Delivery)
8. **Drop Tracker**: Real-time activity showcase with highlighted products
9. **Feature Block**: Fabric and fit details with quality indicators
10. **Shopping Section**: Payment method showcase with animated ring layout
11. **Testimonials**: Stacked card carousel with manual navigation
12. **FAQ Accordion**: Expandable Q&A section with smooth animations
13. **Banner CTA**: Large conversion-focused banner
14. **Footer**: Four-column layout with social links
15. **Cart Drawer**: Slide-in cart with item management

### Animations & Interactions

- Letter-by-letter headline reveal with scale and delay
- CTA hover effects with lift and glow
- Product image swap on hover
- Staggered grid reveals with viewport detection
- Parallax background shifts
- Scroll-driven opacity and position transforms
- Micro-interactions on all interactive elements

### Accessibility

- 4.5:1 contrast ratio maintained
- Visible focus outlines with neon accent color
- Logical tab order throughout
- Descriptive alt text for all images
- Semantic HTML structure
- ARIA attributes for accordions and interactive elements
- Keyboard navigation support
- `prefers-reduced-motion` support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
urbancraving/
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main landing page
├── components/
│   ├── BannerCTA.tsx         # Conversion-focused banner
│   ├── CartDrawer.tsx        # Slide-in shopping cart
│   ├── DropTracker.tsx       # Activity showcase
│   ├── FAQ.tsx               # Accordion FAQ section
│   ├── FeatureBlock.tsx      # Fabric & fit details
│   ├── FeaturedCollection.tsx # Main product showcase
│   ├── Footer.tsx            # Site footer
│   ├── Hero.tsx              # Hero section with ripple
│   ├── Lookbook.tsx          # Lifestyle gallery
│   ├── Navigation.tsx        # Sticky navbar
│   ├── NewArrivals.tsx       # Product grid
│   ├── ShoppingSection.tsx   # Payment methods showcase
│   ├── StatsBand.tsx         # Social proof metrics
│   ├── Testimonials.tsx      # Customer reviews
│   ├── USPBar.tsx            # Value propositions bar
│   └── WaterRipple.tsx       # Interactive ripple effect
└── public/                   # Static assets
```

## 🎨 Design System

### Colors

- **Background**: `#0a0a0a` (near-black)
- **Card Background**: `#141414`
- **Foreground**: `#ffffff` (white)
- **Accent**: `#9B1E22` (deep red)
- **Border**: `#222222`

### Typography

- **Primary Font**: Inter
- **Headings**: Bold, 32px-80px
- **Body**: Regular, 16px-20px
- **Small**: 12px-14px

### Spacing

- **Container**: max-width with responsive padding
- **Section Padding**: 80px vertical on desktop, 64px on mobile
- **Element Spacing**: 16px-48px based on hierarchy

## 🔧 Customization

### Water Ripple Effect

Adjust ripple parameters in `components/WaterRipple.tsx`:

```tsx
<WaterRipple
  intensity={0.4}  // 0-1, controls opacity
  size={60}        // Ripple expansion size
  maxRipples={5}   // Max concurrent ripples
/>
```

### Theme Colors

Update colors in `app/globals.css`:

```css
:root {
  --background: #0a0a0a;
  --foreground: #ffffff;
  --neon-accent: #9B1E22;
}
```

### Animation Timings

Adjust in component files:

```tsx
transition={{ duration: 0.6, delay: 0.2 }}
```

## 📱 Mobile Optimizations

- Single-column layouts
- Large touch targets (44px minimum)
- Collapsed navigation menu
- Optimized image sizes
- Reduced animation complexity
- Sticky bottom cart button

## ⚡ Performance

- Lazy loading for below-fold images
- Responsive image sources with `srcset`
- Capped ripple frame workload (max 1 per 100ms)
- GPU-heavy effects disabled on low-end devices
- Target LCP under 2.5s

## 🎯 Conversion Optimizations

- Multiple CTAs throughout the page
- Size selection in product cards
- Quick add to cart functionality
- Trust signals (stats, testimonials)
- Clear value propositions
- Smooth checkout flow

## 📝 Content Management

Ready for CMS integration with collections for:

- **Products**: name, price, images, colors, sizes, badges, slug
- **Testimonials**: quote, body, name, role
- **FAQs**: question, answer
- **Hero**: background asset, overlay copy

## 🤝 Contributing

This is a demonstration project. For production use:

1. Connect to a real product database/CMS
2. Implement actual cart functionality
3. Add payment gateway integration
4. Set up analytics tracking
5. Optimize images and assets
6. Add error boundaries and loading states

## 📄 License

This project is for demonstration purposes.

## 🙏 Credits

- Images from Unsplash
- Icons from Lucide
- Fonts from Google Fonts

---

Built with ❤️ for Urban Cravin