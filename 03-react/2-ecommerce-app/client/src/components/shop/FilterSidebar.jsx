import { RotateCcw } from "lucide-react";

import FilterContent from "@/components/shop/FilterContent";

export default function FilterSidebar({ filters, onFilterChange, onReset }) {
  return (
    <aside className="flex flex-col lg:max-h-[calc(100dvh-7.5rem)]">
      {/* Header stays fixed at the top of the sidebar */}
      <div className="flex shrink-0 items-center justify-between border-b border-gray-100 pb-7">
        <h4 className="text-lg font-semibold text-gray-800">Filter</h4>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-500 transition-colors hover:text-violet-600"
        >
          <RotateCcw size={14} strokeWidth={1.5} />
          Reset All
        </button>
      </div>

      {/* Only the filter list scrolls when it's taller than the viewport */}
      <div className="min-h-0 flex-1 divide-y divide-gray-100 overflow-y-auto overscroll-contain pr-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
        <FilterContent filters={filters} onFilterChange={onFilterChange} />
      </div>
    </aside>
  );
}
