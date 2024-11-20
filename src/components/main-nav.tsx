"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { Icons } from "./icons";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/tracker" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Time Tracking
        </Link>
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/travel")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Travel
        </Link>
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/sport")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Sport
        </Link>
        <Link
          href="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/blog")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}
