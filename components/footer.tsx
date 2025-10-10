import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-3">
              <Sparkles className="h-6 w-6 text-primary" />
              Nutika
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              AI-curated Amazon picks, instantly. Tell us your budget and who it&apos;s for—we&apos;ll surface great finds, no scrolling marathon.
            </p>
            <p className="text-xs text-muted-foreground">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/find" className="text-muted-foreground hover:text-foreground transition-colors">
                  Find Picks
                </Link>
              </li>
              <li>
                <Link href="/category/smart-home" className="text-muted-foreground hover:text-foreground transition-colors">
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/legal/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/disclosure" className="text-muted-foreground hover:text-foreground transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nutika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
