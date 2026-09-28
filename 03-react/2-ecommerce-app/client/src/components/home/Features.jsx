import Container from "@/components/layout/Container";
import { features } from "@/data/home/features";

export default function Features() {
  return (
    <section className="py-10 lg:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-gray-200">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="flex flex-col items-center px-5 text-center xl:px-10"
              >
                <Icon
                  size={32}
                  strokeWidth={1.8}
                  className="mb-9 text-gray-900"
                />

                <h3 className="mb-2 text-xl font-medium text-gray-700">
                  {feature.title}
                </h3>

                <p className="text-base text-gray-600">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
