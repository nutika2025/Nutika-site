import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Category } from "@/data/types";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.slug}`} className="group">
      <Card className="border border-border/50 hover:border-border/80 transition-all duration-300 cursor-pointer h-full bg-card/50 hover:bg-card group">
        <CardContent className="p-8 h-full flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-normal mb-3 group-hover:text-primary transition-colors">
              {category.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {category.blurb}
            </p>
          </div>
          <div className="flex items-center justify-between mt-6">
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Explore collection
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
