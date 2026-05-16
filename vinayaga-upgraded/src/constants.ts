/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const COMPANY_NAME = "Vinayaga Power Solutions";
export const TAGLINE = "Uninterrupted Power for Your Life";

export const CONTACT_INFO = {
  address: "3/98, Dindigul Main Road, Samayanallur, Madurai - 625402",
  city: "Madurai",
  state: "Tamil Nadu",
  zip: "625402",
  email: "vinayagapowersolutions2020@gmail.com",
  phones: ["+91 80728 93431", "+91 95853 97075", "+91 96887 76385"],
  proprietor: "Vinothkumar",
};

// Category-matched images — each one visually relevant to the product
const IMG = {
  // UPS — server rooms, electrical racks, power backup equipment
  ups1: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=900",   // server rack
  ups2: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=900",   // data center aisle
  ups3: "https://images.unsplash.com/photo-1597008641621-cefdcf718025?auto=format&fit=crop&q=80&w=900", // electrical switchboard
  ups4: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=900", // server close-up
  ups5: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=900", // electrical panel

  // Batteries — actual battery packs, energy storage
  bat1: "https://images.unsplash.com/photo-1620714223084-8dfbac6dfd8d?auto=format&fit=crop&q=80&w=900", // battery pack
  bat2: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=900", // AA batteries close
  bat3: "https://images.unsplash.com/photo-1581092160562-40aa08e26e84?auto=format&fit=crop&q=80&w=900", // industrial battery
  bat4: "https://images.unsplash.com/photo-1609922630990-8e7b6a76bfdb?auto=format&fit=crop&q=80&w=900", // energy storage

  // Inverters — solar panels, power conversion, electrical equipment
  inv1: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=900", // solar rooftop
  inv2: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&q=80&w=900",   // solar field
  inv3: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=900", // power lines
  inv4: "https://images.unsplash.com/photo-1621905235294-45412245eb03?auto=format&fit=crop&q=80&w=900", // electrical board

  // RO / Water Purifiers — clean water, purification
  ro1: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=900",    // water drops tap
  ro2: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=900",    // water splash blue
  ro3: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&q=80&w=900", // industrial water plant

  // CCTV — actual security cameras, surveillance
  cctv1: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=900",  // CCTV dome cam
  cctv2: "https://images.unsplash.com/photo-1551703599-6b3e8379aa81?auto=format&fit=crop&q=80&w=900",  // security cam wall
  cctv3: "https://images.unsplash.com/photo-1503792243040-7ce7f5f06085?auto=format&fit=crop&q=80&w=900", // surveillance cam
  cctv4: "https://images.unsplash.com/photo-1568209865332-a15790aed756?auto=format&fit=crop&q=80&w=900", // outdoor cam
};

