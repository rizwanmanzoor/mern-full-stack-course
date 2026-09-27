import facebookLogo from "@/assets/icons/facebook.svg";
import instagramLogo from "@/assets/icons/instagram.svg";
import xLogo from "@/assets/icons/x.svg";

import mastercardLogo from "@/assets/payments/mastercard.svg";
import visaLogo from "@/assets/payments/visa.svg";
import paypalLogo from "@/assets/payments/paypal.svg";
import amexLogo from "@/assets/payments/amex.svg";
import wetunionLogo from "@/assets/payments/westunion.svg";

export const clothingLinks = [
  "Tops",
  "Tops & Blouses",
  "Dresses",
  "Outerwear",
  "Accessories",
  "New Arrivals",
];

export const shoeLinks = [
  "Hills shoes",
  "Running Shoes",
  "Ballet Pumps",
  "Slingback",
];

export const footerLinks = [
  {
    label: "Clothing",
    links: clothingLinks,
  },
  {
    label: "Shoes",
    links: shoeLinks,
  },
];

export const socialLinks = [
  {
    icon: facebookLogo,
    href: "#",
    label: "Facebook",
  },
  {
    icon: xLogo,
    href: "#",
    label: "Twitter",
  },
  {
    icon: instagramLogo,
    href: "#",
    label: "Instagram",
  },
];

export const paymentMethods = [
   {
    name: "Mastercard",
    src: mastercardLogo,
  },
  {
    name: "Visa",
    src: visaLogo,
  },
  {
    name: "PayPal",
    src: paypalLogo,
  },
  {
    name: "AMEX",
    src: amexLogo,
  },
  {
    name: "WesternUnion",
    src: wetunionLogo,
  },
];