"use client";

import { SignedIn, SignedOut, SignIn, SignInButton } from "@clerk/nextjs";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icons } from "~/components/icons";
import NextEvent from "~/components/next-event";
import { Button, buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

function SignInButtonComponent() {
  return (
    <div className="mb-8 flex items-center justify-end text-right">
      <div className="mr-4 flex h-full items-center justify-end gap-2 align-middle">
        <Link
          href={siteConfig.links.instagram}
          target="_blank"
          rel="noreferrer"
        >
          <Button variant={"link"} className="size-17" asChild>
            <Icons.instagram />
          </Button>
        </Link>
      </div>
      <SignedOut>
        <Button variant="default" className="hover:cursor-pointer" asChild>
          <SignInButton mode="modal" />
        </Button>
      </SignedOut>
      <SignedIn>
        <Button variant="link" className="hover:cursor-pointer" asChild>
          <Link href="/members" className="flex items-center justify-end gap-2">
            <User className="size-8" />
            <span className="hidden text-sm font-bold lg:block">Dashboard</span>
          </Link>
        </Button>
      </SignedIn>
    </div>
  );
}

export default function IndexPage() {
  const verticalImages = [
    "/main/vertical/20250406_192355000_iOS.jpg",
    "/main/vertical/20250501_185500_iOS.jpg",
  ];
  const horizontalImages = [
    "/main/horizontal/lars_img-20241117-JuPoAlfter-0167.jpg",
    "/main/horizontal/lars_img-20241117-JuPoAlfter-0127.jpg",
    "/main/horizontal/lars_img-20241117-JuPoAlfter-0171.jpg",
    "/main/horizontal/lars_img-20250209-JuPoSaarbruecken-0274.jpg",
    "/main/horizontal/lars_img-20250209-JuPoSaarbruecken-0270.jpg",
    "/main/horizontal/lars_img-20250209-JuPoSaarbruecken-0268.jpg",
    "/main/horizontal/lars_img-20250406-JuPoDuisburg-0267.jpg",
    "/main/horizontal/lars_img-20250406-JuPoDuisburg-0268.jpg",
    "/main/horizontal/lars_img-20250406-JuPoDuisburg-0315.jpg",
  ];

  const [isHydrated, setIsHydrated] = useState(false);
  const [desktopImage, setDesktopImage] = useState(horizontalImages[0]);
  const [mobileImage, setMobileImage] = useState(verticalImages[0]);

  useEffect(() => {
    setIsHydrated(true);
    const randomH = Math.floor(Math.random() * horizontalImages.length);
    const randomV = Math.floor(Math.random() * verticalImages.length);
    setDesktopImage(horizontalImages[randomH]);
    setMobileImage(verticalImages[randomV]);
  }, []);

  if (!mobileImage || !desktopImage) {
    return (
      <div className="bg-background flex h-screen w-full items-center justify-center text-2xl font-bold text-white">
        <Icons.spinner className="h-10 w-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image – large screens */}
      <Image
        src={desktopImage}
        alt="Orchestra"
        fill
        unoptimized
        className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        priority
      />

      {/* Background Image – mobile / tablet */}
      <Image
        src={mobileImage}
        unoptimized
        alt="Orchestra Mobile"
        fill
        className="absolute inset-0 block h-full w-full object-cover lg:hidden"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10">
        {/* Large screen angled pane */}
        <div className="clip-angled-pane relative hidden h-full w-full items-center bg-black/70 lg:flex">
          {/* Login Button + Link to Members Area */}

          <div className="mr-8 ml-[60%] w-[35%] text-right text-white">
            <SignInButtonComponent />
            <h1 className="hidden text-6xl font-bold 2xl:block 2xl:text-6xl">
              Landes&shy;jugend&shy;posaunenchor Rheinland
            </h1>
            <h1 className="block text-6xl font-bold 2xl:hidden 2xl:text-6xl">
              LaJuPo Rheinland
            </h1>
            <div className="p-8 text-2xl font-bold" />
            <NextEvent />
          </div>
        </div>

        <div className="flex h-full w-full items-center justify-center bg-black/70 px-8 lg:hidden">
          <div className="text-white">
            <SignInButtonComponent />
            <h1 className="text-5xl font-bold">LaJuPo Rheinland</h1>
            <div className="p-8 text-2xl font-bold" />
            <NextEvent />
          </div>
        </div>
      </div>
    </div>
  );
}
