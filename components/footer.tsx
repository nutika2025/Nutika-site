import Link from "next/link";
import { Sparkles, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-normal text-xl hover:text-primary transition-colors">
              <Sparkles className="h-5 w-5 text-primary" />
              <span className="tracking-tight">Nutika</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              AI-curated Amazon picks, instantly. Share your budget and recipient—we&apos;ll surface perfect finds.
            </p>
            <p className="text-xs text-muted-foreground">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
              Navigate
            </h3>
            <div className="space-y-3">
              <Link href="/find" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Find Picks
              </Link>
              <Link href="/category/smart-home" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Browse Categories
              </Link>
              <Link href="/legal/disclosure" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Affiliate Disclosure
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-6">
              Connect
            </h3>
            <div className="space-y-3">
              <a href="mailto:support@nutika.ca" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4" />
                support@nutika.ca
              </a>
              <p className="text-sm text-muted-foreground">
                Edmonton, Canada
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nutika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
