type Concert = {
  title: string;
  date: string;
  time: string;
  location: {
    name: string;
    address: string;
    city: string;
    zip: string;
    link: string;
  };
  price?: {
    normal: number;
    reduced: number;
  };
  link: string;
};

export const concertConfig: Concert = {
  title: "TBA",
  date: new Date("2025-09-28").toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }),
  time: "18:00",
  location: {
    name: "Willibrordi-Dom",
    address: "Großer Markt",
    city: "Wesel",
    zip: "46483",
    link: "https://www.google.com/maps/dir//Willibrordi-Dom",
  },
  link: "https://landing.churchdesk.com/e/35781340/WESELER-DOMKONZERT---Bl%C3%A4ser-und-Orgel",
};
