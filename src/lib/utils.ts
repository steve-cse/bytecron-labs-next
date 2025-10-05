import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const subtexts = [
  "100% organic articles.",
  "Crafted for speed.",
  "Small ideas, big impact.",
  "Authentic tech insights.",
  "Experiments that work.",
  "Hack. Learn. Ship.",
  "Haters gonna hate."
];

export const getRandomSubtext = () => {
  return subtexts[Math.floor(Math.random() * subtexts.length)];
};
