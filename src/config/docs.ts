import { type MainNavItem, type SidebarNavItem } from "~/types/nav";

export interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  chartsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "News",
      href: "/news",
      disabled: true,
    },
    {
      title: "Photos",
      href: "/photos",
    },
    {
      title: "About us",
      href: "/about",
      disabled: true,
    },
  ],
  sidebarNav: [],
  chartsNav: [],
};
