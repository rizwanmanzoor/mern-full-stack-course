export default function Button({
  children,
  type,
  onClick,
  className,
  variant = "primary",
}) {
  const variants = {
    primary:
      "text-white border-blue-600 bg-blue-600 hover:bg-blue-700 focus-visible:ring-blue-500",
    secondary:
      "text-slate-900 bg-white border-slate-300 hover:bg-gray-50 focus-visible:ring-blue-500",
  };

  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={` cursor-pointer py-2.5 px-4 text-sm rounded-md font-semibold  border  transition-all focus:outline-none focus-visible:ring-2 ${className} ${variants[variant]} `}
    >
      {children}
    </button>
  );
}
