import location_black from "../assets/location_black.png";
import location_red from "../assets/location_red.png";
import f1 from "../assets/f1.png";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.png";
import f4 from "../assets/f4.png";
import f5 from "../assets/f5.png";
import f6 from "../assets/f6.png";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpg";
import m4 from "../assets/m4.jpg";
import m5 from "../assets/m5.jpg";
import m6 from "../assets/m6.jpg";
import m7 from "../assets/m7.jpg";
import m8 from "../assets/m8.jpg";
import s1 from "../assets/s1.jpg";
import s2 from "../assets/s2.jpg";
import s3 from "../assets/s3.jpg";
import s4 from "../assets/s4.jpg";
import s5 from "../assets/s5.jpg";
import s6 from "../assets/s6.jpg";
import s7 from "../assets/s7.jpg";
import s8 from "../assets/s8.jpg";
import h1 from "../assets/h1.jpg";
import h2 from "../assets/h2.jpg";
import h3 from "../assets/h3.jpg";
import h4 from "../assets/h4.jpg";


export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "book",
        title: "Book",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "reviews",
        title: "Reviews",
    },
    {
        id: "contactUs",
        title: "Contact Us"
    }
]

export const locations = [
    {
        id: 1,
        title: "Beachfront paradises, historic treasures await you",
        des: "Location-based discovery for travelers",
        img: location_red,
    },
    {
        id: 2,
        title: "Discover hidden gems, iconic landmarks, and picturesque",
        des: "Find adventure with precise locations",
        img: location_black
    },
    {
        id: 3,
        title: "Explore sun-soaked shores and enchanting destinations",
        des: "Tailored travel experiences, pinpointed locations",
        img: location_black
    }
]
   
export const features = [
    {
        id: 1,
        img: f1,
        title: "Free Shipping"
    },
    {
        id: 2,
        img: f2,
        title: "Booking",
        // bg: '#fddde4',
        // color: "#017888",
    },
    {
        id: 3,
        img: f3,
        title: "Save Money"
    },
    {
        id: 4,
        img: f4,
        title: "Promotions"
    },
    {
        id: 5,
        img: f5,
        title: "Happy Travel"
    },
    {
        id: 6,
        img: f6,
        title: "24/7 Support"
    }
]

export const mountains = [
  {
    id: 1,
    title: 'Mountain Peak',
    icon: location_black,
    des1: 'Explore the breathtaking views of the highest peak in the region.',
    des2: 'CULTURAL RELAX',
    price: '$99.99',
    img: m1,
    location: 'Swiss Alps',
  },
  {
    id: 2,
    title: 'Mystic Mountains Retreat',
    icon: location_black,
    des1: 'Find serenity and peace in this hidden gem surrounded by mystic mountains.',
    des2: 'CULTURAL RELAX',
    price: '$120.50',
    img: m2,
    location: 'Himalayas',
  },
  {
    id: 3,
    title: 'Alpine Adventure',
    icon: location_black,
    des1: 'Embark on an alpine adventure and discover the beauty of untouched landscapes.',
    des2: 'CULTURAL RELAX',
    price: '$89.95',
    img: m3,
    location: 'Rocky Mountains',
  },
  {
    id: 4,
    title: 'Sunset Summit Lodge',
    icon: location_black,
    des1: 'Experience magical sunsets at this lodge situated on the summit.',
    des2: 'CULTURAL RELAX',
    price: '$150.00',
    img: m4,
    location: 'Andes',
  },
  {
    id: 5,
    title: 'Mountain Retreat 5',
    icon: location_black,
    des1: 'Discover a new retreat with stunning mountain views.',
    des2: 'CULTURAL RELAX',
    price: '$110',
    img: m5,
    location: 'Rocky Mountains',
  },
  {
    id: 6,
    title: 'Mountain Escape 6',
    icon: location_black,
    des1: 'Escape to the tranquility of the mountains in this exclusive retreat.',
    des2: 'CULTURAL RELAX',
    price: '$135',
    img: m6,
    location: 'Swiss Alps',
  },
  {
    id: 7,
    title: 'Serene Mountain Haven 7',
    icon: location_black,
    des1: 'Find serenity in this haven surrounded by majestic mountains.',
    des2: 'CULTURAL RELAX',
    price: '$95',
    img: m7,
    location: 'Himalayas',
  },
  {
    id: 8,
    title: 'Mountain View Lodge 8',
    icon: location_black,
    des1: 'Experience comfort with panoramic mountain views at this lodge.',
    des2: 'CULTURAL RELAX',
    price: '$125',
    img: m8,
    location: 'Andes',
  },
];

