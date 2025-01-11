import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { CONTACT_EMAIL, EMAIL_SUBJECT } from "./constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleEmailClick = (e: React.MouseEvent) => {
  e.preventDefault();
  if (/Android|iPhone/i.test(navigator.userAgent)) {
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      EMAIL_SUBJECT
    )}`;
  } else {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    alert(
      `You seem to be on a desktop.\nWe cannot access your email application.\n\nInstead, your email address copied to clipboard: ${CONTACT_EMAIL}`
    );
  }
};
