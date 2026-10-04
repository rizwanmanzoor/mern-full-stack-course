import { ChevronDown } from "lucide-react";

export default function CustomerInformation({
  formData,
  onChange,
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;

    onChange({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        Fill up this information
      </h2>

      <div className="mt-7 space-y-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Address
          </label>

          <input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
          />
        </div>

        {/* Country + State */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="country"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Country
            </label>

            <div className="relative">
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="h-11 w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 pr-10 text-sm text-gray-900 outline-none transition-colors focus:border-primary"
              >
                <option value="">Select country</option>
                <option value="United States">United States</option>
                <option value="Pakistan">Pakistan</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>

              <ChevronDown
                size={17}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="state"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              State
            </label>

            <div className="relative">
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="h-11 w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 pr-10 text-sm text-gray-900 outline-none transition-colors focus:border-primary"
              >
                <option value="">Select state</option>
                <option value="Wyoming">Wyoming</option>
                <option value="California">California</option>
                <option value="Texas">Texas</option>
                <option value="New York">New York</option>
                <option value="Florida">Florida</option>
              </select>

              <ChevronDown
                size={17}
                strokeWidth={1.5}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
        </div>

        {/* City + Zip */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              City
            </label>

            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="zipCode"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Zip code
            </label>

            <input
              id="zipCode"
              name="zipCode"
              type="text"
              value={formData.zipCode}
              onChange={handleChange}
              placeholder="Enter zip code"
              className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <label
            htmlFor="additionalInformation"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Additional Information
          </label>

          <textarea
            id="additionalInformation"
            name="additionalInformation"
            value={formData.additionalInformation}
            onChange={handleChange}
            rows={5}
            placeholder="Enter your message here..."
            className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm leading-6 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
          />
        </div>

        {/* Billing Address */}
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-500">
          <input
            type="checkbox"
            name="sameAsBilling"
            checked={formData.sameAsBilling}
            onChange={(event) =>
              onChange({
                ...formData,
                sameAsBilling: event.target.checked,
              })
            }
            className="size-4 rounded border-gray-300 accent-primary"
          />

          <span>Use shipping address as billing address</span>
        </label>
      </div>
    </div>
  );
}