export const items = [
  { value: "Home", href: "/" },
  { value: "Gallery", href: "/gallery" },
  { value: "Projects", href: "/projects" },
  { value: "Contacts", href: "/contacts" },
];

export const imagePath = import.meta.env.PROD ? "/Roshel-project/" : "";

export const cardsInfo = [
  {
    id: 1,
    logo: "icon-direction",
    name: "address",
    info: "98 Healey Rd, Bolton, ON, Canada ",
    href: "https://www.google.com/maps",
  },
  {
    id: 2,
    logo: "icon-mail",
    name: "email",
    info: "info@zodiacengineering.ca",
    href: "mailto:info@zodiacengineering.ca",
  },
  {
    id: 3,
    logo: "icon-phone",
    name: "phone",
    info: "647-995-6255",
    href: "tel:647-995-6255",
  },
  {
    id: 4,
    logo: "icon-phone",
    name: "phone",
    info: "416-712-1241",
    href: "tel:416-712-1241",
  },
];

export const galleryImages = [
  {
    id: 1,
    path: `${imagePath}images/gallery_1.jpg`,
  },
  {
    id: 2,
    path: `${imagePath}images/gallery_2.jpg`,
  },
  {
    id: 3,
    path: `${imagePath}images/gallery_3.jpg`,
  },
  {
    id: 4,
    path: `${imagePath}images/gallery_4.jpg`,
  },
  {
    id: 5,
    path: `${imagePath}images/gallery_5.jpg`,
  },
  {
    id: 6,
    path: `${imagePath}images/gallery_6.jpg`,
  },
  {
    id: 7,
    path: `${imagePath}images/gallery_7.jpg`,
  },
  {
    id: 8,
    path: `${imagePath}images/gallery_8.jpg`,
  },
  {
    id: 9,
    path: `${imagePath}images/gallery_9.jpg`,
  },
  {
    id: 10,
    path: `${imagePath}images/gallery_10.jpg`,
  },
  {
    id: 11,
    path: `${imagePath}images/gallery_11.jpg`,
  },
  {
    id: 12,
    path: `${imagePath}images/gallery_12.jpg`,
  },
  {
    id: 13,
    path: `${imagePath}images/gallery_13.jpg`,
  },
  {
    id: 14,
    path: `${imagePath}images/gallery_14.jpg`,
  },
  {
    id: 15,
    path: `${imagePath}images/gallery_15.jpg`,
  },
  {
    id: 16,
    path: `${imagePath}images/gallery_16.jpg`,
  },
  {
    id: 17,
    path: `${imagePath}images/gallery_17.jpg`,
  },
  {
    id: 18,
    path: `${imagePath}images/gallery_18.jpg`,
  },
  {
    id: 19,
    path: `${imagePath}images/gallery_19.jpg`,
  },
  {
    id: 20,
    path: `${imagePath}images/gallery_20.jpg`,
  },
  {
    id: 21,
    path: `${imagePath}images/gallery_21.jpg`,
  },
  {
    id: 22,
    path: `${imagePath}images/gallery_22.jpg`,
  },
  {
    id: 23,
    path: `${imagePath}images/gallery_23.jpg`,
  },
  {
    id: 24,
    path: `${imagePath}images/gallery_24.jpg`,
  },
  {
    id: 25,
    path: `${imagePath}images/gallery_25.jpg`,
  },
  {
    id: 26,
    path: `${imagePath}images/gallery_26.jpg`,
  },
];

export const firstProject = {
  title: "Cash In Transit",
  description:
    "The team of our qualified engineers is able to offer various modifications of widely known transport models, as well as to develop a new model according to the order taking specific technical tasks into account.",
  slide: [
    {
      id: 1,
      path: `${imagePath}images/gallery_3.jpg`,
    },
    {
      id: 2,
      path: `${imagePath}images/gallery_4.jpg`,
    },
    {
      id: 3,
      path: `${imagePath}images/gallery_12.jpg`,
    },
  ],
};

export const secondProject = {
  title: "Armored Personnel Carriers",
  description:
    "We manufacture a multi-purpose off road vehicle intended for use as a method of transportation and an operational vehicle during counter-terrorist operations, carrying out territorial defense tasks, including personal transportation during march. The car is build taking the need to protect the crew from firearms and the damaging factors of explosive devices into account.",
  slide: [
    {
      id: 1,
      path: `${imagePath}images/gallery_5.jpg`,
    },
    {
      id: 2,
      path: `${imagePath}images/gallery_7.jpg`,
    },
    {
      id: 3,
      path: `${imagePath}images/gallery_13.jpg`,
    },
  ],
};

export const thirdProject = {
  title: "Minibuses/Vans",
  description:
    "The armored minibus/van based on Ford Transit by Zodiac Engineering was developed primarily for the transport of valuable goods. This vehicle is an excellent solution for safe movement of a group of collectors with cargo. The protection of the minibus reaches the level of EN1063 BR7/NIL IV.",
  slide: [
    {
      id: 1,
      path: `${imagePath}images/gallery_8.jpg`,
    },
    {
      id: 2,
      path: `${imagePath}images/gallery_9.jpg`,
    },
    {
      id: 3,
      path: `${imagePath}images/gallery_11.jpg`,
    },
  ],
};

export const partners = [
  {
    name: "Cadsi-aicds logo",
    src: `${imagePath}images/partner_1.png`,
  },
  {
    name: "hutchinson logo",
    src: `${imagePath}images/partner_2.jpg`,
  },
  { name: "TriMark logo", src: `${imagePath}images/partner_3.jpg` },
  { name: "Namko logo", src: `${imagePath}images/partner_4.jpg` },
  { name: "Protek logo", src: `${imagePath}images/partner_5.jpg` },
  { name: "Horstman logo", src: `${imagePath}images/partner_6.jpg` },
  { name: "Titus logo", src: `${imagePath}images/partner_7.jpg` },
];
