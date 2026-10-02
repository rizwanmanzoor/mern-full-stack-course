import { ChevronDown, ChevronUp } from "lucide-react";

export default function FilterSection({
  title,
  children,
  isOpen = true,
  onToggle,
}) {
  return (
    <div className="border-b border-gray-100 py-7">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-gray-800">
          {title}
        </span>

        {isOpen ? (
          <ChevronUp
            size={20}
            strokeWidth={1.5}
            className="text-gray-700"
          />
        ) : (
          <ChevronDown
            size={20}
            strokeWidth={1.5}
            className="text-gray-700"
          />
        )}
      </button>

      {isOpen && children && (
        <div className="mt-5">
          {children}
        </div>
      )}
    </div>
  );
}