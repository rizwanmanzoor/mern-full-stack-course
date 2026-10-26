import { features } from "@/data/Features";

export default function FeaturesSection() {
  return (
    <section className="px-4 md:px-8 mt-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
            Work Easier Today
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Unlock a world of possibilities with our exclusive features. Explore
            how our unique offerings can transform your journey and empower you
            to achieve more.
          </p>
        </div>

        <div className="grid gap-6 max-w-lg lg:grid-cols-3 md:grid-cols-2 md:gap-8 md:max-w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-slate-300 shadow-xs rounded-lg p-6"
            >
              <div className="flex items-center w-10 h-10 rounded-lg p-2.5 bg-gray-100 mb-6">
                <feature.icon className="w-full h-full text-slate-900" />
              </div>
              <div className="mb-4">
                <h3 className="text-slate-900 text-lg font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
