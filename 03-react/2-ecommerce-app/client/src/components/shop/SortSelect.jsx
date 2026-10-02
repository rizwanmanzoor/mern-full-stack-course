import { ChevronDown } from "lucide-react";

const sortOptions = [
  {
    value: "best-selling",
    label: "Best selling",
  },
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "price-low-high",
    label: "Price, Low to high",
  },
  {
    value: "price-high-low",
    label: "Price, High to low",
  },
  {
    value: "name-a-z",
    label: "Alphabetically, A-Z",
  },
  {
    value: "name-z-a",
    label: "Alphabetically, Z-A",
  },
];

export default function SortSelect({
  value = "best-selling",
  onChange,
  className = "",
}) {
  return (
    <div
      className={`relative flex items-center ${
        className || "gap-1.5"
      }`}
    >
      <span className="hidden text-sm text-gray-500 sm:inline">
        Sort By:
      </span>

      <select
        value={value}
        onChange={(event) =>
          onChange?.(event.target.value)
        }
        className="h-10 cursor-pointer appearance-none bg-transparent pr-7 text-sm font-medium text-gray-900 outline-none"
        aria-label="Sort products"
      >
        {sortOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      <ChevronDown
        size={14}
        strokeWidth={1.5}
        className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
}