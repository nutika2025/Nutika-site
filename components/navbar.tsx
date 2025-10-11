import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 floating-nav border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-normal text-xl hover:text-primary transition-colors">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="tracking-tight">Nutika</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/find" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Find Picks
          </Link>
          <Link href="/category/smart-home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Browse
          </Link>
        </div>

        <Link href="/find">
          <Button size="sm" className="h-9">
            Find My Pick
          </Button>
        </Link>
      </div>
    </nav>
  );
}
