import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Sparkles className="h-6 w-6 text-primary" />
          Nutika
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/find" className="text-sm font-medium hover:text-primary transition-colors">
            Find Picks
          </Link>
          <Link href="/category/smart-home" className="text-sm font-medium hover:text-primary transition-colors">
            Categories
          </Link>
        </div>

        <Link href="/find">
          <Button>Find My Pick</Button>
        </Link>
      </div>
    </nav>
  );
}
