import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - Nutika",
  description: "Our privacy policy and how we handle your data",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              Nutika is a static website that does not collect or store personal information on our servers.
              However, we use your browser&apos;s local storage to save your finder preferences for convenience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Local Storage</h2>
            <p className="mb-4">
              When you use our product finder, we save your selections (budget, recipient, interests) in your
              browser&apos;s local storage. This data never leaves your device and can be cleared at any time by
              clicking the &quot;Reset&quot; button or clearing your browser data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="mb-4">
              When you click on product links, you&apos;ll be directed to Amazon.com. Amazon has its own privacy
              policy that governs how they handle your information during and after your visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="mb-4">
              We do not use cookies on our website. Amazon may set cookies when you visit their site through
              our affiliate links.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="mb-4">
              If you have questions about this privacy policy, please contact us through our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
