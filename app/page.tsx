import Link from "next/link";
import { Sparkles, Zap, Target, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { faqs } from "@/data/faqs";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            AI-Curated Amazon Picks, Instantly.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tell us your budget and who it&apos;s for. We&apos;ll surface great finds—no scrolling marathon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/find">
              <Button size="lg" className="text-lg px-8">
                Find My Pick
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/category/smart-home">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tell Us What You Need</h3>
              <p className="text-muted-foreground">
                Share your budget, who it&apos;s for, and their interests.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Instant Matches</h3>
              <p className="text-muted-foreground">
                Our algorithm surfaces products that fit your criteria perfectly.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-4 rounded-full">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Shop with Confidence</h3>
              <p className="text-muted-foreground">
                All picks are curated based on ratings, reviews, and real value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Trending Picks
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our most popular recommendations right now
          </p>

          {/* Disclosure Banner */}
          <div className="mb-8 p-4 bg-background/80 border border-border rounded-lg max-w-3xl mx-auto">
            <p className="text-sm text-center text-muted-foreground">
              <strong>Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
              Product links below include affiliate tags.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/find">
              <Button size="lg">
                Find More Picks
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Pick?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Answer a few quick questions and get personalized Amazon recommendations in seconds.
          </p>
          <Link href="/find">
            <Button size="lg" className="text-lg px-8">
              Get Started
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
