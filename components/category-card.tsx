import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Category } from "@/data/types";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`}>
      <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {category.title}
            <ArrowRight className="h-5 w-5 text-primary" />
          </CardTitle>
          <CardDescription>{category.blurb}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
