export default function PriceRange({
  min = 0,
  max = 2000,
  minValue = 0,
  maxValue = 2000,
  onChange,
}) {
  const handleMinChange = (event) => {
    const value = Number(event.target.value);

    if (value < min || value > maxValue) {
      return;
    }

    onChange?.({
      min: value,
      max: maxValue,
    });
  };

  const handleMaxChange = (event) => {
    const value = Number(event.target.value);

    if (value > max || value < minValue) {
      return;
    }

    onChange?.({
      min: minValue,
      max: value,
    });
  };

  const minPercentage =
    ((minValue - min) / (max - min)) * 100;

  const maxPercentage =
    ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="space-y-5">
      {/* Range Slider */}
      <div className="relative pt-2">
        <div className="h-1 rounded-full bg-gray-200">
          <div
            className="absolute h-1 rounded-full bg-violet-500"
            style={{
              left: `${minPercentage}%`,
              width: `${maxPercentage - minPercentage}%`,
            }}
          />
        </div>

        {/* Min Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(event) => {
            const value = Number(event.target.value);

            if (value <= maxValue) {
              onChange?.({
                min: value,
                max: maxValue,
              });
            }
          }}
          className="pointer-events-none absolute inset-x-0 top-0 h-5 w-full appearance-none bg-transparent
          [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border
          [&::-webkit-slider-thumb]:border-violet-500
          [&::-webkit-slider-thumb]:bg-white"
        />

        {/* Max Slider */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(event) => {
            const value = Number(event.target.value);

            if (value >= minValue) {
              onChange?.({
                min: minValue,
                max: value,
              });
            }
          }}
          className="pointer-events-none absolute inset-x-0 top-0 h-5 w-full appearance-none bg-transparent
          [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border
          [&::-webkit-slider-thumb]:border-violet-500
          [&::-webkit-slider-thumb]:bg-white"
        />
      </div>

      {/* Manual Price Inputs */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 rounded-lg border border-gray-200 px-3 py-2">
          <label className="block text-xs text-gray-400">
            Min
          </label>

          <div className="flex items-center">
            <span className="mr-1 text-sm text-gray-500">
              $
            </span>

            <input
              type="number"
              min={min}
              max={maxValue}
              value={minValue}
              onChange={handleMinChange}
              className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
            />
          </div>
        </div>

        <span className="text-gray-400">—</span>

        <div className="flex-1 rounded-lg border border-gray-200 px-3 py-2">
          <label className="block text-xs text-gray-400">
            Max
          </label>

          <div className="flex items-center">
            <span className="mr-1 text-sm text-gray-500">
              $
            </span>

            <input
              type="number"
              min={minValue}
              max={max}
              value={maxValue}
              onChange={handleMaxChange}
              className="w-full bg-transparent text-sm font-medium text-gray-800 outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}