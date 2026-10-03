import { useRef, useState } from "react";

export default function ProductGallery({ product }) {
  const [activeImage, setActiveImage] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const images = product?.images ?? [];

  if (!images.length) {
    return (
      <div className="aspect-square rounded-xl bg-gray-50" />
    );
  }

  const goToNextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const goToPreviousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchEndX.current === null
    ) {
      return;
    }

    const distance =
      touchStartX.current - touchEndX.current;

    const minimumSwipeDistance = 40;

    if (Math.abs(distance) < minimumSwipeDistance) {
      touchStartX.current = null;
      touchEndX.current = null;
      return;
    }

    if (distance > 0) {
      goToNextImage();
    } else {
      goToPreviousImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <div>
      {/* Main Image */}
      <div
        className="flex aspect-square touch-pan-y items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-6 sm:p-10"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          key={activeImage}
          src={images[activeImage]}
          alt={product.name}
          draggable="false"
          className="h-full w-full select-none object-contain animate-[productImageFade_300ms_ease-out]"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="mt-3 -mx-1 overflow-x-auto px-1 py-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 sm:grid sm:grid-cols-4 sm:gap-3">
            {images.map((image, index) => {
              const isActive = activeImage === index;

              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                  className={`flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-50 p-2 transition sm:size-auto sm:aspect-square ${
                    isActive
                      ? "ring-2 ring-primary ring-offset-2"
                      : "ring-1 ring-gray-100 hover:ring-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    draggable="false"
                    className="h-full w-full select-none object-contain"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes productImageFade {
            from {
              opacity: 0;
              transform: scale(0.98);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
}