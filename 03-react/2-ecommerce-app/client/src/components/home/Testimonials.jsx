import { Star } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { testimonials } from "@/data/home/testimonials";

export default function Testimonials() {
  return (
    <section className="py-10 lg:py-20">
      <Container>
        {/* Section Heading */}
        <SectionHeading
          title="What Our Customers Say"
          description="Real reviews from customers who trust our quality, design, and style."
          align="center"
        />

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col justify-between rounded-xl bg-gray-50 p-6"
            >
              {/* Stars */}
              <div className="mb-5 flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    fill="#FACC15"
                    strokeWidth={0}
                    className="text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mb-7 text-base leading-6 text-gray-700">
                {testimonial.review}
              </p>

              {/* Customer */}
              <div className="flex items-center gap-2">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="size-10 rounded-full object-cover"
                />

                <p className="font-medium text-gray-900">{testimonial.name}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
