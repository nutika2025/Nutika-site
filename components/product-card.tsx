import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-subtle hover:shadow-subtle-hover transition-all duration-300 bg-card/50 group">
      <CardHeader className="p-0">
        <Link href={product.url} target="_blank" rel="noopener noreferrer">
          <div className="relative h-56 bg-background cursor-pointer group-hover:opacity-95 transition-opacity">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-6"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-medium text-muted-foreground">
            {product.priceRange}
          </span>
          {product.rating && (
            <span className="text-sm text-muted-foreground">
              ⭐ {product.rating}
            </span>
          )}
        </div>
        <CardTitle className="text-lg mb-2 font-normal leading-tight group-hover:text-primary transition-colors">
          {product.title}
        </CardTitle>
        {product.subtitle && (
          <p className="text-sm text-muted-foreground mb-3">{product.subtitle}</p>
        )}
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {product.blurb}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <Link href={product.url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full h-11" variant="outline">
            View on Amazon
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <p className="text-xs text-center text-muted-foreground">
          Commissions earned
        </p>
      </CardFooter>
    </Card>
  );
}
