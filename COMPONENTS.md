# React Components for Lemon Tree Hotels

## src/components/Header.js

```javascript
import { useState } from 'react';
import Link from 'next/link';
import navigationData from '@/data/navigation.json';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src="https://www.lemontreehotels.com/images/logo.png" alt="Logo" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navigationData.navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-dark hover:text-primary transition">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navigationData.navLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block py-2 text-dark hover:text-primary">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
```

## src/components/HotelCard.js

```javascript
import Link from 'next/link';

export default function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
      <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark mb-2">{hotel.name}</h3>
        <p className="text-gray-600 mb-4">{hotel.location}</p>
        <div className="flex gap-4">
          <Link href={hotel.knowMoreUrl} className="btn-secondary flex-1 text-center">
            Know More
          </Link>
          <Link href={hotel.bookNowUrl} className="btn-primary flex-1 text-center">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
```

## src/components/OfferCard.js

```javascript
import Link from 'next/link';

export default function OfferCard({ offer }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-64">
      <img src={offer.image} alt={offer.title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-end">
        <div className="p-6 w-full">
          <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
          <Link href={offer.exploreUrl} className="btn-primary inline-block">
            Explore More
          </Link>
        </div>
      </div>
    </div>
  );
}
```

## src/components/BrandCard.js

```javascript
import Link from 'next/link';

export default function BrandCard({ brand }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition p-6">
      <img src={brand.image} alt={brand.name} className="w-full h-32 object-contain mb-4" />
      <h3 className="text-xl font-bold text-dark mb-3">{brand.name}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{brand.description}</p>
      <Link href={brand.exploreUrl} className="btn-primary inline-block">
        Explore
      </Link>
    </div>
  );
}
```

## src/components/BookingForm.js

```javascript
import { useState } from 'react';

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState(new Date().toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState(new Date(Date.now() + 86400000).toISOString().split('T')[0]);
  const [location, setLocation] = useState('Where to Next?');
  const [rooms, setRooms] = useState('Room(s) 1 - Adult(s) 1');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
        <div>
          <label className="text-sm font-semibold text-dark mb-2 block">Location</label>
          <select className="w-full border rounded px-4 py-2 focus:outline-none focus:border-primary" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option>Where to Next?</option>
            <option>New Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Goa</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-semibold text-dark mb-2 block">Check In</label>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full border rounded px-4 py-2 focus:outline-none focus:border-primary" />
        </div>

        <div>
          <label className="text-sm font-semibold text-dark mb-2 block">Check Out</label>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full border rounded px-4 py-2 focus:outline-none focus:border-primary" />
        </div>

        <div>
          <label className="text-sm font-semibold text-dark mb-2 block">Guests</label>
          <select className="w-full border rounded px-4 py-2 focus:outline-none focus:border-primary" value={rooms} onChange={(e) => setRooms(e.target.value)}>
            <option>Room(s) 1 - Adult(s) 1</option>
            <option>Room(s) 1 - Adult(s) 2</option>
            <option>Room(s) 2 - Adult(s) 2</option>
            <option>Room(s) 2 - Adult(s) 4</option>
          </select>
        </div>

        <button className="btn-primary w-full">
          Book Now
        </button>
      </div>
    </div>
  );
}
```

## src/components/Footer.js

```javascript
import Link from 'next/link';
import navigationData from '@/data/navigation.json';

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            {navigationData.footerLinks.company.map((link) => (
              <Link key={link.label} href={link.href} className="block text-sm mb-2 hover:text-primary transition">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Info */}
          <div>
            <h4 className="font-bold mb-4">Info</h4>
            {navigationData.footerLinks.info.map((link) => (
              <Link key={link.label} href={link.href} className="block text-sm mb-2 hover:text-primary transition">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            {navigationData.footerLinks.legal.map((link) => (
              <Link key={link.label} href={link.href} className="block text-sm mb-2 hover:text-primary transition">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <form className="flex mb-4">
              <input type="email" placeholder="Enter email" className="flex-1 px-3 py-2 rounded-l text-dark" />
              <button type="submit" className="bg-primary px-4 py-2 rounded-r">Send</button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          {navigationData.socialLinks.map((link) => (
            <a key={link.platform} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
              {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-sm">© 2025 BY LEMON TREE HOTELS LTD. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
```

## src/components/DestinationCard.js

```javascript
import Link from 'next/link';

export default function DestinationCard({ destination }) {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-64">
      <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex items-end">
        <div className="p-6 w-full">
          <h3 className="text-2xl font-bold text-white mb-3">{destination.name}</h3>
          <div className="flex gap-4">
            <Link href={destination.exploreUrl} className="btn-secondary text-sm">
              Explore More
            </Link>
            <button className="btn-primary text-sm">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## Installation Instructions

1. Create `src/components/` directory
2. Create each component file with the code above
3. Update imports based on your project structure
4. Ensure all JSON data files are in `src/data/`
5. Import components in your pages

Each component is responsive and uses Tailwind CSS classes for styling.
