import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

import ctaBg from "@/assets/images/cta-bg.webp";

export default function PromotionBanner() {
  return (
    <section className="py-10 lg:py-20">
      <Container>
        <div
          className="rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${ctaBg})`,
          }}
        >
          <div className="mx-auto max-w-md px-5 py-8 text-center lg:py-16">
            <span className="text-xl font-semibold text-white">
              Upgrade Your Tech Game
            </span>

            <h2 className="py-3 text-3xl font-semibold text-white sm:text-5xl">
              Get upto 30% OFF all Products
            </h2>

            <p className="mb-5 text-base text-white sm:mb-10">
              Save up to 30% on selected smart gadgets this week. Visit our sale
              page and buy now.
            </p>

            <Button variant="secondary" href="/shop">
              Shop The Sale
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
