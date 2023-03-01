import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import Container from "views/components/container";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { StampLuxury } from "views/components/icons";
import clsx from "clsx";
import styles from "./Style.module.scss";

gsap.registerPlugin(ScrollTrigger);

const ExploreBlockMobile = ({
  title = {
    text: "",
    color: "",
  },
  image = {
    src: "",
    alt: "",
  },
  explore = {
    url: "",
    color: "",
  },
  bgColor = "",
  stampColor = "",
  reveal = false,
  reversed = false,
}) => {
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const thumbRef = useRef(null);
  const stampRef = useRef(null);
  const exploreRef = useRef(null);

  useLayoutEffect(() => {
    let startPos = "70%";
    gsap.matchMedia().add("(min-width: 1200px)", () => {
      startPos = "50%";
    });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: `top +=${startPos}`,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      headingRef.current,
      {
        y: "100%",
        immediateRender: false,
      },
      {
        y: 0,
      },
      1
    )
      .fromTo(
        thumbRef.current,
        {
          clipPath: "inset(0% 100% 0% 0%)",
          immediateRender: false,
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        1.5
      )
      .to(
        stampRef.current,
        {
          opacity: 0.6,
        },
        1.8
      )
      .fromTo(
        exploreRef.current,
        {
          y: "100%",
          immediateRender: false,
        },
        {
          y: 0,
        },
        2
      );
  }, []);

  return (
    <section
      className="relative w-full xl:h-screen"
      data-scroll
      data-scroll-section
    >
      <Container
        className="flex-col justify-center items-center gap-6 xl:gap-4 min-h-[500px] md:min-h-[800px] xl:min-h-screen overflow-hidden"
        xPadding={true}
        yPadding="py-20"
        propRef={triggerRef}
        style={{ backgroundColor: bgColor }}
      >
        <h2
          className={clsx(
            "main__heading lg:text-[6vw] 2xl:text-[5vw] overflow-hidden",
            styles.explore__blocktitle
          )}
          style={{
            color: title.color,
          }}
        >
          <span ref={headingRef}>{title.text}</span>
        </h2>
        <div className="w-full lg:w-[85vw] lg:w-[50vw] xl:w-[55vw] 2xl:w-[45vw] mb-2 relative">
          <div className="relative aspect-video w-full" ref={thumbRef}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div
            className="absolute -bottom-10 -right-10 md:-bottom-16 md:-right-16 xl:-bottom-20 xl:-right-20 -rotate-[20deg] opacity-0"
            ref={stampRef}
          >
            <div className="relative aspect-square w-20 md:w-32 xl:w-40">
              <StampLuxury color={stampColor} />
            </div>
          </div>
        </div>
        <div className="text-center overflow-hidden">
          <div className="relative" ref={exploreRef}>
            <Link
              href={explore.url}
              className="font-brooklyn uppercase tracking-widest lg:text-2xl 2xl:text-[1.25rem] font-light"
              style={{
                color: explore.color,
              }}
            >
              explore
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExploreBlockMobile;
