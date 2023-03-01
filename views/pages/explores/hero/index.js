import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import Container from "views/components/container";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { from, to } from "utils/constants/gsap";
import ExploreSections from "views/pages/explores/sections";

gsap.registerPlugin(ScrollTrigger);

const ExploreHero = ({ hero = {}, content = {} }) => {
  const triggerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top +=5%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(labelRef.current, from(0, 100), to(0, 0), 0)
      .fromTo(headingRef.current, from(0, 100), to(0, 0), 0.25)
      .fromTo(subHeadingRef.current, from(0, 100), to(0, 0), 0.5);
  }, []);

  return (
    <>
      <section
        className="relative w-full"
        data-scroll-section
        data-scroll
        data-scroll-repeat
      >
        <Container
          className="bg-platinum flex-col justify-center items-center min-h-[500px] lg:min-h-screen"
          xPadding={true}
          yPadding="py-20"
          propRef={triggerRef}
        >
          <h1 className="text-brown-dull xl:text-[1.7rem] tracking-widest font-light overflow-hidden uppercase mb-4 xl:mb-8 opacity-70">
            <span ref={labelRef}>{hero.label}</span>
          </h1>
          <h2 className="main__heading text-white overflow-hidden">
            <span ref={headingRef}>{hero.title}</span>
          </h2>
          <h3 className="main__heading--sub text-swan xl:text-[6vw] leading-none -mt-6 xl:-mt-12 overflow-hidden">
            <span ref={subHeadingRef}>{hero.subtitle}</span>
          </h3>
        </Container>
      </section>
      <section
        className="relative w-full bg-white"
        data-scroll
        data-scroll-repeat
        data-scroll-section
      >
        <ExploreSections image={hero} content={content} />
      </section>
    </>
  );
};

export default ExploreHero;
