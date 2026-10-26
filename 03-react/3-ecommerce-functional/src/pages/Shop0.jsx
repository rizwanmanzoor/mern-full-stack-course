import { useState, useRef, useEffect } from "react";

import {CATEGORIES, BRANDS, SIZES, COLORS, INITIAL_RECENT } from "@/data/ProductCategories";
import { ChevronRight, Search, X } from "lucide-react";
import { CheckmarkIcon } from "@/components/icons/Icons";

// Collapsible section component
function CollapsibleSection({ title, id, defaultOpen = false, children }) {
   const [isOpen, setIsOpen] = useState(defaultOpen);
   const contentRef = useRef(null);
   const [height, setHeight] = useState(defaultOpen ? "auto" : "0px");

   useEffect(() => {
      if (isOpen) {
         const scrollHeight = contentRef.current.scrollHeight;
         setHeight(`${scrollHeight}px`);
      } else {
         setHeight("0px");
      }
   }, [isOpen]);

   return (
      <div>
         <button
            type="button"
            className="header flex items-center gap-2 justify-between cursor-pointer w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            aria-expanded={isOpen}
            aria-controls={`${id}-panel`}
            id={`${id}-button`}
            onClick={() => setIsOpen((prev) => !prev)}
         >
            <h3 className="text-slate-900 text-base font-semibold">
               {title}
            </h3>
            <span
               className={`transition-all duration-300 ${isOpen ? "-rotate-90" : "rotate-90" }`}
            >
               {/* <ArrowIcon /> */}
               <ChevronRight />
            </span>
         </button>

         <div
            id={`${id}-panel`}
            ref={contentRef}
            role="region"
            aria-labelledby={`${id}-button`}
            className="overflow-hidden transition-all duration-300 px-1 pb-1"
            style={{ height }}
            inert={!isOpen}
         >
            {children}
         </div>
      </div>
   );
}

// Custom checkbox item
function CheckboxItem({ item, checked, onChange }) {
   return (
      <li>
         <label
            htmlFor={item.id}
            className="inline-flex items-center gap-2.5 group cursor-pointer"
         >
            <input
               type="checkbox"
               className="sr-only"
               id={item.id}
               name={item.id.startsWith("brand") ? "brand" : "category"}
               value={item.value}
               checked={checked}
               onChange={() => onChange(item.value)}
            />
            <span
               className={`flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 transition-colors ${checked ? "bg-blue-600 outline-blue-600" : "bg-white " } group-focus-within:outline-2 group-focus-within:outline-blue-600`}
               aria-hidden="true"
            >
               <span style={{ opacity: checked ? 1 : 0 }}>
                  <CheckmarkIcon />
               </span>
            </span>
            <span className="text-sm text-slate-900">
               {item.label}
            </span>
         </label>
      </li>
   );
}

// Price range slider
function PriceRange({ minVal, maxVal, onMinChange, onMaxChange }) {
   const minPercent = (minVal / 1000) * 100;
   const maxPercent = (maxVal / 1000) * 100;

   return (
      <fieldset>
         <legend
            id="price-heading"
            className="text-slate-900 text-sm font-semibold"
         >
            Price
         </legend>

         <div className="relative mt-6">
            <div className="h-1.5 bg-gray-300 relative">
               <div
                  id="activeTrack"
                  className="absolute h-1.5 bg-blue-600 rounded-full"
                  style={{
                     left: `${minPercent}%`,
                     width: `${maxPercent - minPercent}%`,
                  }}
               />
            </div>

            <label htmlFor="minRange" className="sr-only">
               Minimum price
            </label>
            <input
               type="range"
               id="minRange"
               min="0"
               max="1000"
               value={minVal}
               aria-describedby="price-range-values"
               className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
               onChange={(e) => {
                  const val = Math.min(Number(e.target.value), maxVal - 1);
                  onMinChange(val);
               }}
            />

            <label htmlFor="maxRange" className="sr-only">
               Maximum price
            </label>
            <input
               type="range"
               id="maxRange"
               min="0"
               max="1000"
               value={maxVal}
               aria-describedby="price-range-values"
               className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
               onChange={(e) => {
                  const val = Math.max(Number(e.target.value), minVal + 1);
                  onMaxChange(val);
               }}
            />

            <div
               id="price-range-values"
               className="flex justify-between text-slate-600 font-medium text-sm mt-4"
               aria-live="polite"
            >
               <span id="minPrice">${minVal}</span>
               <span id="maxPrice">${maxVal}</span>
            </div>
         </div>
      </fieldset>
   );
}

