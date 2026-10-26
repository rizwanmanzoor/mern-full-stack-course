import { useEffect, useRef, useState } from "react";

export default function FAQItem({ item, index, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Measure the DOM scrollHeight only when openness changes, avoiding mid-render ref access
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="py-6">
      <h3 id={`faq-heading-${index}`}>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={`faq-panel-${index}`}
          onClick={onToggle}
          className="toggle-button cursor-pointer w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
        >
          <span className="mr-4 text-left">{item.question}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
            aria-hidden="true"
          >
            <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
            <path
              className={`transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
              d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
            />
          </svg>
        </button>
      </h3>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-heading-${index}`}
        aria-hidden={!isOpen}
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className={`content overflow-hidden transition-all duration-300 ease-in-out ${!isOpen ? "invisible" : ""}`}
      >
        <div className="mt-4">
          <p className="text-base text-slate-600 leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
