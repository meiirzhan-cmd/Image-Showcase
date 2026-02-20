import Image from "next/image";
import heroBg from "@/public/images/hero-banner.jpg";
import React from "react";

const HeroBanner = () => {
  return (
    <section className="relative h-60vh w-full">
      <Image
        src={heroBg}
        alt="Hero Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        quality={75}
      >
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl">Welcome</h1>
        </div>
      </Image>
    </section>
  );
};

export default HeroBanner;
