"use client";

import {
  CalendarClockIcon,
  MapPinIcon,
  TicketIcon,
  TicketXIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Icons } from "~/components/icons";
import { buttonVariants } from "~/components/ui/button";
import { concertConfig } from "~/config/event";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

function useCountdown(targetDate: string, targetTime: string) {
  const year = targetDate.split(".")[2];
  const month = targetDate.split(".")[1]?.padStart(2, "0") || "00";
  const day = targetDate?.split(".")[0]?.padStart(2, "0") || "00";

  const target = new Date(`${year}-${month}-${day}T${targetTime}:00`);

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  return timeRemaining;
}

function getTimeRemaining(target: Date) {
  const total = target.getTime() - new Date().getTime();
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

export default function IndexPage() {
  const verticalImages = [
    "/main/vertical/20250406_192355000_iOS.jpg",
    // add more vertical images here
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

    // add more horizontal images here
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

  const { days, hours, minutes, seconds } = useCountdown(
    concertConfig.date,
    concertConfig.time,
  );

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

      {/*Instagram Logo */}
      <div className="absolute bottom-4 left-4 z-20">
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
              "size-8 px-0",
            )}
          >
            <Icons.instagram className="size-10" />
            <span className="sr-only">Instagram</span>
          </div>
        </Link>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10">
        {/* Large screen angled pane */}
        <div className="clip-angled-pane relative hidden h-full w-full items-center bg-black/70 lg:flex">
          <div className="mr-8 ml-[60%] w-[35%] text-right text-white">
            <h1 className="hidden text-6xl font-bold 2xl:block 2xl:text-6xl">
              Landes&shy;jugend&shy;posaunenchor Rheinland
            </h1>
            <h1 className="block text-6xl font-bold 2xl:hidden 2xl:text-6xl">
              LaJuPo Rheinland
            </h1>
            <div className="p-8 text-2xl font-bold" />
            <div>
              {/* Countdown Timer */}
              <div className="mt-8 flex items-center justify-end gap-4 text-5xl font-bold">
                <div className="flex flex-col items-center">
                  <span>{String(days).padStart(2, "0")}</span>
                  <span className="text-lg font-normal">Tage</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{String(hours).padStart(2, "0")}</span>
                  <span className="text-lg font-normal">Stunden</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{String(minutes).padStart(2, "0")}</span>
                  <span className="text-lg font-normal">Minuten</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{String(seconds).padStart(2, "0")}</span>
                  <span className="text-lg font-normal">Sekunden</span>
                </div>
              </div>
            </div>
            <div className="p-8 text-2xl font-bold" />
            <h2 className="mt-4 text-3xl font-bold">Nächster Auftritt</h2>
            <h3 className="mt-4 text-xl font-semibold">
              <div className="flex items-center justify-end gap-2 text-lg">
                {concertConfig.date} <span className="font-normal">um</span>
                {concertConfig.time} Uhr{" "}
                <CalendarClockIcon className="size-6" />
              </div>
            </h3>
            <h3 className="mt-4 text-xl font-semibold">
              <div className="flex items-center justify-end gap-2 text-lg">
                <div>
                  {concertConfig.location.name}
                  <span className="font-normal">, </span>
                  {concertConfig.location.city}
                </div>{" "}
                <MapPinIcon className="size-6" />
              </div>
            </h3>
            <h3 className="mt-4 text-xl font-semibold">
              <div className="flex items-center justify-end gap-2 text-lg">
                <div>
                  {concertConfig.price.normal}€{" "}
                  <span className="font-normal">/ </span>
                  <span className="font-normal">ermäßigt</span>{" "}
                  {concertConfig.price.reduced}€{" "}
                </div>
                <TicketIcon className="size-6" />
              </div>
            </h3>
          </div>
        </div>

        {/* Small screen solid overlay */}
        <div className="flex h-full w-full items-center justify-center bg-black/70 px-8 lg:hidden">
          <div className="text-white">
            <h1 className="text-5xl font-bold">LaJuPo Rheinland</h1>
            <div className="p-8 text-2xl font-bold" />
            <div>
              {/* Countdown Timer */}
              <div className="mt-8 flex items-center justify-center gap-4 text-5xl font-bold">
                <div className="flex flex-col items-center">
                  <span>{String(days).padStart(2, "0")}</span>
                  <span className="text-lg font-normal">Tage</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{String(hours).padStart(2, "0")}</span>
                  <span className="text-lg font-normal">Stunden</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{String(minutes).padStart(2, "0")}</span>
                  <span className="text-lg font-normal">Minuten</span>
                </div>
                <div className="flex flex-col items-center">
                  <span>{String(seconds).padStart(2, "0")}</span>
                  <span className="text-lg font-normal">Sekunden</span>
                </div>
              </div>
            </div>
            <div className="p-8 text-2xl font-bold" />
            <div className="text-right">
              <h2 className="mt-4 text-3xl font-bold">Nächster Auftritt</h2>
              <h3 className="mt-4 text-xl font-semibold">
                <div className="flex items-center justify-end gap-2 text-lg">
                  {concertConfig.date} <span className="font-normal">um</span>
                  {concertConfig.time} Uhr{" "}
                  <CalendarClockIcon className="size-6" />
                </div>
              </h3>
              <h3 className="mt-4 text-xl font-semibold">
                <div className="flex items-center justify-end gap-2 text-lg">
                  <div>
                    {concertConfig.location.name}
                    <span className="font-normal">, </span>
                    {concertConfig.location.city}
                  </div>{" "}
                  <MapPinIcon className="size-6" />
                </div>
              </h3>
              <h3 className="mt-4 text-xl font-semibold">
                <div className="flex items-center justify-end gap-2 text-lg">
                  <div>
                    {concertConfig.price.normal}€{" "}
                    <span className="font-normal">/ </span>
                    <span className="font-normal">ermäßigt</span>{" "}
                    {concertConfig.price.reduced}€{" "}
                  </div>
                  <TicketIcon className="size-6" />
                </div>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
