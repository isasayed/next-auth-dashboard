import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Returns a string of the first two letters of a given name.
 * If the name is empty, it returns an empty string.
 * @param {string} [name=''] - The name to generate the avatar name from.
 * @returns {string} The avatar name.
 */
export function getAvatarName(name = ''): string {
  if (!name) return '';
  const names = name.split(" ");
  const firstLetter = names.length > 0 ? names[0][0] : "";
  const secondLetter = names.length > 1 ? names[1][0] : "";

  return `${firstLetter}${secondLetter}`
}