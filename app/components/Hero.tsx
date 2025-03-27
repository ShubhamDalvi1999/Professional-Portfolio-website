'use client';

import Image from 'next/image';
import Particles from './Particles';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-end overflow-hidden pt-12">
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black mt-[40px]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/homepage-background.png"
              alt="Cosmic background"
              fill
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover"
              style={{
                objectPosition: "28% center"
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
      </div>
      
      <Particles count={40} />
    </section>
  );
} 