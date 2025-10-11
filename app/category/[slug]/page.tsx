import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.title} - Nutika`,
    description: category.blurb,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((p) =>
    p.categories.includes(slug)
  );

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {category.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {category.blurb}
          </p>
        </div>

        {/* Disclosure Banner */}
        {categoryProducts.length > 0 && (
          <div className="mb-8 p-4 bg-muted/60 border border-border rounded-lg">
            <p className="text-sm text-center text-muted-foreground">
              <strong>Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases.
              Product links below include affiliate tags.
            </p>
          </div>
        )}

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/40 rounded-lg">
            <p className="text-muted-foreground">
              No products found in this category yet.
            </p>
            <Link href="/find" className="mt-4 inline-block">
              <Button>Find Similar Products</Button>
            </Link>
          </div>
        )}

        {/* Other Categories */}
        <div className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold mb-6">Explore Other Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link key={c.slug} href={`/category/${c.slug}`}>
                  <Button variant="outline">{c.title}</Button>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </main>
  );
}
