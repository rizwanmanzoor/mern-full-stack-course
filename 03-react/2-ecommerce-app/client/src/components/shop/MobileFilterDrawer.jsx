import { X, RotateCcw } from "lucide-react";

import FilterContent from "@/components/shop/FilterContent";

export default function MobileFilterDrawer({
  isOpen = false,
  filters,
  onFilterChange,
  onReset,
  onClose,
}) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-out lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex min-h-full flex-col">
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5">
            <div className="flex items-center gap-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Filter
              </h4>

              <button
                type="button"
                onClick={onReset}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-500 transition-colors hover:text-violet-600"
              >
                <RotateCcw size={14} strokeWidth={1.5} />
                Reset All
              </button>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close filter"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          {/* Filter Content */}
          <div className="flex-1 px-5">
            <FilterContent
              filters={filters}
              onFilterChange={onFilterChange}
            />
          </div>
        </div>
      </aside>
    </>
  );
}