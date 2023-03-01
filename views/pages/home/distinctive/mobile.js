import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Container from "views/components/container";
import { ArrowRounded } from "views/components/icons";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const DistinctiveMobile = ({ reveal = false, reversed = false }) => {
  const posRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

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
    ).fromTo(
      subHeadingRef.current,
      {
        y: "100%",
        immediateRender: false,
      },
      {
        y: 0,
      },
      1.25
    );
  }, [scroll, reveal, reversed]);
  return (
    <section
      className="fp-auto-height-responsive relative w-full xl:h-screen"
      ref={posRef}
      data-scroll
      data-scroll-section
    >
      <Container
        className="bg-platinum flex-col justify-center items-center min-h-[500px] md:min-h-[800px] xl:h-screen"
        xPadding={true}
        yPadding="py-20"
        propRef={triggerRef}
      >
        <h1 className="main__heading text-white xl:text-[10vw] overflow-hidden">
          <span ref={headingRef}>a distinctive</span>
        </h1>
        <h2 className="main__heading--sub text-swan xl:text-[7.5vw] leading-none -mt-6 xl:-mt-20 overflow-hidden">
          <span ref={subHeadingRef}>Point of View</span>
        </h2>
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: posRef.current.clientHeight + window.innerHeight,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <ArrowRounded strokeColor="#bfb8ae" />
        </div>
      </Container>
    </section>
  );
};
export default DistinctiveMobile;
