# Logos3 Component Documentation

The Logos3 component is a modern, auto-scrolling carousel that displays company logos with a sleek design.

## Project Structure

This project uses the shadcn/ui component structure:
- `/components/ui` - UI components like buttons, carousels, etc.
- `/components/blocks` - Higher-level components like Logos3Demo
- `/lib` - Utility functions like `cn` for class merging

## Installation

### Local Development

1. Install dependencies:

```bash
npm install embla-carousel-react embla-carousel-auto-scroll clsx tailwind-merge class-variance-authority @radix-ui/react-slot lucide-react
```

2. Run the development server:

```bash
npm run dev
```

### Docker Deployment

The project includes Docker configuration for production deployment:

1. Build the Docker image:

```bash
docker build -t portfolio-website .
```

2. Run the container:

```bash
docker run -p 3000:3000 portfolio-website
```

Alternatively, use Docker Compose:

```bash
docker-compose up -d
```

## Using the Logos3 Component

The component can be used directly:

```tsx
import { Logos3 } from "@/components/ui/logos3";

// Inside your component
return <Logos3 heading="Our Partners" />;
```

Or with custom data:

```tsx
import { Logos3Demo } from "@/components/blocks/logos3-demo";

// Inside your component
return <Logos3Demo />;
```

## Customization

### Adding Custom Logos

Modify the logos array in `logos3.tsx` or pass a custom array:

```tsx
const customLogos = [
  {
    id: "custom-1",
    description: "Custom Logo",
    image: "/images/logos/custom.svg",
    className: "h-8 w-auto",
  },
  // More logos...
];

return <Logos3 logos={customLogos} heading="Custom Heading" />;
```

### Adjusting the Carousel

To modify carousel behavior, adjust the options in the `AutoScroll` plugin:

```tsx
<Carousel
  opts={{ loop: true }}
  plugins={[
    AutoScroll({ 
      playOnInit: true,
      speed: 1.0, // Adjust speed
      direction: "forward" // or "backward"
    })
  ]}
>
```

## Dependencies

This component relies on:
- embla-carousel-react
- embla-carousel-auto-scroll
- Tailwind CSS
- TypeScript
- shadcn/ui components 