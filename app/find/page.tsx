"use client";

import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";
import { Product, PriceRange } from "@/data/types";

export default function FindPage() {
  const [recipient, setRecipient] = useState<string>("");
  const [budget, setBudget] = useState<PriceRange | "">("");
  const [interest, setInterest] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("nutika-finder");
      if (saved) {
        try {
          const { recipient: r, budget: b, interest: i } = JSON.parse(saved);
          if (r) setRecipient(r);
          if (b) setBudget(b);
          if (i) setInterest(i);
        } catch (e) {
          // Ignore parsing errors
        }
      }
    }
  }, []);

  // Save to localStorage when values change
  useEffect(() => {
    if (typeof window !== "undefined" && (recipient || budget || interest)) {
      localStorage.setItem(
        "nutika-finder",
        JSON.stringify({ recipient, budget, interest })
      );
    }
  }, [recipient, budget, interest]);

  const handleFind = () => {
    let results = [...products];

    // Filter by budget
    if (budget) {
      results = results.filter((p) => p.priceRange === budget);
    }

    // Filter by category/interest
    if (interest) {
      results = results.filter(
        (p) => p.categories.includes(interest) || p.tags.includes(interest)
      );
    }

    // Sort by rating
    results.sort((a, b) => (b.rating || 0) - (a.rating || 0));

    setFilteredProducts(results.slice(0, 6));
    setHasSearched(true);
  };

  const handleReset = () => {
    setRecipient("");
    setBudget("");
    setInterest("");
    setFilteredProducts([]);
    setHasSearched(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem("nutika-finder");
    }
  };

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Pick
          </h1>
          <p className="text-xl text-muted-foreground">
            Answer a few questions and get personalized recommendations
          </p>
        </div>

        {/* Finder Form */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Tell us what you&apos;re looking for</CardTitle>
            <CardDescription>
              We&apos;ll match you with products that fit your needs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Recipient */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Who is this for?
              </label>
              <Select value={recipient} onValueChange={setRecipient}>
                <SelectTrigger>
                  <SelectValue placeholder="Select recipient" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="self">Myself</SelectItem>
                  <SelectItem value="partner">Partner</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="family">Family Member</SelectItem>
                  <SelectItem value="coworker">Coworker</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium mb-2">
                What&apos;s your budget?
              </label>
              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant={budget === "$" ? "default" : "outline"}
                  onClick={() => setBudget("$")}
                  className="h-auto py-4 flex flex-col gap-1"
                >
                  <span className="font-bold text-lg">$</span>
                  <span className="text-xs">Under $50</span>
                </Button>
                <Button
                  variant={budget === "$$" ? "default" : "outline"}
                  onClick={() => setBudget("$$")}
                  className="h-auto py-4 flex flex-col gap-1"
                >
                  <span className="font-bold text-lg">$$</span>
                  <span className="text-xs">$50-$150</span>
                </Button>
                <Button
                  variant={budget === "$$$" ? "default" : "outline"}
                  onClick={() => setBudget("$$$")}
                  className="h-auto py-4 flex flex-col gap-1"
                >
                  <span className="font-bold text-lg">$$$</span>
                  <span className="text-xs">$150+</span>
                </Button>
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-sm font-medium mb-2">
                What are they interested in?
              </label>
              <Select value={interest} onValueChange={setInterest}>
                <SelectTrigger>
                  <SelectValue placeholder="Select interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="smart-home">Smart Home</SelectItem>
                  <SelectItem value="tech-gadgets">Tech Gadgets</SelectItem>
                  <SelectItem value="kitchen">Kitchen & Cooking</SelectItem>
                  <SelectItem value="wellness">Health & Wellness</SelectItem>
                  <SelectItem value="outdoor">Outdoor & Adventure</SelectItem>
                  <SelectItem value="gift">Gifts</SelectItem>
                  <SelectItem value="travel">Travel</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleFind}
                size="lg"
                className="flex-1"
                disabled={!budget && !interest}
              >
                Find Picks
                <Sparkles className="ml-2 h-5 w-5" />
              </Button>
              {hasSearched && (
                <Button onClick={handleReset} size="lg" variant="outline">
                  Reset
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {hasSearched && (
          <div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">
                {filteredProducts.length > 0
                  ? `We found ${filteredProducts.length} ${
                      filteredProducts.length === 1 ? "pick" : "picks"
                    } for you`
                  : "No matches found"}
              </h2>
              {filteredProducts.length === 0 && (
                <p className="text-muted-foreground">
                  Try adjusting your filters to see more results
                </p>
              )}
            </div>

            {filteredProducts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {!hasSearched && (
          <div className="text-center py-12 bg-muted/40 rounded-lg">
            <Sparkles className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Fill out the form above to get started
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
