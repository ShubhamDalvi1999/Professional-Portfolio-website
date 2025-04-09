"use client"

import * as React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"
import { type EmblaPluginType } from "embla-carousel"
import AutoScroll from "embla-carousel-auto-scroll"

import { cn } from "@/lib/utils"

type CarouselAutoScrollProps = {
  opts?: Parameters<typeof useEmblaCarousel>[0]
  plugins?: EmblaPluginType[]
  className?: string
}

export function CarouselAutoScroll({
  opts,
  plugins,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & CarouselAutoScrollProps) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      ...opts,
    },
    [
      AutoScroll({
        speed: 0.5,
        direction: "forward",
      }) as EmblaPluginType,
      ...(plugins || [])
    ]
  )

  return (
    <div ref={emblaRef} className={cn("overflow-hidden w-full", className)} {...props}>
      <div className="flex">{children}</div>
    </div>
  )
}

type CarouselAutoScrollItemProps = {
  className?: string
}

export function CarouselAutoScrollItem({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & CarouselAutoScrollItemProps) {
  return (
    <div
      role="listitem"
      className={cn("min-w-0 flex items-center justify-center", className)}
      {...props}
    >
      {children}
    </div>
  )
} 