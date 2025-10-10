# Nutika - AI-Curated Amazon Picks

A clean, static Next.js site for curating and displaying Amazon affiliate product recommendations.

## Features

- 🚀 **Static Export** - Fully static HTML/CSS/JS, deployable anywhere
- 🎨 **Modern UI** - Built with Next.js 15, Tailwind CSS, and shadcn/ui
- 🔍 **Product Finder** - Client-side filtering with localStorage persistence
- 📱 **Responsive** - Mobile-first design
- 🎯 **SEO Optimized** - Sitemap, robots.txt, and proper metadata
- ⚡ **Fast** - No server required, instant page loads

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Export**: Static HTML (output: 'export')

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── find/              # Product finder
│   ├── category/[slug]/   # Dynamic category pages
│   ├── legal/             # Legal pages
│   ├── robots.ts          # SEO robots.txt
│   └── sitemap.ts         # SEO sitemap
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation
│   ├── footer.tsx        # Footer
│   ├── product-card.tsx  # Product display
│   └── category-card.tsx # Category display
├── data/                  # Static data files
│   ├── products.ts       # Product catalog
│   ├── categories.ts     # Categories
│   ├── faqs.ts          # FAQ content
│   └── types.ts         # TypeScript types
├── public/               # Static assets
│   └── products/        # Product images
└── out/                 # Build output (static files)
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Build for Production

```bash
npm run build
```

This generates a static export in the `out/` directory.

### Deploy

The `out/` directory contains all static files. Deploy to:

**Vercel** (recommended)
```bash
# Deploy the out/ directory
vercel --prod
```

**Netlify**
1. Drag and drop the `out/` folder to Netlify
2. Or connect your Git repo and set build command to `npm run build`

**Cloudflare Pages**
1. Connect your Git repo
2. Set build command: `npm run build`
3. Set publish directory: `out`

**Amazon S3 + CloudFront**
```bash
aws s3 sync out/ s3://your-bucket-name
```

## Customization

### Adding Products

Edit `data/products.ts`:

```typescript
{
  id: 'product-id',
  title: 'Product Name',
  subtitle: 'Optional subtitle',
  blurb: 'Short description',
  image: '/products/image.jpg',
  url: 'https://amazon.com/dp/XXXXX?tag=yourtag',
  priceRange: '$',  // '$', '$$', or '$$$'
  rating: 4.5,
  categories: ['category-slug'],
  tags: ['tag1', 'tag2'],
}
```

### Adding Categories

Edit `data/categories.ts`:

```typescript
{
  slug: 'category-slug',
  title: 'Category Name',
  blurb: 'Category description',
}
```

### Updating Your Affiliate Tag

Replace `?tag=yourtag` in product URLs with your Amazon Associates tag.

### Changing Colors

Edit `app/globals.css` to customize the color scheme:

```css
--primary: 262 83% 58%;  /* Purple */
```

## Content Management

### Product Images

- Add images to `public/products/`
- Use optimized JPG or PNG format
- Recommended size: 400x400px or larger

### Updating Legal Pages

Edit files in `app/legal/`:
- `privacy/page.tsx` - Privacy policy
- `terms/page.tsx` - Terms of service
- `disclosure/page.tsx` - Affiliate disclosure

## Performance

- All pages are pre-rendered at build time
- No runtime JavaScript for static content
- Client-side interactivity only on the /find page
- Images are unoptimized (static export compatible)

## SEO

The site includes:
- Semantic HTML
- Meta tags on all pages
- Sitemap.xml
- Robots.txt
- Proper heading hierarchy

## License

MIT License - feel free to use for your own affiliate site!

## Affiliate Disclosure

This is an Amazon Associates affiliate site template. Make sure to comply with Amazon's Operating Agreement and FTC guidelines when using affiliate links.
