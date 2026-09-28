import { useState } from "react";
import { Minus, Plus } from "lucide-react";

import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";

import { faqs } from "@/data/home/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="py-10 lg:py-20">
      <Container>
        <div className="mx-auto max-w-xl">
          <SectionHeading
            title="Frequently asked questions"
            description="Everything you need to know before placing your order."
            align="center"
          />

          <div className="divide-y divide-gray-200 border-b border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="py-6">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      {faq.question}
                    </h3>

                    {isOpen ? (
                      <Minus
                        size={24}
                        strokeWidth={1.5}
                        className="shrink-0 text-gray-700"
                      />
                    ) : (
                      <Plus
                        size={24}
                        strokeWidth={1.5}
                        className="shrink-0 text-gray-700"
                      />
                    )}
                  </button>

                  {isOpen && (
                    <p className="mt-4 pr-8 text-md leading-6 text-gray-500">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
