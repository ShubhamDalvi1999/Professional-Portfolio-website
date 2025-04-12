'use client';

import Image from 'next/image';
import Particles from './Particles';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex flex-col justify-end overflow-hidden pt-12">
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black mt-[80px]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="relative w-full h-full max-w-screen-2xl mx-auto">
            <Image
              src="/images/homepage-background.png"
              alt="Cosmic background"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover brightness-110"
              style={{
                objectPosition: "center 50%",
                width: "100%",
                height: "100%"
              }}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black"></div>
      </div>
      
      <div className="absolute inset-0 z-0 mt-[80px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <Particles count={20} />
        </div>
      </div>
    </section>
  );
} 