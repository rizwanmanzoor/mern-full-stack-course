import { ChevronLeft, ChevronRight } from "lucide-react";

function getPageNumbers(currentPage, totalPages) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  if (currentPage >= totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
}

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) {
  const pages = getPageNumbers(currentPage, totalPages);

  const handlePageChange = (page) => {
    if (
      page < 1 ||
      page > totalPages ||
      page === currentPage
    ) {
      return;
    }

    onPageChange?.(page);
  };

  return (
    <nav
      aria-label="Pagination"
      className="mt-10 flex items-center justify-center gap-2"
    >
      <button
        type="button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-gray-300 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronLeft size={16} strokeWidth={1.5} />
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="flex h-10 w-10 items-center justify-center text-sm text-gray-400"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => handlePageChange(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`flex h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm font-medium transition ${
              currentPage === page
                ? "bg-violet-500 text-white"
                : "border border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-900"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-gray-300 hover:text-gray-900 disabled:pointer-events-none disabled:opacity-40"
      >
        <ChevronRight size={16} strokeWidth={1.5} />
      </button>
    </nav>
  );
}