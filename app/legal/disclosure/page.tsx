import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Affiliate Disclosure - Nutika",
  description: "Information about our affiliate relationships",
};

export default function DisclosurePage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Affiliate Disclosure</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Amazon Associates Program</h2>
            <p className="mb-4">
              Nutika is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking
              to Amazon.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="mb-4">
              When you click on a product link on Nutika and make a purchase on Amazon, we may earn a small
              commission at no additional cost to you. This helps support our service and allows us to continue
              providing free product recommendations.
            </p>
            <p className="mb-4">
              The price you pay for products is exactly the same whether you use our links or not. Amazon handles
              all aspects of the transaction, including customer service and returns.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="mb-4">
              We only recommend products that we believe offer genuine value. Our editorial decisions are never
              influenced by potential commissions. We curate products based on:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Customer ratings and reviews</li>
              <li>Product quality and features</li>
              <li>Value for money</li>
              <li>Real-world usefulness</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Price Accuracy</h2>
            <p className="mb-4">
              We display price ranges ($ = under $50, $$ = $50-150, $$$ = $150+) as a guide only. Actual prices
              on Amazon may vary and are subject to change. Always verify the current price and product details
              on Amazon before making a purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
            <p className="mb-4">
              If you have questions about our affiliate relationships or how we select products, please feel
              free to contact us.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