// Main ProductFilter component
export default function ProductFilter() {
   const [minPrice, setMinPrice] = useState(0);
   const [maxPrice, setMaxPrice] = useState(750);
   const [selectedCategories, setSelectedCategories] = useState([]);
   const [selectedBrands, setSelectedBrands] = useState([]);
   const [selectedSizes, setSelectedSizes] = useState([]);
   const [selectedColors, setSelectedColors] = useState([]);
   const [recentSearches, setRecentSearches] = useState(INITIAL_RECENT);

   const toggleCheckbox = (setter, value) => {
      setter((prev) =>
         prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
   };

   const toggleSize = (size) => {
      setSelectedSizes((prev) =>
         prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
      );
   };

   const toggleColor = (color) => {
      setSelectedColors((prev) =>
         prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
      );
   };

   const clearAll = () => {
      setMinPrice(0);
      setMaxPrice(750);
      setSelectedCategories([]);
      setSelectedBrands([]);
      setSelectedSizes([]);
      setSelectedColors([]);
   };

   const removeRecentSearch = (tag) => {
      setRecentSearches((prev) => prev.filter((t) => t !== tag));
   };

   return (
      <aside className="flex" aria-labelledby="filter-heading">
         {/* Sidebar */}
         <div className="bg-gray-50 w-full max-w-70 border-r border-slate-100 shrink-0 px-4 md:px-6 py-6 min-h-screen">
            {/* Header */}
            <div className="flex items-center border-b border-slate-300 pb-2 mb-6">
               <h2
                  id="filter-heading"
                  className="text-slate-900 text-lg font-semibold"
               >
                  Filter
               </h2>
               <button
                  type="button"
                  className="text-sm text-red-500 font-semibold ml-auto cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  aria-label="Clear all filters"
                  onClick={clearAll}
               >
                  Clear all
               </button>
            </div>

            <div className="filter-options space-y-6 relative">
               {/* Price */}
               <PriceRange
                  minVal={minPrice}
                  maxVal={maxPrice}
                  onMinChange={setMinPrice}
                  onMaxChange={setMaxPrice}
               />

               {/* Category */}
               <CollapsibleSection title="Category" id="category" defaultOpen={true}>
                  <div className="mt-4">
                     <form className="mt-2" role="search" aria-label="Search category">
                        <div className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                           <label htmlFor="search-category" className="sr-only">
                              Search category
                           </label>
                           <input
                              type="search"
                              id="search-category"
                              name="search-category"
                              placeholder="Search category"
                              className="text-sm text-slate-900 w-full outline-none bg-transparent"
                           />
                           {/* <SearchIcon /> */}
                           <Search />
                        </div>
                     </form>

                     <ul className="mt-6 space-y-4" aria-label="Category options">
                        {CATEGORIES.map((item) => (
                           <CheckboxItem
                              key={item.id}
                              item={item}
                              checked={selectedCategories.includes(item.value)}
                              onChange={(val) =>
                                 toggleCheckbox(setSelectedCategories, val)
                              }
                           />
                        ))}
                     </ul>
                  </div>
               </CollapsibleSection>

               {/* Brand */}
               <CollapsibleSection title="Brand" id="brand" defaultOpen={false}>
                  <div className="mt-4">
                     <form className="mt-2" role="search" aria-label="Search brand">
                        <div className="flex items-center gap-2.5 px-3 py-2 rounded-md bg-white outline-1 -outline-offset-1 outline-slate-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
                           <label htmlFor="search-brand" className="sr-only">
                              Search brand
                           </label>
                           <input
                              type="search"
                              id="search-brand"
                              name="search-brand"
                              placeholder="Search brand"
                              className="text-sm text-slate-900 w-full outline-none bg-transparent"
                           />
                           {/* <SearchIcon /> */}
                           <Search />
                        </div>
                     </form>

                     <ul className="mt-6 space-y-4" aria-label="Brand options">
                        {BRANDS.map((item) => (
                           <CheckboxItem
                              key={item.id}
                              item={item}
                              checked={selectedBrands.includes(item.value)}
                              onChange={(val) => toggleCheckbox(setSelectedBrands, val)}
                           />
                        ))}
                     </ul>
                  </div>
               </CollapsibleSection>

               {/* Size */}
               <CollapsibleSection title="Size" id="size" defaultOpen={false}>
                  <div className="flex flex-wrap gap-3 mt-4">
                     {SIZES.map((size) => (
                        <button
                           key={size}
                           type="button"
                           aria-pressed={selectedSizes.includes(size)}
                           onClick={() => toggleSize(size)}
                           className={`cursor-pointer border text-slate-900 rounded-md text-[13px] font-medium py-1 px-1 min-w-14 transition-colors hover:border-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${selectedSizes.includes(size) ? 'border-blue-600 bg-blue-50 text-blue-600  ' : 'border-slate-300 '}`}
                        >
                           {size}
                        </button>
                     ))}
                  </div>
               </CollapsibleSection>

               {/* Color */}
               <CollapsibleSection title="Color" id="color" defaultOpen={false}>
                  <div className="flex flex-wrap gap-3 mt-4">
                     {COLORS.map((color) => (
                        <button
                           key={color.label}
                           type="button"
                           aria-label={color.label}
                           aria-pressed={selectedColors.includes(color.label)}
                           onClick={() => toggleColor(color.label)}
                           className={`cursor-pointer rounded-full w-8 h-8 hover:scale-[1.05] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${color.className} ${selectedColors.includes(color.label) ? "ring-2 ring-blue-600 ring-offset-2 " : "" }`}
                        />
                     ))}
                  </div>
               </CollapsibleSection>
            </div>
         </div>

         {/* Main content area */}
         <div className="w-full py-6 px-8">
            {/* Recent Searches */}
            <div>
               <h3 className="text-slate-900 text-lg font-semibold mb-4">
                  Recent Searches
               </h3>
               <div className="flex flex-wrap gap-3">
                  {recentSearches.map((tag) => (
                     <button
                        key={tag}
                        type="button"
                        aria-label={`Remove ${tag} from recent searches`}
                        onClick={() => removeRecentSearch(tag)}
                        className="flex items-center gap-2 border border-slate-300 rounded-md text-[13px] text-slate-600 font-medium py-1 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                     >
                        {tag}
                        {/* <CloseIcon /> */}
                        <X />
                     </button>
                  ))}
               </div>
            </div>

            {/* Product Grid (placeholder cards) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
               {Array.from({ length: 6 }).map((_, i) => (
                  <div
                     key={i}
                     className="bg-gray-100 w-full h-48 rounded-md"
                  />
               ))}
            </div>
         </div>
      </aside>
   );
}