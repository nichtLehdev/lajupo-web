"use server";
import Link from "next/link";

import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { CommandMenu } from "./command-menu";
import { Icons } from "./icons";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { Button, buttonVariants } from "./ui/button";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export async function SiteHeader() {
  const user = await currentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/*<div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div> */}
          <nav className="flex items-center gap-2">
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-8 w-8 px-0",
                )}
              >
                <Icons.instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </div>
            </Link>
            <ModeToggle />
            <SignedIn>
              <div className="flex flex-row gap-2">
                {(user?.firstName && (
                  <span className="m-auto">Hi, {user?.firstName}!</span>
                )) ||
                  (user?.lastName && (
                    <span className="m-auto">Hi, {user?.lastName}!</span>
                  )) || <span className="m-auto">Hi there!</span>}

                <UserButton />
              </div>
            </SignedIn>
            <SignedOut>
              <Button asChild variant={"outline"}>
                <SignInButton />
              </Button>
            </SignedOut>
          </nav>
        </div>
      </div>
    </header>
  );
}
