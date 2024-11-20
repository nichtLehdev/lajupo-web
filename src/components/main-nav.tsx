"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { Icons } from "./icons";
import { docsConfig } from "~/config/docs";
import { useUser } from "@clerk/nextjs";

export function MainNav() {
  const pathname = usePathname();
  const mainNav = docsConfig.mainNav;
  const user = useUser();

  if (!user.isLoaded) {
    return <>Loading...</>;
  }

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {mainNav.map((item) =>
          item.protected && !user.isSignedIn ? null : (
            <Link
              key={item.href}
              href={item.href || "/"}
              aria-disabled={item.disabled}
              tabIndex={item.disabled ? -1 : undefined}
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60",
                item.disabled &&
                  "pointer-events-none cursor-not-allowed text-foreground/40",
              )}
            >
              {item.title}
            </Link>
          ),
        )}
      </nav>
    </div>
  );
}
