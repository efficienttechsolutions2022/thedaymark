import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Container from "views/components/container";
import { ArrowRounded } from "views/components/icons";

gsap.registerPlugin(ScrollTrigger);

const Distinctive = ({ reveal = false, reversed = false, fpApi = null }) => {
  const posRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const { scroll } = useLocomotiveScroll();

  useLayoutEffect(() => {
    let startPos = "70%";
    const tl = gsap.timeline({
      scrollTrigger: {
        pause: false,
        trigger: posRef.current.querySelector(".section--distinctive"),
        start: `top +=${startPos}`,
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
      0
    ).fromTo(
      subHeadingRef.current,
      {
        y: "100%",
        immediateRender: false,
      },
      {
        y: 0,
      },
      0.5
    );
    if (reveal) tl.play(0);
    if (reversed) tl.reverse(0);
  }, [scroll, reveal, reversed]);
  return (
    <section className="section relative w-full" ref={posRef}>
      <Container
        className="section--distinctive bg-platinum flex-col justify-center items-center min-h-[500px] md:min-h-[800px] xl:h-screen"
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
            fpApi.moveSectionDown();
          }}
        >
          <ArrowRounded strokeColor="#bfb8ae" />
        </div>
      </Container>
    </section>
  );
};
export default Distinctive;
