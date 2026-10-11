# Truck Agents Website

Next.js (App Router), TypeScript and Tailwind CSS v4. Static export.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # builds the static site into /out
```

## Change the placeholders (one file)

Phone, WhatsApp number, email and domain all live in `lib/site.ts`. Change them there and every button, link, schema block and the job card updates.
Also update the domain in `public/robots.txt` and `public/llms.txt` when the real details arrive.

## Where things are

| What | Where |
| --- | --- |
| Services (copy, SEO titles, FAQs) | `lib/services.ts` |
| Areas and job card problem list | `lib/areas.ts` |
| Colours and animations | `app/globals.css` |
| Logo component | `components/logo.tsx` |
| WhatsApp job card | `components/job-card.tsx` |
| Moving images with the TA stamp | `components/moving-image.tsx` |
| Hero photo columns | `components/hero-convoy.tsx` |
| Google Ads tracking | `lib/analytics.ts` |

Add a service or area by adding one entry to the matching file. The page, menu, footer, sitemap and schema are generated from it.
