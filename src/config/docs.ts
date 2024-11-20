import { type MainNavItem, type SidebarNavItem } from "~/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Time Tracking",
      href: "/tracker",
    },
    {
      title: "Träwelling App",
      href: "/travel",
      disabled: true,
    },
    {
      title: "Sport",
      href: "/sport",
      disabled: true,
    },
    {
      title: "Blog",
      href: "/blog",
      disabled: true,
    },
  ],
  sidebarNav: [],
  chartsNav: [],
};
