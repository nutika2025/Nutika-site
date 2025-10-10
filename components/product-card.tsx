import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <div className="relative h-48 bg-muted">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex gap-2 mb-2">
          <Badge variant="secondary">{product.priceRange}</Badge>
          {product.rating && (
            <Badge variant="outline">⭐ {product.rating}</Badge>
          )}
        </div>
        <CardTitle className="text-lg mb-1">{product.title}</CardTitle>
        {product.subtitle && (
          <p className="text-sm text-muted-foreground mb-2">{product.subtitle}</p>
        )}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.blurb}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={product.url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full" variant="default">
            View on Amazon
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
