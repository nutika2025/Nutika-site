import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service - Nutika",
  description: "Terms and conditions for using Nutika",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using Nutika, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
            <p className="mb-4">
              Nutika provides product recommendations and links to Amazon.com. We curate products based on
              various criteria, but we do not sell products directly. All purchases are made through Amazon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">No Warranty</h2>
            <p className="mb-4">
              Product recommendations are provided &quot;as is&quot; without warranty of any kind. We do not guarantee
              the accuracy, completeness, or reliability of any product information, prices, or availability.
            </p>
            <p className="mb-4">
              Prices and availability shown are symbolic ranges and may not reflect current Amazon prices.
              Always verify current prices and details on Amazon before making a purchase.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Affiliate Disclosure</h2>
            <p className="mb-4">
              Nutika is a participant in the Amazon Associates Program. We earn commissions from qualifying
              purchases made through our links at no additional cost to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              Nutika shall not be liable for any damages arising from your use of our service or purchase of
              products through our affiliate links. Your use of Amazon.com is governed by Amazon&apos;s terms and policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Continued use of Nutika after changes
              constitutes acceptance of the modified terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
