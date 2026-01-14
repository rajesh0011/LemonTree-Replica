# Lemon Tree Hotels - Next.js Replica

A fully responsive Next.js replica of the Lemon Tree Hotels website with all data in JSON format.

## Features

✅ Fully responsive design (Mobile, Tablet, Desktop)  
✅ All data in JSON format (No backend API required)  
✅ Same UI and color theme as original  
✅ SEO optimized with Next.js  
✅ Fast performance with Next.js optimization  
✅ Easy to deploy on Vercel  
✅ Reusable components  
✅ Tailwind CSS for styling  

## Project Structure

```
lemon-tree-replica/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   ├── HeroCarousel.js
│   │   ├── BookingForm.js
│   │   ├── HotelCard.js
│   │   ├── BrandCard.js
│   │   ├── OfferCard.js
│   │   └── ...
│   ├── data/
│   │   ├── hotels.json
│   │   ├── offers.json
│   │   ├── brands.json
│   │   ├── destinations.json
│   │   ├── experiences.json
│   │   └── navigation.json
│   ├── styles/
│   │   └── globals.css
│   └── pages/
│       ├── index.js
│       ├── hotels.js
│       └── ...
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/rajesh0011/LemonTree-Replica.git
cd LemonTree-Replica
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your GitHub repository
5. Select framework: **Next.js**
6. Deploy!

## Color Theme

- **Primary Blue**: #17A2B8 (CTA buttons, links)
- **Dark Text**: #1a1a1a (Headlines, body text)
- **Light Background**: #f8f9fa (Sections)
- **Gold Accent**: #d4af37 (Text highlights)
- **White**: #ffffff (Main background)

## JSON Data Structure

All component data is stored in `/src/data/` directory in JSON format for easy management and updates.

### hotels.json

```json
[
  {
    "id": 1,
    "name": "Lemon Tree Hotel, Pune",
    "image": "/images/pune.jpg",
    "location": "Pune",
    "brand": "Lemon Tree Hotel",
    "knowMoreUrl": "/lemon-tree-hotel/pune/chinchwad-pune-hotels",
    "bookNowUrl": "#"
  },
  ...
]
```

### offers.json

```json
[
  {
    "id": 1,
    "title": "Happy Hour",
    "image": "/images/happy-hour.jpg",
    "exploreUrl": "/happy-hour"
  },
  ...
]
```

### brands.json

```json
[
  {
    "id": 1,
    "name": "Keys Prima",
    "description": "Keys Prima welcomes you with its trendy spaces...",
    "exploreUrl": "/keys-prima-hotel",
    "logo": "/images/brand-1.jpg"
  },
  ...
]
```

## Usage

### Import Data in Components

```javascript
import hotelsData from '@/data/hotels.json';

export default function HotelsSection() {
  return (
    <div className="hotels-grid">
      {hotelsData.map(hotel => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
}
```

## Responsive Design

The website is fully responsive using Tailwind CSS:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## Image URLs

All image URLs are taken from the original Lemon Tree Hotels website and used in JSON files. You can update image URLs anytime without changing component code.

## Components

### Header Component
- Navigation bar with logo
- Mobile hamburger menu
- Responsive navbar

### Footer Component
- Multiple column layout
- Links and social media
- Newsletter subscription
- Copyright information

### HotelCard Component
- Hotel image
- Hotel name and location
- "Know More" and "Book Now" buttons
- Responsive grid layout

### BookingForm Component
- Check-in/Check-out date pickers
- Rooms and guests selector
- Location search dropdown

### BrandCard Component
- Brand logo/image
- Brand name and description
- "Explore" button

## Environment Variables

Create a `.env.local` file (not required for this project as it's fully static):

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **JSON** - Data storage
- **Vercel** - Hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Image optimization with Next.js Image component
- CSS optimization with Tailwind
- Fast static site generation
- Optimized bundle size

## SEO

- Meta tags for all pages
- Structured data
- Sitemap support
- Mobile-friendly design

## License

MIT License - feel free to use for personal projects

## Support

For any issues or questions, please open an issue on GitHub.

## Author

Created as a Next.js replica of Lemon Tree Hotels website
