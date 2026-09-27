export default function SectionHeading({ title, description, action }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:items-end justify-between mb-16">
      <div className="text-left lg:max-w-lg">
        <h2 className="mb-2 text-5xl font-medium text-gray-800 tracking-[1.92px]">
          {title}
        </h2>
        {description && (
          <p className="text-base text-gray-500">{description}</p>
        )}
      </div>

      <div className="flex sm:justify-end">{action}</div>
    </div>
  );
}
