const listingsData = [
  {
    name: "Karsten Winegeart",
    image: "https://images.unsplash.com/photo-1626455530771-c69b7fb3ca40?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Malibu, United States",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    followers: 2450,
    reach: 12000,
    type: "family content",
  },
  {
    name: "Nik",
    image: "https://images.unsplash.com/photo-1632765937900-a3bbbfa58d46?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "New York City, United States",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    followers: 4100,
    reach: 18500,
    type: "family content",
  },
  {
    name: "Good Faces",
    image: "https://images.unsplash.com/photo-1603217041431-9a99375beab0?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Aspen, United States",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    followers: 1900,
    reach: 9800,
    type: "family content",
  },
  {
    name: "Laura Chouette",
    image: "https://images.unsplash.com/photo-1609103254482-dc7beedc47bf?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "Florence, Italy",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    followers: 5200,
    reach: 25000,
    type: "family content",
  },
  {
    name: "Wesley Tingey",
    image: "https://media.istockphoto.com/id/1311101155/photo/young-social-media-influencer-recording-his-podcast-on-mobile-phone-concept-of-vlogging.jpg?s=1024x1024&w=is&k=20&c=ybdEd5NAJPAqnMcdqx5XSnrCGsGrjiPOI38K9rTT9is=",
    address: "Fiji",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    followers: 12000,
    reach: 80000,
    type: "mature content",
  },
  {
    name: "Desert Oasis in Dubai",
    image: "https://media.istockphoto.com/id/1393089721/photo/asian-man-blogger-or-vlogger-looking-at-camera-reviewing-product.jpg?s=1024x1024&w=is&k=20&c=3GdnFLr8Gsqpzl02fXNO4R9nPRaBXhL2y-VyK3jnVmc=",
    address: "Dubai, United Arab Emirates",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    followers: 9100,
    reach: 54000,
    type: "mature content",
  },
  {
    name: "Secluded Treehouse Getaway",
    image: "https://media.istockphoto.com/id/2187124191/photo/indian-happy-older-woman-lady-young-adult-guy-and-girl-child-sitting-together-cozy-sofa-couch.jpg?s=1024x1024&w=is&k=20&c=9yH2ONTMYys3dkcms0EDEQXhF5wqSpCGQILcTfCSw2g=",
    address: "Portland, United States",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    followers: 1800,
    reach: 8700,
    type: "family content",
  },
  {
    name: "Beachfront Paradise",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    address: "Cancun, Mexico",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    followers: 6400,
    reach: 32000,
    type: "family content",
  },
  {
    name: "Rustic Cabin by the Lake",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    address: "Lake Tahoe, United States",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    followers: 2100,
    reach: 10400,
    type: "family content",
  },
  {
    name: "Luxury Penthouse with City Views",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    address: "Los Angeles, United States",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    followers: 8800,
    reach: 46000,
    type: "mature content",
  },
  {
    name: "Ski-In/Ski-Out Chalet",
    image: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    address: "Verbier, Switzerland",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    followers: 5700,
    reach: 29500,
    type: "family content",
  },
  {
    name: "Safari Lodge in the Serengeti",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    address: "Serengeti National Park, Tanzania",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    followers: 10200,
    reach: 61000,
    type: "mature content",
  },
  {
    name: "Historic Canal House",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    address: "Amsterdam, Netherlands",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    followers: 3900,
    reach: 19800,
    type: "family content",
  },
  {
    name: "Charming Cottage in the Cotswolds",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f",
    address: "Cotswolds, United Kingdom",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    followers: 2600,
    reach: 13500,
    type: "family content",
  },
  {
    name: "Beachfront Bungalow in Bali",
    image: "https://images.unsplash.com/photo-1602391833977-358a52198938",
    address: "Bali, Indonesia",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    followers: 7200,
    reach: 38000,
    type: "mature content",
  },
  {
    name: "Mountain View Cabin in Banff",
    image: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
    address: "Banff, Canada",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    followers: 3100,
    reach: 15800,
    type: "family content",
  },
  {
    name: "Art Deco Apartment in Miami",
    image: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579",
    address: "Miami, United States",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    followers: 5400,
    reach: 27500,
    type: "mature content",
  },
  {
    name: "Historic Castle in Scotland",
    image: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    address: "Scottish Highlands, United Kingdom",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    followers: 9800,
    reach: 59000,
    type: "mature content",
  },
  {
    name: "Tropical Villa in Phuket",
    image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
    address: "Phuket, Thailand",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    followers: 8600,
    reach: 47000,
    type: "mature content",
  },
  {
    name: "Eco-Friendly Treehouse Retreat",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
    address: "Costa Rica",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    followers: 2900,
    reach: 14200,
    type: "family content",
  },
  {
    name: "Historic Cottage in Charleston",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
    address: "Charleston, United States",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    followers: 3500,
    reach: 16800,
    type: "family content",
  },
  {
    name: "Modern Apartment in Tokyo",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    address: "Tokyo, Japan",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    followers: 9200,
    reach: 52000,
    type: "mature content",
  },
  {
    name: "Lakefront Cabin in New Hampshire",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
    address: "New Hampshire, United States",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    followers: 2400,
    reach: 11900,
    type: "family content",
  },
  {
    name: "Luxury Villa in the Maldives",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    address: "Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    followers: 15000,
    reach: 90000,
    type: "mature content",
  },
  {
    name: "Ski Chalet in Aspen",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    address: "Aspen, United States",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    followers: 7800,
    reach: 43000,
    type: "mature content",
  },
  {
    name: "Secluded Beach House in Costa Rica",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    address: "Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    followers: 6100,
    reach: 34000,
    type: "family content",
  },
  {
    name: "Luxury Villa in Greece",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
    address: "Mykonos, Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    followers: 8900,
    reach: 48000,
    type: "mature content",
  },
  {
    name: "Modern Apartment in Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    address: "Dubai, United Arab Emirates",
    description:
      "Live in luxury in this modern apartment with breathtaking city views in Dubai.",
    followers: 9900,
    reach: 56000,
    type: "mature content",
  },
  {
    name: "Historic Brownstone in Boston",
    image: "https://images.unsplash.com/photo-1533619239233-6280475a633a",
    address: "Boston, United States",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    followers: 4200,
    reach: 21000,
    type: "family content",
  },
  {
    name: "Beachfront Villa in Greece",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
    address: "Mykonos, Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    followers: 8300,
    reach: 45000,
    type: "mature content",
  },
  {
    name: "Eco-Friendly Treehouse Retreat",
    image: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
    address: "Costa Rica",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    followers: 2700,
    reach: 13200,
    type: "family content",
  },
  {
    name: "Modern Apartment in Tokyo",
    image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    address: "Tokyo, Japan",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    followers: 9100,
    reach: 51000,
    type: "mature content",
  },
  {
    name: "Lakefront Cabin in New Hampshire",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
    address: "New Hampshire, United States",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    followers: 2300,
    reach: 11500,
    type: "family content",
  },
  {
    name: "Luxury Villa in the Maldives",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    address: "Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    followers: 14800,
    reach: 88000,
    type: "mature content",
  },
  {
    name: "Ski Chalet in Aspen",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    address: "Aspen, United States",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    followers: 7600,
    reach: 42000,
    type: "mature content",
  },
  {
    name: "Secluded Beach House in Costa Rica",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    address: "Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    followers: 5900,
    reach: 33000,
    type: "family content",
  },
  {
    name: "Luxury Villa in the Maldives (Sunset View)",
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    address: "Maldives",
    description:
      "A premium sunset-facing overwater villa offering unmatched luxury and privacy in the Maldives.",
    followers: 16200,
    reach: 94000,
    type: "mature content",
  },
  {
    name: "Modern Apartment in Dubai",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    address: "Dubai, United Arab Emirates",
    description:
      "Experience high-rise luxury living in this modern apartment with breathtaking skyline views in Dubai.",
    followers: 10100,
    reach: 57000,
    type: "mature content",
  },
];


module.exports = {data: listingsData};