export const PRODUCTS: any[] = [
  // UPS Systems (5)
  {
    id: "ups-pro-1",
    name: "Apex Online UPS 1kVA",
    sku: "UPS-101",
    category: "UPS Systems",
    grade: "Commercial",
    rating: 5,
    description: "Stable power backup for office workstations and servers.",
    highlights: ["Double Conversion", "Quiet Operation", "USB Control Port"],
    specs: { Capacity: "1kVA", Input: "230V", Efficiency: "92%" },
    image: IMG.ups1,
  },
  {
    id: "ups-pro-2",
    name: "Industrial PowerGuard 5kVA",
    sku: "UPS-102",
    category: "UPS Systems",
    grade: "Industrial",
    rating: 5,
    description: "Robust UPS for manufacturing and heavy-duty machinery.",
    highlights: ["N+1 Redundancy", "Galvanic Isolation", "LCD Panel"],
    specs: { Capacity: "5kVA", Input: "3-Phase", Efficiency: "95%" },
    image: IMG.ups2,
  },
  {
    id: "ups-pro-3",
    name: "HomeSafe UPS 600VA",
    sku: "UPS-103",
    category: "UPS Systems",
    grade: "Residential",
    rating: 4.8,
    description: "Compact protector for home computers and routers.",
    highlights: ["Slim Design", "Surge Protection", "Fast Switchover"],
    specs: { Capacity: "600VA", Runtime: "15-20 Min", Ports: "3 Sockets" },
    image: IMG.ups3,
  },
  {
    id: "ups-pro-4",
    name: "RackMount Server UPS",
    sku: "UPS-104",
    category: "UPS Systems",
    grade: "Enterprise",
    rating: 4.9,
    description: "Designed for standard 19-inch server racks.",
    highlights: ["2U Height", "Hot-Swappable", "Network Card Ready"],
    specs: { Capacity: "3kVA", Form: "Rackmount", Efficiency: "94%" },
    image: IMG.ups4,
  },
  {
    id: "ups-pro-5",
    name: "Modular Scalable UPS",
    sku: "UPS-105",
    category: "UPS Systems",
    grade: "Specialist",
    rating: 5,
    description: "Scalable power solution that grows with your business.",
    highlights: ["Modular Design", "Easy Maintenance", "Touch Control"],
    specs: { Capacity: "Up to 100kVA", Type: "Modular", Efficiency: "97%" },
    image: IMG.ups5,
  },

  // Batteries (10)
  ...Array.from({ length: 10 }).map((_, i) => {
    const imgs = [IMG.bat1, IMG.bat2, IMG.bat3, IMG.bat4, IMG.bat1, IMG.bat2, IMG.bat3, IMG.bat4, IMG.bat1, IMG.bat2];
    return {
      id: `bat-pro-${i + 1}`,
      name: `LuxePower Tubular ${150 + i * 10}Ah`,
      sku: `BAT-${101 + i}`,
      category: "Batteries",
      grade: "Premium",
      rating: (4.5 + (i % 5) * 0.1).toFixed(1),
      description: "Long-lasting deep cycle battery for solar and inverter use.",
      highlights: ["Deep Cycle", "Low Maintenance", "Fume-Free"],
      specs: { Capacity: `${150 + i * 10}Ah`, Voltage: "12V", Technology: "Tall Tubular" },
      image: imgs[i],
    };
  }),

  // Inverters (7)
  ...Array.from({ length: 7 }).map((_, i) => {
    const imgs = [IMG.inv1, IMG.inv2, IMG.inv3, IMG.inv4, IMG.inv1, IMG.inv2, IMG.inv3];
    return {
      id: `inv-pro-${i + 1}`,
      name: `Pure Sine Inverter Gen-${i + 1}`,
      sku: `INV-${101 + i}`,
      category: "Inverters",
      grade: "Professional",
      rating: (4.7 + (i % 3) * 0.1).toFixed(1),
      description: "High-efficiency pure sine wave inverter for delicate electronics.",
      highlights: ["Silent Performance", "Eco Mode", "Overload Protection"],
      specs: { Wattage: `${800 + i * 200}VA`, Waveform: "Pure Sine Wave", Warranty: "2 Years" },
      image: imgs[i],
    };
  }),

  // RO Systems (3)
  {
    id: "ro-pro-1",
    name: "AquaClear Pro RO",
    sku: "RO-101",
    category: "RO Systems",
    grade: "Residential",
    rating: 4.8,
    description: "7-stage water purification for the purest drinking water.",
    highlights: ["TDS Control", "Mineral Booster", "Compact Fit"],
    specs: { Stages: "7 Stgs", Capacity: "12 LPH", Recovery: "60%" },
    image: IMG.ro1,
  },
  {
    id: "ro-pro-2",
    name: "Industrial RO Plant 50",
    sku: "RO-102",
    category: "RO Systems",
    grade: "Industrial",
    rating: 5,
    description: "Commercial grade water plant for large factories.",
    highlights: ["High Flow", "Stainless Steel Frame", "Auto-Flush"],
    specs: { Capacity: "50 LPH", Membrane: "DuPont", Material: "SS-304" },
    image: IMG.ro3,
  },
  {
    id: "ro-pro-3",
    name: "Ultra-Filter Home RO",
    sku: "RO-103",
    category: "RO Systems",
    grade: "Residential",
    rating: 4.7,
    description: "Sustainable filtration with minimum water wastage.",
    highlights: ["Low Waste", "Alkaline Filter", "Smart Display"],
    specs: { Stages: "8 Stgs", Capacity: "15 LPH", Sensors: "Included" },
    image: IMG.ro2,
  },

  // CCTV Systems (4)
  {
    id: "cctv-pro-1",
    name: "Sentinel 4K Ultra IP",
    sku: "CTV-101",
    category: "CCTV",
    grade: "Security",
    rating: 4.9,
    description: "Crystal clear 4K surveillance with smart detection.",
    highlights: ["Night Vision", "Human AI Detection", "Weatherproof"],
    specs: { Resolution: "4K (8MP)", Sensor: "Sony Starvis", NightView: "30m" },
    image: IMG.cctv1,
  },
  {
    id: "cctv-pro-2",
    name: "EagleEye Dome Pro",
    sku: "CTV-102",
    category: "CCTV",
    grade: "Vandal-Proof",
    rating: 4.8,
    description: "IK10 rated dome camera for high-risk public areas.",
    highlights: ["Wide Angle", "IK10 Rated", "PoE Support"],
    specs: { Resolution: "5MP", FOV: "110°", Storage: "h.265+" },
    image: IMG.cctv2,
  },
  {
    id: "cctv-pro-3",
    name: "PTZ Speed Dome 20x",
    sku: "CTV-103",
    category: "CCTV",
    grade: "Long Range",
    rating: 5,
    description: "Powerful pan-tilt-zoom camera with 20x optical magnification.",
    highlights: ["20x Optical Zoom", "360° Rotation", "Auto-Tracking"],
    specs: { Zoom: "20x", Presets: "256", Connection: "IP/WiFi" },
    image: IMG.cctv3,
  },
  {
    id: "cctv-pro-4",
    name: "Compact Wireless Hub",
    sku: "CTV-104",
    category: "CCTV",
    grade: "SME",
    rating: 4.6,
    description: "Wire-free security solution for small offices.",
    highlights: ["Wire-Free", "Cloud Storage", "Two-Way Audio"],
    specs: { Resolution: "2MP", Battery: "6 Months", Setup: "Plug-n-Play" },
    image: IMG.cctv4,
  },
];

