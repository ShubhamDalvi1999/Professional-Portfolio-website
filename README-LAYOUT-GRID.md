# Layout Grid Component for Skills Section

This documentation covers the integration of the new interactive Layout Grid component for displaying skills in the portfolio.

## Required Dependencies

The LayoutGrid component requires the following dependencies:

```bash
npm install clsx tailwind-merge framer-motion
```

If you encounter execution policy issues in PowerShell, you can run PowerShell as administrator and set the execution policy with:

```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## Component Structure

1. **LayoutGrid Component** (`app/components/ui/layout-grid.tsx`)
   - The main interactive grid component
   - Handles card selection and animation
   - Uses framer-motion for animations

2. **SkillsGrid Component** (`app/components/ui/skills-grid.tsx`)
   - Uses the LayoutGrid component
   - Contains specific skill category content
   - Defines the cards with skills categories and appropriate images

3. **Utilities** (`lib/utils.ts`)
   - Contains the `cn` utility function for merging Tailwind classes
   - Uses clsx and tailwind-merge

## Usage in Skills Component

The Skills component (`app/components/Skills.tsx`) now uses the SkillsGrid component instead of static grid layouts.

## How It Works

1. The grid displays skills by category
2. Clicking a skill card enlarges it and shows detailed description
3. Clicking outside the card returns to the grid view
4. Animations provide a smooth, interactive experience

## Customization

To customize the content or appearance:

1. Edit the content components in `skills-grid.tsx`
2. Modify the card properties (images, layout classes)
3. Adjust animations in `layout-grid.tsx`

## Images

All images are sourced from the `/public/images/skills` directory, preferring SVG format where available for better scaling and quality. 