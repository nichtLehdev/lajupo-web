import { CalendarClockIcon, MapPinIcon, TicketIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { concertConfig } from "~/config/event";

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

export default function NextEvent() {
  const { days, hours, minutes, seconds } = useCountdown(
    concertConfig.date,
    concertConfig.time,
  );

  return (
    <div className="text-right">
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
          {concertConfig.time} Uhr <CalendarClockIcon className="size-6" />
        </div>
      </h3>
      <h3 className="mt-4 text-xl font-semibold">
        <div className="flex items-center justify-end gap-2 text-lg">
          <Link
            href={concertConfig.location.link}
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            {concertConfig.location.name}
            <span className="font-normal">, </span>
            {concertConfig.location.city}
          </Link>{" "}
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
  );
}
