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

const ExploreBlock = ({
  title = {
    text: "",
  },
  image = {
    src: "",
    alt: "",
  },
  explore = {
    url: "",
  },
  gradient = false,
  isDesktop = false,
  reveal = false,
  reversed = false,
  isLast = false,
}) => {
  const posRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const thumbRef = useRef(null);
  const stampRef = useRef(null);
  const exploreRef = useRef(null);

  useLayoutEffect(() => {
    let startPos = "70%";
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: posRef.current.querySelector(".section--block"),
        start: `top center`,
        toggleActions: !isDesktop ? "play none none reverse" : "",
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
      exploreRef.current,
      {
        y: "100%",
        immediateRender: false,
      },
      {
        y: 0,
      },
      0.5
    );

    if (isDesktop) {
      if (reveal) tl.play(0);
      if (reversed) tl.reverse(0);
    }
  }, [isDesktop, reveal, reversed]);

  return (
    <section
      className={clsx("relative w-full h-screen", isDesktop && "section")}
      data-scroll={!isDesktop && true}
      data-scroll-section={!isDesktop && true}
      ref={posRef}
    >
      <Container
        className={clsx(
          "section--block flex-col justify-center items-center gap-16 xl:gap-20 h-full w-full overflow-hidden",
          gradient &&
            "after:absolute after:w-full after:h-full after:z-[1] after:bg-black/20"
        )}
        xPadding={true}
        yPadding="py-20"
        propRef={triggerRef}
      >
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          className="absolute top-0 left-0 object-cover object-center w-full h-full"
        />
        <h2
          className={clsx(
            "main__heading lg:text-[6.5vw] overflow-hidden text-white xl:mt-28 z-[2]",
            styles.explore__blocktitle
          )}
        >
          <span ref={headingRef}>{title.text}</span>
        </h2>
        <div className="text-center z-[2]">
          <div className="relative" ref={exploreRef}>
            <Link
              href={explore.url}
              className={clsx(
                "font-brooklyn uppercase tracking-[0.3em] text-lg lg:text-xl font-light px-6 py-3 border-[3px] border-white transition duration-500",
                "text-white bg-transparent",
                "hover:bg-brown-dull hover:border-brown-dull"
              )}
            >
              explore
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ExploreBlock;
