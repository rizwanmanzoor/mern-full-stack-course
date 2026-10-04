import xLogo from "@/assets/icons/x.svg";
import facebookLogo from "@/assets/icons/facebook.svg";
import instagramLogo from "@/assets/icons/instagram.svg";

import visaLogo from "@/assets/images/payments/visa.svg";
import amexLogo from "@/assets/images/payments/amex.svg";
import paypalLogo from "@/assets/images/payments/paypal.svg";
import wetunionLogo from "@/assets/images/payments/westunion.svg";
import mastercardLogo from "@/assets/images/payments/mastercard.svg";

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