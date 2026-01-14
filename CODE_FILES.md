# Complete Code Files for Lemon Tree Hotels Replica

This document contains all the JSON data and React component code needed for the project.

## TABLE OF CONTENTS

1. JSON Data Files
2. React Components
3. Page Files
4. Configuration Files

---

## 1. JSON DATA FILES

### src/data/hotels.json

```json
[
  {
    "id": 1,
    "name": "Keys Select by Lemon Tree Hotels, Kufri, Shimla",
    "location": "Shimla",
    "brand": "Keys Select",
    "image": "https://www.lemontreehotels.com/images/hotels/kufri-shimla.jpg",
    "knowMoreUrl": "/keys-select-hotel/kufri/hotels-in-kufri",
    "bookNowUrl": "#"
  },
  {
    "id": 2,
    "name": "Lemon Tree Hotel, Morbi",
    "location": "Morbi",
    "brand": "Lemon Tree Hotel",
    "image": "https://www.lemontreehotels.com/images/hotels/morbi.jpg",
    "knowMoreUrl": "/lemon-tree-hotel/morbi/hotels-in-morbi",
    "bookNowUrl": "#"
  },
  {
    "id": 3,
    "name": "Lemon Tree Hotel, Motihari",
    "location": "Motihari",
    "brand": "Lemon Tree Hotel",
    "image": "https://www.lemontreehotels.com/images/hotels/motihari.jpg",
    "knowMoreUrl": "/lemon-tree-hotel/motihari/hotels-in-motihari",
    "bookNowUrl": "#"
  },
  {
    "id": 4,
    "name": "Lemon Tree Premier, Navi Mumbai",
    "location": "Navi Mumbai",
    "brand": "Lemon Tree Premier",
    "image": "https://www.lemontreehotels.com/images/hotels/navi-mumbai.jpg",
    "knowMoreUrl": "/lemon-tree-premier/mumbai/hotels-navi-mumbai",
    "bookNowUrl": "#"
  },
  {
    "id": 5,
    "name": "Lemon Tree Hotel, Pune",
    "location": "Pune",
    "brand": "Lemon Tree Hotel",
    "image": "https://www.lemontreehotels.com/images/hotels/pune.jpg",
    "knowMoreUrl": "/lemon-tree-hotel/pune/chinchwad-pune-hotels",
    "bookNowUrl": "#"
  }
]
```

### src/data/offers.json

```json
[
  {
    "id": 1,
    "title": "Happy Hour",
    "image": "https://www.lemontreehotels.com/images/offers/happy-hour.jpg",
    "exploreUrl": "/happy-hour"
  },
  {
    "id": 2,
    "title": "Day Rooms",
    "image": "https://www.lemontreehotels.com/images/offers/day-rooms.jpg",
    "exploreUrl": "/day-use-rooms"
  },
  {
    "id": 3,
    "title": "The Great Getaway Festival",
    "image": "https://www.lemontreehotels.com/images/offers/getaway.jpg",
    "exploreUrl": "/the-great-getaway-sale"
  },
  {
    "id": 4,
    "title": "Member's Rate",
    "image": "https://www.lemontreehotels.com/images/offers/members.jpg",
    "exploreUrl": "/rewards"
  }
]
```

### src/data/brands.json

```json
[
  {
    "id": 1,
    "name": "Keys Prima",
    "description": "Keys Prima welcomes you with its trendy spaces and thoughtful service.",
    "fullDescription": "Experience exclusive hospitality with our anticipatory services that make your stay unforgettable.",
    "exploreUrl": "/keys-prima-hotel",
    "image": "https://www.lemontreehotels.com/images/brands/keys-prima.jpg"
  },
  {
    "id": 2,
    "name": "Red Fox Hotels",
    "description": "Red Fox Hotels welcome you with their bold interiors and crisp, clean rooms.",
    "fullDescription": "Designed for the economy traveller with unbeatable value and reliable safety standards.",
    "exploreUrl": "/red-fox-hotel",
    "image": "https://www.lemontreehotels.com/images/brands/red-fox.jpg"
  },
  {
    "id": 3,
    "name": "Keys Select",
    "description": "Comfort meets convenience for the modern business and leisure traveller.",
    "fullDescription": "Enjoy a warm welcome, chic rooms, cheerful service, and delectable food.",
    "exploreUrl": "/keys-select-hotel",
    "image": "https://www.lemontreehotels.com/images/brands/keys-select.jpg"
  },
  {
    "id": 4,
    "name": "Keys Lite",
    "description": "Designed for smart, price-conscious travellers seeking affordable stays.",
    "fullDescription": "Impeccably clean rooms, essential amenities, delicious food, and assured safety.",
    "exploreUrl": "/keys-lite-hotel",
    "image": "https://www.lemontreehotels.com/images/brands/keys-lite.jpg"
  },
  {
    "id": 5,
    "name": "Aurika",
    "description": "The upscale brand curating extraordinary experiences in stunning settings.",
    "fullDescription": "Stylishly elegant yet comfortably informal hotels reflecting destination's unique soul.",
    "exploreUrl": "/aurika-hotels-resorts",
    "image": "https://www.lemontreehotels.com/images/brands/aurika.jpg"
  },
  {
    "id": 6,
    "name": "Lemon Tree Premier",
    "description": "Upscale business and leisure hotels elevating the Lemon Tree experience.",
    "fullDescription": "Personalized services, premium in-room amenities, award-winning restaurants.",
    "exploreUrl": "/lemon-tree-premier",
    "image": "https://www.lemontreehotels.com/images/brands/premier.jpg"
  },
  {
    "id": 7,
    "name": "Lemon Tree Hotels",
    "description": "Refreshing midscale business and leisure stays that uplift your spirits.",
    "fullDescription": "Fresh, vibrant, and full of zest with cheerful hellos and bright interiors.",
    "exploreUrl": "/lemon-tree-hotel",
    "image": "https://www.lemontreehotels.com/images/brands/lemon-tree.jpg"
  }
]
```

