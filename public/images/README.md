# Image Organization Guide

This directory contains all images used in the Bay Area Fencing Club website.

## Directory Structure

```
public/images/
├── hero/          # Hero section images (banners, main visuals)
├── about/         # About section images
├── values/        # Values section images
├── locations/     # Location/facility images
├── programs/      # Program and training images
├── team/          # Team member photos
└── general/       # General images used across multiple sections
```

## Image Guidelines

### File Formats
- **WebP** (preferred) - Best compression and quality
- **PNG** - For images requiring transparency
- **JPG/JPEG** - For photographs without transparency needs
- **SVG** - For icons and simple graphics

### File Naming
- Use descriptive, lowercase names with hyphens
- Examples: `fencing-tournament.jpg`, `coach-training.webp`
- Avoid spaces and special characters

### Image Sizes
- **Hero images**: 1920x1080px or 1440x900px
- **Section images**: 800x600px or 1200x800px
- **Thumbnails**: 400x300px
- **Icons**: 64x64px or 128x128px

### Optimization
- Compress images before adding to project
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Keep file sizes under 500KB for most images

## Usage in Next.js

### Import and Use
```tsx
import Image from 'next/image'

// In your component
<Image
  src="/images/hero/fencing-banner.webp"
  alt="Fencing tournament banner"
  width={1920}
  height={1080}
  priority={true} // For above-the-fold images
  className="w-full h-auto"
/>
```

### Responsive Images
```tsx
<Image
  src="/images/about/coach-portrait.webp"
  alt="Fencing coach"
  width={400}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="rounded-lg shadow-lg"
/>
```

## Adding New Images

1. **Download** your image from Google Drive
2. **Optimize** it using an image compression tool
3. **Place** it in the appropriate subdirectory
4. **Update** this README if adding new categories
5. **Use** the Next.js Image component in your components

## Benefits of This Structure

- ✅ **Performance**: Next.js automatic optimization
- ✅ **SEO**: Better search engine indexing
- ✅ **Reliability**: No broken external links
- ✅ **Caching**: Browser and CDN caching
- ✅ **Maintenance**: Easy to manage and update
