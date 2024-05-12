import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function differenceInYears(today, birthday) {
  // Calculate the difference in milliseconds between the two dates
  const diffMilliseconds = today.getTime() - birthday.getTime();

  // Convert milliseconds to years
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Considering leap years
  const diffYears = diffMilliseconds / millisecondsInYear;

  // Round the difference to get whole years
  return Math.floor(diffYears);
}
