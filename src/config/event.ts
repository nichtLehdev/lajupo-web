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
  date: new Date("2026-03-22").toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }),
  time: "TBA",
  location: {
    name: "TBA",
    address: "",
    city: "Simmern",
    zip: "55469",
    link: "",
  },
  link: "",
};
