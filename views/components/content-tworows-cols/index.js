import clsx from "clsx";
import parse from "html-react-parser";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { from, to, toStagger } from "utils/constants/gsap";
import Image from "next/legacy/image";

gsap.registerPlugin(ScrollTrigger);

const ContentTwoRowsCols = ({ className = "", content = {} }) => {
  const triggerRef = useRef(null);
  const titleRef = useRef([]);
  const descRef = useRef(null);
  const featureRef = useRef([]);
  titleRef.current = [];
  featureRef.current = [];

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top center",
        markers: false,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(titleRef.current, from(0, 100), toStagger(0, 0, 0.15), 0).fromTo(
      descRef.current,
      from(-100, 0),
      to(0, 0),
      0.25
    );

    if (content.featured.length) {
      tl.fromTo(featureRef.current, from(0, 100), toStagger(0, 0, 0.15), 0.5);
    }
  }, []);

  const addToTitleRefs = (el) => {
    if (el && !titleRef.current.includes(el)) {
      titleRef.current.push(el);
    }
  };

  const addToFeatureRefs = (el) => {
    if (el && !featureRef.current.includes(el)) {
      featureRef.current.push(el);
    }
  };
  return (
    content && (
      <div
        className={clsx(
          "gap-8 lg:gap-0 bg-white w-[calc(100%+2rem)] lg:w-full relative flex flex-col justify-center items-start lg:justify-between",
          "pt-8 lg:pt-20 px-8 xl:pt-28 lg:px-16 -mx-4 lg:mx-0",
          className
        )}
        ref={triggerRef}
      >
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:w-1/2">
            {content.title
              ? content.title.map((contenttitle, index) => {
                  return (
                    <h4
                      key={index}
                      className={clsx(
                        "main__heading text-swan overflow-hidden text-[10vw] lg:!text-[5.5vw] !leading-[0.65] lg:!leading-[0.85]",
                        "!text-left"
                      )}
                    >
                      <span ref={addToTitleRefs} className="py-2">
                        {contenttitle}
                      </span>
                    </h4>
                  );
                })
              : null}
          </div>
          <div className="relative flex flex-col items-end w-full lg:w-1/2">
            {content.last_images.length && (
              <>
                <div
                  className={clsx(
                    "w-full left-0 aspect-[16/10] overflow-hidden",
                    content.last_images.length === 1
                      ? "relative lg:w-full"
                      : "absolute lg:w-[70%] top-1/2 -translate-y-1/2"
                  )}
                >
                  <Image
                    alt={content.last_images[0]}
                    src={content.last_images[0]}
                    layout={"fill"}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                {content.last_images.length > 1 && (
                  <div className="relative w-[40%] aspect-[2/4] right-0 overflow-hidden">
                    <Image
                      alt={content.last_images[1]}
                      src={content.last_images[1]}
                      layout={"fill"}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full translate-y-20">
          <div
            className={clsx(
              "flex flex-col text-clay opacity-70 w-full lg:w-1/2 text-sm lg:text-md xl:text-[0.925rem] xl:leading-[1.3rem] 2xl:text-xl overflow-hidden",
              "lg:pr-24 xl:pr-48 2xl:pr-96",
              content.featured.length && "mb-12"
            )}
          >
            <span ref={descRef} className="flex flex-col gap-4">
              {parse(content.description)}
            </span>
          </div>
          <div className="flex w-full lg:w-1/2">
            {content.featured && (
              <div className="columns-3 w-full lg:w-3/4">
                {content.featured
                  ? content.featured.map((feature, index) => {
                      return (
                        <div
                          key={index}
                          className="flex text-clay text-xs opacity-70 uppercase tracking-widest mb-1.5 overflow-hidden"
                        >
                          <span ref={addToFeatureRefs}>{feature}</span>
                        </div>
                      );
                    })
                  : null}
              </div>
            )}
          </div>
        </div>
        {content.map && (
          <div className="flex w-full lg:w-[calc(100%+2rem)] lg:-ml-8 mt-40">
            <div className="relative w-full h-[calc(100vh/2)] xl:h-[calc(100vh/1.5)] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.379781394125!2d-73.87274268421722!3d41.08254802279948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7616ca20b0d03f07!2zNDHCsDA0JzU3LjIiTiA3M8KwNTInMTQuMCJX!5e0!3m2!1sen!2sid!4v1673454061631!5m2!1sen!2sid"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default ContentTwoRowsCols;
