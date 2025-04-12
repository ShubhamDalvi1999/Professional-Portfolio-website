# Skills Grid Installation Guide

## Overview

The Skills Grid component provides an interactive, animated grid layout for showcasing your technical skills by category. This guide will help you properly install and set up the component.

## Required Dependencies

The Skills Grid component requires the following dependencies:

```bash
npm install clsx tailwind-merge framer-motion
```

If you encounter any execution policy issues in PowerShell, run as administrator and use:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Fix Common Issues

If you're unable to see the skills grid in the UI, check the following:

### 1. Import Path

The `cn` utility function import might be incorrect. Make sure it's using the relative path:

```tsx
// In layout-grid.tsx
import { cn } from "../../../lib/utils";
```

### 2. Height Issues

Add explicit height to both the grid containers and the cards:

```tsx
// In skills-grid.tsx
className: "md:col-span-2 min-h-[250px]"
```

```tsx
// In SkillsGrid component
<div className="h-full min-h-[800px] w-full py-6">
```

### 3. Background Colors

Make sure the cards use a proper background color that works with your theme:

```tsx
// In layout-grid.tsx
? "z-40 bg-background/30 rounded-xl h-full w-full"
: "bg-background/30 rounded-xl h-full w-full"
```

### 4. Image Paths

Confirm that your image paths are correct:

```tsx
// Example
thumbnail: "/images/skills/databricks.png"
```

## Testing the Component

To test if the component works correctly:

1. Create a test route like `app/skills-demo/page.tsx` with:

```tsx
import { SkillsGridDemo } from "../../components/ui/skills-grid-demo";

export default function SkillsDemoPage() {
  return <SkillsGridDemo />;
}
```

2. Navigate to `/skills-demo` in your browser

## How to Customize

You can customize the component by:

1. Adding more skill categories
2. Changing the images used for each card
3. Adjusting card sizing and layout
4. Modifying the content displayed when a card is selected

## Troubleshooting

If you still see issues:

1. Check browser console for errors
2. Verify all imports are resolving correctly
3. Make sure framer-motion is properly installed
4. Test the demo component separately
5. Check that your Tailwind configuration includes all necessary classes 