export const SERVICES = [
  {
    id: "installation",
    title: "Installation & Commissioning",
    description: "Standard procedures are followed with respect to site audit, installation, and commissioning. Site inspection is conducted before beginning the installation process.",
    image: "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?auto=format&fit=crop&q=100&w=3840",
  },
  {
    id: "amc",
    title: "Annual Maintenance Contract",
    description: "Our service fulfills over 2000 AMC commitments. AMC packages offer a choice that best fits the needs of our company. AMC covers spare parts and free replacement in case of failure.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=100&w=3840",
  },
  {
    id: "service-call",
    title: "Request A Service Call",
    description: "We provide 24x7 customer care ensuring your query is always heard. Highly professional engineers ensure maximum uptime, even at the remotest location.",
    image: "https://images.unsplash.com/photo-1521791055366-0d5fa3623a7c?auto=format&fit=crop&q=100&w=3840",
  },
  {
    id: "battery-solutions",
    title: "Battery Solutions",
    description: "The battery is the lifeline behind every UPS system. We offer timely service, resolution, and technical expertise for all battery maintenance and solutions.",
    image: "https://images.unsplash.com/photo-1620714223084-8dfbac6dfd8d?auto=format&fit=crop&q=100&w=3840",
  },
];

export const BRANDS = [
  { name: "Exide", logo: "EXIDE" },
  { name: "SF Batteries", logo: "SF" },
  { name: "Amaron", logo: "AMARON" },
  { name: "Luminous", logo: "LUMINOUS" },
  { name: "Microtek", logo: "MICROTEK" },
];

export const STATS = [
  { label: "Years Of Experience", value: "15+" },
  { label: "Number Of Products", value: "9+" },
  { label: "Happy Customers", value: "10,000+" },
  { label: "Projects Done", value: "10,000+" },
];
