import clsx from "clsx";
import Image from "next/image";
import { ArrowRounded, LogoEOH } from "views/components/icons";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroMobile({ headerReavel, setReveal }) {
  const imageIntroRef = useRef(null);
  const imageSketchRef = useRef(null);
  const arrowRef = useRef(null);

  useLayoutEffect(() => {
    const enterTL = gsap.timeline({
      onComplete: () => {
        setReveal(true);
      },
    });

    enterTL
      .to(
        imageSketchRef.current,
        {
          opacity: 1,
          duration: 1,
        },
        1
      )
      .to(
        arrowRef.current,
        {
          opacity: 1,
        },
        1.5
      );
  }, [headerReavel]);

  return (
    <section
      className="relative h-screen w-full"
      data-scroll
      data-scroll-section
    >
      <div
        className={clsx(
          "w-full h-screen relative",
          "after:absolute after:w-full after:h-full after:bg-swan after:mix-blend-multiply"
        )}
      >
        <div
          id="imageSketchRef"
          className="w-full h-full inset-0 absolute opacity-0"
          ref={imageSketchRef}
        >
          <Image
            src="/images/homepage/hero-banner.jpg"
            priority={true}
            width="1920"
            height="1080"
            className="absolute top-0 w-full h-full object-center object-cover"
            alt="The Daymark"
          />
        </div>
      </div>
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 cursor-pointer"
        ref={arrowRef}
        onClick={() => {
          window.scrollTo({
            top: imageSketchRef.current.clientHeight,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        <ArrowRounded />
      </div>
    </section>
  );
}
