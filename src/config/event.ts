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
  date: new Date("2026-03-21").toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }),
  time: "19:00",
  location: {
    name: "Abteikirche Otterberg",
    address: "Kirchstraße 10",
    city: "Otterberg",
    zip: "67697",
    link: "https://www.google.com/maps/dir/?api=1&destination=Abteikirche%20Otterberg",
  },
  link: "",
};
