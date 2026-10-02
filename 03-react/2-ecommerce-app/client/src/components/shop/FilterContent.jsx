import { useState } from "react";

import FilterSection from "@/components/shop/FilterSection";
import PriceRange from "@/components/shop/PriceRange";

const filterOptions = {
  categories: [
    { value: "cameras", label: "Cameras" },
    { value: "laptops", label: "Laptops" },
    { value: "phones", label: "Smartphones" },
    { value: "sound-boxes", label: "Sound Boxes" },
    { value: "tv", label: "TVs" },
    { value: "watches", label: "Watches" },
  ],

  availability: [
    { value: "in-stock", label: "In stock" },
    { value: "out-of-stock", label: "Out of stock" },
  ],

  brands: [
    { value: "apple", label: "Apple" },
    { value: "audionic", label: "Audionic" },
    { value: "bluks", label: "Bluks" },
    { value: "canon", label: "Canon" },
    { value: "dell", label: "Dell" },
    { value: "ecostar", label: "Ecostar" },
    { value: "hp", label: "HP" },
    { value: "infinix", label: "Infinix" },
    { value: "kieslect", label: "Kieslect" },
    { value: "lenovo", label: "Lenovo" },
    { value: "nikon", label: "Nikon" },
    { value: "prism", label: "Prism" },
    { value: "samsung", label: "Samsung" },
    { value: "sego", label: "SEGO" },
    { value: "sony", label: "Sony" },
    { value: "tcl", label: "TCL" },
    { value: "zero", label: "Zero" },
  ],

  colors: [
    { value: "black", label: "Black" },
    { value: "white", label: "White" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
  ],

  sizes: [
    { value: "S", label: "S" },
    { value: "M", label: "M" },
    { value: "L", label: "L" },
    { value: "XL", label: "XL" },
  ],
};

function CheckboxList({ options, selectedValues = [], onChange }) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
        >
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={() => onChange(option.value)}
            className="h-4 w-4 cursor-pointer rounded border-gray-300 text-violet-500 focus:ring-violet-500"
          />

          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
}

function RadioList({ options, selectedValue, onChange }) {
  return (
    <div className="space-y-3">
      {options.map((option) => {
        const isSelected = selectedValue === option.value;

        return (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
          >
            <input
              type="radio"
              name="availability"
              value={option.value}
              checked={isSelected}
              onChange={() => onChange(option.value)}
              className="sr-only"
            />

            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full border transition-colors ${
                isSelected
                  ? "border-violet-500"
                  : "border-gray-400"
              }`}
            >
              {isSelected && (
                <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
              )}
            </span>

            <span>{option.label}</span>
          </label>
        );
      })}
    </div>
  );
}

export default function FilterContent({
  filters,
  onFilterChange,
}) {
  const [openSections, setOpenSections] = useState({
    categories: true,
    availability: false,
    price: false,
    brands: false,
    colors: false,
    sizes: false,
  });

  const toggleSection = (section) => {
    setOpenSections((current) => ({
      ...current,
      [section]: !current[section],
    }));
  };

  return (
    <div>
      {/* Product Category */}
      <FilterSection
        title="Product Category"
        isOpen={openSections.categories}
        onToggle={() => toggleSection("categories")}
      >
        <CheckboxList
          options={filterOptions.categories}
          selectedValues={filters.categories}
          onChange={(value) =>
            onFilterChange({
              type: "categories",
              value,
            })
          }
        />
      </FilterSection>

      {/* Availability */}
      <FilterSection
        title="Availability"
        isOpen={openSections.availability}
        onToggle={() => toggleSection("availability")}
      >
        <RadioList
          options={filterOptions.availability}
          selectedValue={filters.availability}
          onChange={(value) =>
            onFilterChange({
              type: "availability",
              value,
            })
          }
        />
      </FilterSection>

      {/* Price */}
      <FilterSection
        title="Price"
        isOpen={openSections.price}
        onToggle={() => toggleSection("price")}
      >
        <PriceRange
          min={0}
          max={2000}
          minValue={filters.minPrice}
          maxValue={filters.maxPrice}
          onChange={(value) =>
            onFilterChange({
              type: "price",
              value,
            })
          }
        />
      </FilterSection>

      {/* Brand */}
      <FilterSection
        title="Brand"
        isOpen={openSections.brands}
        onToggle={() => toggleSection("brands")}
      >
        <CheckboxList
          options={filterOptions.brands}
          selectedValues={filters.brands}
          onChange={(value) =>
            onFilterChange({
              type: "brands",
              value,
            })
          }
        />
      </FilterSection>

      {/* Color */}
      <FilterSection
        title="Color"
        isOpen={openSections.colors}
        onToggle={() => toggleSection("colors")}
      >
        <CheckboxList
          options={filterOptions.colors}
          selectedValues={filters.colors}
          onChange={(value) =>
            onFilterChange({
              type: "colors",
              value,
            })
          }
        />
      </FilterSection>

      {/* Size */}
      <FilterSection
        title="Size"
        isOpen={openSections.sizes}
        onToggle={() => toggleSection("sizes")}
      >
        <CheckboxList
          options={filterOptions.sizes}
          selectedValues={filters.sizes}
          onChange={(value) =>
            onFilterChange({
              type: "sizes",
              value,
            })
          }
        />
      </FilterSection>
    </div>
  );
}