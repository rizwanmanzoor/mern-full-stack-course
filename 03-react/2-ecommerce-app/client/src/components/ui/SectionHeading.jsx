export default function SectionHeading({
  title,
  description,
  action,
  align = "left",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`
        mb-10
        flex
        flex-col
        gap-5
        sm:mb-16
        ${isCentered ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between"}
      `}
    >
      {/* Heading */}
      <div
        className={`
          ${isCentered ? "max-w-2xl text-center" : "text-left lg:max-w-lg"}
        `}
      >
        <h2
          className="
            mb-2
            text-3xl
            font-medium
            tracking-[-1px]
            text-gray-800
            sm:text-4xl
            lg:text-5xl
            lg:tracking-[-1.92px]
          "
        >
          {title}
        </h2>

        {description && (
          <p className="text-sm leading-6 text-gray-500 sm:text-base">
            {description}
          </p>
        )}
      </div>

      {/* Optional Action */}
      {action && (
        <div className="flex shrink-0 sm:justify-end">
          {action}
        </div>
      )}
    </div>
  );
}