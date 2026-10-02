import { SlidersHorizontal } from "lucide-react";

import SortSelect from "@/components/shop/SortSelect";

export default function ShopToolbar({
  startResult = 0,
  endResult = 0,
  totalCount = 0,
  onFilterClick,
  sortValue = "",
  onSortChange,
}) {
  return (
    <div className="contents">
      {/* Desktop */}
      <div className="mb-6 hidden items-center justify-between lg:flex">
        <p className="text-sm text-gray-500">
          Showing {startResult}–{endResult} of {totalCount} Results
        </p>

        <SortSelect
          value={sortValue}
          onChange={onSortChange}
        />
      </div>

      {/* Mobile */}
      <div className="sticky top-0 z-30 -mx-4 mb-6 bg-white px-4 py-3 lg:hidden">
        <div className="mb-4 flex items-center gap-3">
          <button
            type="button"
            onClick={onFilterClick}
            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:text-gray-900"
          >
            <SlidersHorizontal
              size={15}
              strokeWidth={1.5}
            />

            Filter
          </button>

          <div className="flex-1 rounded-lg border border-gray-200 px-3">
            <SortSelect
              value={sortValue}
              onChange={onSortChange}
            />
          </div>
        </div>

        <p className="text-center text-xs text-gray-500">
          Showing {startResult}–{endResult} of {totalCount} Results
        </p>
      </div>
    </div>
  );
}