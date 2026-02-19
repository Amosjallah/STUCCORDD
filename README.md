# STUCCORD - Premium Digital Agency Website

A premium, production-ready digital agency website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for elegant micro-interactions
- **Dark/Light Mode**: Full theme support with next-themes
- **SEO Optimized**: Comprehensive metadata and structured data
- **Performance Optimized**: Code splitting, lazy loading, and optimized images
- **Accessible**: WCAG compliant with semantic HTML and ARIA labels
- **Responsive Design**: Mobile-first approach with full responsive support
- **Production Ready**: Deployment-ready configuration for Vercel

## 📁 Project Structure

```
/app
  /about          # About page
  /services       # Services page
  /contact        # Contact page
  layout.tsx      # Root layout
  page.tsx        # Home page

/styles
  globals.css     # Global styles

/components
  /ui             # Base UI components (Button, Card, Input, Textarea)
  /sections       # Page sections (AboutPreview, CompanyStory, etc.)
  Navbar.tsx      # Navigation component
  Footer.tsx      # Footer component
  Hero.tsx        # Hero section
  ServicesGrid.tsx
  Workflow.tsx
  Testimonials.tsx
  CTASection.tsx
  ContactForm.tsx
  CookieBanner.tsx
  ThemeToggle.tsx

/lib
  constants.ts    # Brand data and constants
  seo.ts          # SEO utilities
  utils.ts        # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd stuccord-agency
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📦 Deployment

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 🎨 Customization

### Brand Information

Update brand details in `/lib/constants.ts`:

```typescript
export const BRAND = {
  name: "STUCCORD",
  tagline: "Your tagline",
  // ... other brand info
}
```

### Colors

Customize colors in `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    DEFAULT: "#6366F1", // Your primary color
    // ...
  }
}
```

### Content

- Update page content in respective page files (`/app/*/page.tsx`)
- Modify components in `/components`
- Update services, testimonials, etc. in `/lib/constants.ts`

## 🔧 Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://stuccord.com
# Add your API keys and other variables here
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance

- Lighthouse score optimized
- Code splitting and lazy loading
- Optimized images with Next.js Image component
- Minimal bundle size
- Fast page loads

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Color contrast compliance

## 📄 License

This project is proprietary and confidential.

## 👥 Team

- **Amos Jusu** - Web Designer
- **Victory Nkire** - Founder & CEO

## 📞 Contact

- **Phone**: (+233) 054-758-1168
- **Email**: contact@stuccord.com
- **Location**: Koforidua-Nsutam Rd, Koforidua, Ghana

---

Built with ❤️ by STUCCORD
