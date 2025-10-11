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
      {/* Hero Section - Bento Grid Layout */}
      <section className="breathing-room bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
            {/* Left Column - Main Title */}
            <div className="md:col-span-7 space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  AI-Powered Curation
                </span>
              </div>
              <h1 className="text-display text-foreground max-w-3xl">
                Amazon Picks
                <span className="block text-primary">Curated Instantly.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Share your budget and recipient. We&apos;ll surface perfect finds—no endless scrolling.
              </p>
              <div className="pt-4">
                <Link href="/find">
                  <Button size="lg" className="text-lg px-8 h-14">
                    Find My Pick
                    <Sparkles className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Value Proposition Cards */}
            <div className="md:col-span-5 space-y-4">
              <div className="bg-card rounded-2xl p-6 border shadow-subtle">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Smart Matching</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  AI analyzes thousands of products to find your perfect match
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border shadow-subtle">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Instant Results</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get personalized recommendations in seconds, not hours
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 border shadow-subtle">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <ShieldCheck className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Quality Guaranteed</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Only top-rated products with real value and reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="breathing-room-sm bg-card/40">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Shop by Interest
            </span>
            <h2 className="text-heading mt-4 mb-4">
              Popular Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections across different interests and price ranges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="breathing-room-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Editor&apos;s Choice
            </span>
            <h2 className="text-heading mt-4 mb-4">
              Trending Picks
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most popular recommendations right now
            </p>
          </div>

          {/* Disclosure Banner */}
          <div className="mb-8 p-4 bg-card/50 border border-border/50 rounded-xl max-w-3xl mx-auto">
            <p className="text-sm text-center text-muted-foreground">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/find">
              <Button size="lg" variant="outline">
                Find More Picks
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="breathing-room-sm bg-card/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Questions
            </span>
            <h2 className="text-heading mt-4 mb-4">
              Frequently Asked
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50">
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
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
