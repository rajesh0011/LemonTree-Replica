# Complete Setup Guide - Lemon Tree Hotels Next.js Replica

## Quick Start (5 minutes)

### Step 1: Clone Repository
```bash
git clone https://github.com/rajesh0011/LemonTree-Replica.git
cd LemonTree-Replica
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm run dev
```

Visit http://localhost:3000 - Done!

---

## Detailed File Structure to Create

After cloning, create the following directories and files:

### 1. Create Directory Structure

```bash
mkdir -p src/components
mkdir -p src/pages
mkdir -p src/styles
mkdir -p src/data
mkdir -p public/images
```

### 2. Configuration Files to Add

#### `next.config.js`
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.lemontreehotels.com'],
  },
};

module.exports = nextConfig;
```

#### `tailwind.config.js`
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#17A2B8',
        'dark': '#1a1a1a',
        'light-bg': '#f8f9fa',
        'gold': '#d4af37',
      },
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
};
```

#### `postcss.config.js`
```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### `.eslintrc.json`
```json
{
  "extends": "next/core-web-vitals"
}
```

### 3. Create Global Styles

#### `src/styles/globals.css`
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffffff;
  color: #1a1a1a;
}

@layer components {
  .container-custom {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }

  .btn-primary {
    @apply bg-primary text-white px-6 py-3 rounded transition-all duration-300 hover:opacity-90;
  }

  .btn-secondary {
    @apply border-2 border-dark text-dark px-6 py-3 rounded transition-all duration-300 hover:bg-light-bg;
  }

  .section-title {
    @apply text-3xl md:text-4xl font-bold text-dark mb-8;
  }
}

/* Responsive Typography */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
}
```

---

## JSON Data Files to Create

### `src/data/hotels.json`

[See detailed file in CODE_FILES.md]

### `src/data/offers.json`

[See detailed file in CODE_FILES.md]

### `src/data/brands.json`

[See detailed file in CODE_FILES.md]

### `src/data/destinations.json`

[See detailed file in CODE_FILES.md]

### `src/data/navigation.json`

[See detailed file in CODE_FILES.md]

---

## Component Files to Create

### `src/components/Header.js`

[See detailed file in COMPONENTS.md]

### `src/components/Footer.js`

[See detailed file in COMPONENTS.md]

### `src/components/HotelCard.js`

[See detailed file in COMPONENTS.md]

### `src/components/BookingForm.js`

[See detailed file in COMPONENTS.md]

---

## Pages to Create

### `src/pages/_app.js`

```javascript
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### `src/pages/_document.js`

```javascript
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Lemon Tree Hotels - Official Hotel Booking Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### `src/pages/index.js`

[See detailed file in COMPONENTS.md]

---

## Deployment to Vercel

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Initial commit: Lemon Tree Hotels replica"
git push origin main
```

### Step 2: Deploy on Vercel
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Select "Import GitHub Repository"
4. Choose your `LemonTree-Replica` repository
5. Framework: Select **Next.js**
6. Root Directory: ./
7. Click "Deploy"

Vercel will automatically:
- Install dependencies
- Build the project
- Deploy to production
- Provide a live URL (e.g., lemontree-replica.vercel.app)

### Step 3: Custom Domain (Optional)
1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Follow DNS configuration instructions

---

## Environment Variables

Create `.env.local` (optional, not required for this project):

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

---

## Build & Production

### Build for Production
```bash
npm run build
npm start
```

### Check Build Size
```bash
npm run build
# Check .next folder size
```

---

## Customization Guide

### Update Hotel Data
Edit `src/data/hotels.json` - add/remove/update hotel objects

### Change Colors
Update `tailwind.config.js` theme.extend.colors

### Modify Images
Update image URLs in JSON files in `src/data/`

### Add New Pages
Create new file in `src/pages/` (e.g., `about.js`, `contact.js`)

---

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Clear cache
```bash
rm -rf .next
npm run dev
```

### Module not found error
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Performance Tips

1. **Images**: Use Next.js Image component
2. **CSS**: Tailwind CSS auto-purges unused styles
3. **Code Splitting**: Next.js automatically splits pages
4. **Caching**: Configure ISR (Incremental Static Regeneration) if needed

---

## SEO Optimization

Add to `src/pages/index.js`:

```javascript
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lemon Tree Hotels - Hotel Booking</title>
        <meta name="description" content="Book hotels at Lemon Tree Hotels" />
        <meta property="og:title" content="Lemon Tree Hotels" />
        <meta property="og:description" content="Book hotels" />
      </Head>
      {/* Page content */}
    </>
  );
}
```

---

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs
- React Docs: https://react.dev
