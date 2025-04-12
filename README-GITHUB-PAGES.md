# GitHub Pages Deployment

This document provides instructions for deploying this portfolio website to GitHub Pages.

## Prerequisites

1. Push your code to a GitHub repository
2. Enable GitHub Pages in your repository settings

## Automatic Deployment

This project uses GitHub Actions for automatic deployment. When you push to the `main` branch, the site will automatically be built and deployed to GitHub Pages.

## Workflow Details

The deployment workflow:
1. Checks out the code
2. Sets up Node.js
3. Installs dependencies
4. Builds the Next.js application
5. Deploys the built output to GitHub Pages

## Manual Setup (if needed)

If you need to set up GitHub Pages manually:

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions"
4. GitHub will use the workflow file at `.github/workflows/deploy.yml`

## Local Testing

To test the GitHub Pages build locally:

```bash
npm run deploy
```

This will generate the static files in the `out` directory, which is what will be deployed to GitHub Pages.

## Troubleshooting

If you encounter issues with images or paths:
- Check that `next.config.js` has the correct `basePath` configuration
- Ensure images are using relative paths or the `next/image` component
- Make sure the `.nojekyll` file exists in the `out` directory (created by the deploy script)

## Performance Monitoring

This site uses [Vercel Speed Insights](https://vercel.com/docs/speed-insights) to monitor and analyze performance metrics. Speed Insights automatically collects Web Vitals and other performance data from real users, providing:

- Core Web Vitals monitoring (LCP, FID, CLS)
- Real user performance data
- Page-by-page analysis
- No impact on site performance

The SpeedInsights component is added in the root layout file:

```tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

// In your RootLayout component:
return (
  <html>
    <body>
      {children}
      <SpeedInsights />
    </body>
  </html>
);
```

Note that this feature will work best when deployed to Vercel, but it also provides performance insights when deployed on GitHub Pages. 