export const CheckmarkIcon = () => (
   <svg
      className="size-3 text-white"
      viewBox="0 0 12 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
   >
      <path d="M1 5l3 3 7-7" />
   </svg>
);

export const StarIcon = ({ filled, className = "size-3.5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${filled ? 'fill-[#ffc107]' : 'fill-slate-300 '}`}
    viewBox="0 0 24 24"
    aria-hidden="true"
    focusable="false"
  >
    <path d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" />
  </svg>
);