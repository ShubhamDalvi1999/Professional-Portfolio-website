"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import Image from "next/image"
import {
  AnimatePresence,
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  {
    defaultValue = false,
    initializeWithValue = true,
  }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) {
      return defaultValue
    }
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() => {
    if (initializeWithValue) {
      return getMatches(query)
    }
    return defaultValue
  })

  const handleChange = () => {
    setMatches(getMatches(query))
  }

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()

    matchMedia.addEventListener("change", handleChange)

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1], filter: "blur(4px)" }
const transitionOverlay = { duration: 0.5, ease: [0.32, 0.72, 0, 1] }

const CarouselItem = memo(({ imgUrl, index, handleClick, faceWidth, rotation, radius }: any) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  return (
    <motion.div
      className={`absolute flex h-full origin-center items-center justify-center rounded-xl p-2 cursor-pointer`}
      style={{
        opacity: loaded ? 1 : 0.8,
        width: `${faceWidth}px`,
        transform: `rotateY(${rotation}deg) translateZ(${radius}px)`,
        transition: "opacity 0.5s ease",
      }}
      onClick={() => handleClick(imgUrl, index)}
    >
      <motion.div
        className="relative w-full h-full pointer-events-none rounded-xl aspect-square bg-black/70 backdrop-blur-sm overflow-hidden flex items-center justify-center"
        layoutId={`img-container-${imgUrl}`}
        initial={{ filter: "blur(4px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={transition}
        whileHover={{ scale: 1.05 }}
      >
        {error ? (
          <div className="flex flex-col items-center justify-center text-amber-500/70 p-2 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Tech Icon</span>
          </div>
        ) : (
          <img
            src={imgUrl}
            alt={`skill_${index}`}
            className="object-contain w-full h-full"
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => {
              console.error(`Failed to load image: ${imgUrl}`);
              setError(true);
              setLoaded(true);
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
});

const Carousel = memo(
  ({
    handleClick,
    controls,
    cards,
    isCarouselActive,
  }: {
    handleClick: (imgUrl: string, index: number) => void
    controls: any
    cards: string[]
    isCarouselActive: boolean
  }) => {
    const isScreenSizeSm = useMediaQuery("(max-width: 640px)")
    const isScreenSizeMd = useMediaQuery("(max-width: 1024px)")
    const isScreenSizeLg = useMediaQuery("(max-width: 1440px)")
    
    // Calculate cylinder width based on viewport size - using smaller values for better performance
    const cylinderWidth = isScreenSizeSm 
      ? 1000 
      : isScreenSizeMd 
        ? 1600 
        : isScreenSizeLg 
          ? 2000 
          : 2400;
          
    const faceCount = cards.length;
    // Increase face width for better visibility
    const faceWidth = Math.max(cylinderWidth / faceCount * 0.8, 180);
    // Calculate radius based on the number of items to ensure proper spacing
    const radius = cylinderWidth / (2 * Math.PI);
    
    const rotation = useMotionValue(0)
    const transform = useTransform(
      rotation,
      (value) => `rotate3d(0, 1, 0, ${value}deg)`
    )

    // Auto-rotate effect - slower rotation for better visibility
    useEffect(() => {
      if (!isCarouselActive) return;
      
      let intervalId: NodeJS.Timeout;
      const startAutoRotation = () => {
        intervalId = setInterval(() => {
          rotation.set(rotation.get() + 0.2);
        }, 40);
      };
      
      startAutoRotation();
      
      return () => {
        clearInterval(intervalId);
      };
    }, [isCarouselActive, rotation]);

    return (
      <div
        className="flex h-full items-center justify-center w-full"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <motion.div
          drag={isCarouselActive ? "x" : false}
          className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
          style={{
            transform,
            rotateY: rotation,
            width: "100%",
            transformStyle: "preserve-3d",
          }}
          onDrag={(_, info) =>
            isCarouselActive &&
            rotation.set(rotation.get() + info.offset.x * 0.05)
          }
          onDragEnd={(_, info) =>
            isCarouselActive &&
            controls.start({
              rotateY: rotation.get() + info.velocity.x * 0.05,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                mass: 0.1,
              },
            })
          }
          animate={controls}
        >
          {cards.map((imgUrl, i) => (
            <CarouselItem 
              key={`key-${imgUrl}-${i}`}
              imgUrl={imgUrl}
              index={i}
              handleClick={handleClick}
              faceWidth={faceWidth}
              rotation={i * (360 / faceCount)}
              radius={radius}
            />
          ))}
        </motion.div>
      </div>
    )
  }
)

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`

export interface ThreeDCarouselProps {
  cards: string[];
  category: string;
}

export function ThreeDPhotoCarousel({ cards, category }: ThreeDCarouselProps) {
  const [activeImg, setActiveImg] = useState<string | null>(null)
  const [isCarouselActive, setIsCarouselActive] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const controls = useAnimation()

  // Set loaded state after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (imgUrl: string) => {
    setActiveImg(imgUrl)
    setIsCarouselActive(false)
    controls.stop()
  }

  const handleClose = () => {
    setActiveImg(null)
    setIsCarouselActive(true)
  }

  return (
    <motion.div layout className="relative w-[85%] mx-auto">
      <motion.h3 
        className="text-2xl font-bold mb-10 text-center text-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {category}
      </motion.h3>
      <AnimatePresence mode="sync">
        {activeImg && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            layoutId={`img-container-${activeImg}`}
            layout="position"
            onClick={handleClose}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            style={{ willChange: "opacity" }}
            transition={transitionOverlay}
          >
            <img
              src={activeImg}
              alt="Selected skill"
              className="max-w-full max-h-full object-contain p-4"
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative h-[350px] md:h-[400px] w-full overflow-visible">
        {!isLoaded ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-8 h-8 border-4 border-t-amber-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-2"></div>
              <p className="text-amber-500 text-sm">Loading skills...</p>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full">
            <Carousel
              handleClick={handleClick}
              controls={controls}
              cards={cards}
              isCarouselActive={isCarouselActive}
            />
          </div>
        )}
      </div>
    </motion.div>
  )
} 