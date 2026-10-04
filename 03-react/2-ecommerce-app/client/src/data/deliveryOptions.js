import fedexLogo from "@/assets/images/payments/fedex.svg";
import dhlLogo from "@/assets/images/payments/dhl.svg";

export const deliveryOptions = [
  {
    id: "fedex",
    name: "FedEx",
    logo: fedexLogo,
    price: 5.99,
    estimatedDays: "3-5 days",
  },
  {
    id: "dhl",
    name: "DHL",
    logo: dhlLogo,
    price: 5.99,
    estimatedDays: "3-5 days",
  },
];