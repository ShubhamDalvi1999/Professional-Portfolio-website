"use client";

import { useEffect, useState, useRef } from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "./carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
  speed?: number;
  direction?: "forward" | "backward";
  startDelay?: number;
}

const Logos3 = ({
  heading = "Technology Stack",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://shadcnblocks.com/images/block/logos/react.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-7 w-auto",
    },
  ],
  className,
  speed = 0.8,
  direction = "forward",
  startDelay = 0,
}: Logos3Props) => {
  const [autoScrollPlugin, setAutoScrollPlugin] = useState<any>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const autoScrollRef = useRef<any>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // When component unmounts, clear any timeouts
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const createAutoScroll = () => {
      const plugin = AutoScroll({
        playOnInit: true,
        speed: speed,
        direction: direction
      });
      autoScrollRef.current = plugin;
      return plugin;
    };

    if (startDelay > 0) {
      const timer = setTimeout(() => {
        setAutoScrollPlugin(createAutoScroll());
      }, startDelay);
      
      return () => clearTimeout(timer);
    } else {
      setAutoScrollPlugin(createAutoScroll());
    }
  }, [startDelay, speed, direction]);

  const handleCarouselClick = () => {
    if (!carouselApi || !autoScrollRef.current) return;
    
    // Stop current running timeout if any
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    
    // Resume auto-scrolling after 3 seconds
    resumeTimeoutRef.current = setTimeout(() => {
      if (autoScrollRef.current && autoScrollRef.current.play) {
        autoScrollRef.current.play();
      }
    }, 3000);
  };

  return (
    <section className={`py-6 ${className || ""}`}>
      <div className="container flex flex-col items-center text-center px-4 md:px-6">
        <h2 className="my-4 text-pretty text-2xl font-bold tracking-tighter md:text-3xl/tight text-accent">
          {heading}
        </h2>
      </div>
      <div className="pt-6 md:pt-8 overflow-hidden w-full">
        <div className="relative mx-auto flex items-center justify-center w-full max-w-7xl">
          <Carousel
            opts={{ 
              loop: true,
              align: "start",
              containScroll: "trimSnaps"
            }}
            plugins={autoScrollPlugin ? [autoScrollPlugin] : []}
            className="w-full"
            onMouseDown={handleCarouselClick}
            onTouchStart={handleCarouselClick}
            setApi={setCarouselApi}
          >
            <CarouselContent className="ml-0">
              {[...logos, ...logos].map((logo, index) => (
                <CarouselItem
                  key={`${logo.id}-${index}`}
                  className="flex basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 justify-center pl-0 shrink-0"
                >
                  <div className="mx-4 sm:mx-5 flex shrink-0 items-center justify-center">
                    <div className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-background/10 rounded-lg backdrop-blur p-3 transition-all duration-300 border border-primary/10">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className="w-full h-full object-contain filter transition-all duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 }; 