export const seas = [
  {
    id: 1,
    title: 'Sunny Shores Resort',
    icon: location_black,
    des1: 'Enjoy the sun, sea, and sand at this idyllic beachfront resort.',
    des2: 'CULTURAL RELAX',
    price: '$129.99 per night',
    img: s1,
    location: 'Maldives',
  },
  {
    id: 2,
    title: 'Tropical Paradise Retreat',
    icon: location_black,
    des1: 'Escape to a tropical paradise surrounded by crystal-clear waters and lush greenery.',
    des2: 'CULTURAL RELAX',
    price: '$155.00 per night',
    img: s2,
    location: 'Bora Bora',
  },
  {
    id: 3,
    title: 'Serene Seaside Getaway',
    icon: location_black,
    des1: 'Experience tranquility by the seaside and let the waves lull you to sleep.',
    des2: 'CULTURAL RELAX',
    price: '$110.50 per night',
    img: s3,
    location: 'Santorini',
  },
  {
    id: 4,
    title: 'Oceanfront Oasis',
    icon: location_black,
    des1: 'Indulge in luxury with stunning ocean views at this exclusive oceanfront oasis.',
    des2: 'CULTURAL RELAX',
    price: '$180.00 per night',
    img: s4,
    location: 'Maui',
  },
  {
    id: 5,
    title: 'Sea Escape 5',
    icon: location_black,
    des1: 'Discover a new seaside retreat with breathtaking views.',
    des2: 'CULTURAL RELAX',
    price: '$145.00 per night',
    img: s5,
    location: 'Caribbean',
  },
  {
    id: 6,
    title: 'Secluded Beach Hideaway 6',
    icon: location_black,
    des1: 'Escape to a secluded beach hideaway and enjoy the serenity of the coast.',
    des2: 'CULTURAL RELAX',
    price: '$165.50 per night',
    img: s6,
    location: 'Hawaii',
  },
  {
    id: 7,
    title: 'Sunset Serenity 7',
    icon: location_black,
    des1: 'Experience the serene beauty of sunsets by the sea in this tranquil retreat.',
    des2: 'CULTURAL RELAX',
    price: '$120.00 per night',
    img: s7,
    location: 'Greek Islands',
  },
  {
    id: 8,
    title: 'Coastal Bliss 8',
    icon: location_black,
    des1: 'Indulge in coastal bliss at this picturesque seaside escape.',
    des2: 'CULTURAL RELAX',
    price: '$155.75 per night',
    img: s8,
    location: 'Amalfi Coast',
  },
];


export const hotels = [
  {
    id: 1,
    title: 'Luxury Hotel Retreat',
    icon: location_black,
    des1: 'Experience unparalleled luxury at this exclusive hotel retreat.',
    des2: 'CULTURAL RELAX',
    price: '$249.99',
    img: h1,
    location: 'Paris',
  },
  {
    id: 2,
    title: 'Charming Boutique Inn',
    icon: location_black,
    des1: 'Indulge in the charm of a boutique inn with personalized service and unique ambiance.',
    des2: 'CULTURAL RELAX',
    price: '$180.50',
    img: h2,
    location: 'Venice',
  },
  {
    id: 3,
    title: 'Urban Oasis Hotel',
    icon: location_black,
    des1: 'Escape the city hustle and relax in the tranquility of this urban oasis hotel.',
    des2: 'CULTURAL RELAX',
    price: '$199.95',
    img: h3,
    location: 'New York',
  },
  {
    id: 4,
    title: 'Historic Grand Hotel',
    icon: location_black,
    des1: 'Step back in time and enjoy the grandeur of a historic hotel with modern amenities.',
    des2: 'CULTURAL RELAX',
    price: '$220.00',
    img: h4,
    location: 'London',
  },
];



export const partners = [
    {
        id: 1,
        title: "Partner A",
    },
    {
        id: 2,
        title: "Partner B",
    },
    {
        id: 3,
        title: "Partner C",
    },
    {
        id: 4,
        title: "Partner D",
    },
    {
        id: 5,
        title: "Partner E",
    }
];


export const travelAgency = [
    {
        id: 1,
        title: "Services",
    },
    {
        id: 2,
        title: "Insurance",
    },
    {
        id: 3,
        title: "Agency",
    },
    {
        id: 4,
        title: "Tourism",
    },
    {
        id: 5,
        title: "Payment",
    }
];


export const lastMinuteDeals = [
    {
        id: 1,
        title: "Maldives",
    },
    {
        id: 2,
        title: "Switzerland",
    },
    {
        id: 3,
        title: "Japan",
    },
    {
        id: 4,
        title: "Thailand",
    },
    {
        id: 5,
        title: "Italy",
    }
];
