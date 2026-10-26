import { useState } from "react";

import { faqData } from "@/data/Faqs";
import FAQItem from "@/components/ui/FAQItem";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mt-12 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-slate-900 text-3xl font-bold mb-6 md:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="divide-y divide-slate-300">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