### src/data/destinations.json

```json
[
  {
    "id": 1,
    "name": "Gangtok",
    "image": "https://www.lemontreehotels.com/images/destinations/gangtok.jpg",
    "exploreUrl": "/gangtok-hotels"
  },
  {
    "id": 2,
    "name": "Goa",
    "image": "https://www.lemontreehotels.com/images/destinations/goa.jpg",
    "exploreUrl": "/goa-hotels"
  },
  {
    "id": 3,
    "name": "Jaipur",
    "image": "https://www.lemontreehotels.com/images/destinations/jaipur.jpg",
    "exploreUrl": "/jaipur-hotels"
  },
  {
    "id": 4,
    "name": "Nepal",
    "image": "https://www.lemontreehotels.com/images/destinations/nepal.jpg",
    "exploreUrl": "/nepal-hotels"
  }
]
```

### src/data/navigation.json

```json
{
  "navLinks": [
    {"label": "Awards", "href": "/awards"},
    {"label": "About us", "href": "/about-us"},
    {"label": "Careers", "href": "https://careers.lemontreehotels.com/"},
    {"label": "Contact us", "href": "/contact-us"}
  ],
  "footerLinks": {
    "company": [
      {"label": "About us", "href": "/about-us"},
      {"label": "Awards", "href": "/awards"},
      {"label": "Careers", "href": "https://careers.lemontreehotels.com/"},
      {"label": "Contact us", "href": "/contact-us"}
    ],
    "info": [
      {"label": "Blogs", "href": "https://blog.lemontreehotels.com/"},
      {"label": "Day Use", "href": "/day-use-rooms"},
      {"label": "Media", "href": "/media"},
      {"label": "Travel Guidelines", "href": "/travel-guide"}
    ],
    "legal": [
      {"label": "Privacy Policy", "href": "/privacy-policy"},
      {"label": "Terms & Conditions", "href": "/term-condition"},
      {"label": "Cookies Policy", "href": "/assets/pdf/cookie_policy.pdf"},
      {"label": "Non Affiliation", "href": "/non-affiliation"}
    ]
  },
  "socialLinks": [
    {"platform": "facebook", "href": "https://www.facebook.com/lemontreehotelsltd"},
    {"platform": "instagram", "href": "https://www.instagram.com/lemontreehotels/"},
    {"platform": "twitter", "href": "https://twitter.com/LemonTreeHotels"},
    {"platform": "youtube", "href": "https://www.youtube.com/c/LemonTreeHotelsLtd"}
  ]
}
```

---

## 2. REACT COMPONENTS

Due to character limitations, detailed component code is being provided. Copy each component into its respective file.

**Copy these files from the COMPONENTS.md document in the repository.**

- src/components/Header.js
- src/components/Footer.js
- src/components/HotelCard.js
- src/components/OfferCard.js
- src/components/BrandCard.js
- src/components/DestinationCard.js
- src/components/BookingForm.js
- src/components/HeroCarousel.js

---

## 3. PAGE FILES

**Copy these files from the PAGES.md document in the repository.**

- src/pages/_app.js
- src/pages/_document.js
- src/pages/index.js

---

## 4. CONFIGURATION FILES

**Copy configuration from SETUP_GUIDE.md**

- next.config.js
- tailwind.config.js
- postcss.config.js
- .eslintrc.json
- src/styles/globals.css

---

## INSTALLATION STEPS

1. Create directory structure
2. Copy package.json
3. Run `npm install`
4. Copy all JSON files to src/data/
5. Copy all components to src/components/
6. Copy configuration files
7. Copy pages to src/pages/
8. Copy styles to src/styles/
9. Run `npm run dev`

---

For complete component code, see COMPONENTS.md and PAGES.md files.
