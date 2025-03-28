# Auto-Scrolling Carousel Setup Instructions

## Issue Diagnosis
The Skills carousel doesn't auto-scroll because:
1. Missing required npm dependencies
2. Incomplete shadcn/ui component structure
3. PowerShell script execution policy preventing npm installs

## Step 1: Install Dependencies
Run Command Prompt (NOT PowerShell) as Administrator:
```cmd
cd E:\Professional Portfolio Website
npm install embla-carousel-react embla-carousel-auto-scroll clsx tailwind-merge class-variance-authority @radix-ui/react-slot lucide-react
```

## Step 2: Create Proper Component Structure
The application requires a proper shadcn/ui component structure:

1. Component Organization:
   - `/components/ui` - Basic UI components (carousel, button, etc.)
   - `/components` - Higher-level components (Skills, Hero, etc.)
   - `/lib` - Utility functions (like the `cn` function)

2. Key Files:
   - `lib/utils.ts` - Provides the `cn` utility function
   - `components/ui/button.tsx` - Button component used by carousel
   - `components/ui/carousel.tsx` - Core carousel functionality
   - `components/ui/logos3.tsx` - The customized carousel for skills
   - `components/skill-data.ts` - Data for the logos

## Step 3: Implement Proper Component Usage
In Skills.tsx:
```tsx
import { Logos3 } from './ui/logos3';

// Then use it with categories
<Logos3 
  heading="Data Engineering" 
  subheading="Building robust and scalable data pipelines"
  category="Data Engineering"
/>
```

## Step 4: Troubleshooting
If you encounter errors:

1. **PowerShell Security Error**:
   ```
   npm : File cannot be loaded because running scripts is disabled on this system
   ```
   Fix: Use Command Prompt instead, or set PowerShell execution policy:
   ```powershell
   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
   ```

2. **Module Import Errors**:
   - Ensure path aliases are set correctly in tsconfig.json
   - Check that all dependencies are installed
   - Verify import paths match your project structure

3. **Carousel Not Scrolling**:
   - Verify that `embla-carousel-auto-scroll` is properly imported
   - Ensure the AutoScroll plugin is correctly added to Carousel options
   - Check that logos data is correctly passed to the component

## Component Requirements

The Logos3 component requires:
- `embla-carousel-react` - For base carousel functionality
- `embla-carousel-auto-scroll` - For auto-scrolling feature
- Proper image paths in `/public/images/skills/` 