import clsx from "clsx";
import parse from "html-react-parser";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef } from "react";
import { from, to, toStagger } from "utils/constants/gsap";

gsap.registerPlugin(ScrollTrigger);

const ContentTwoCols = ({ className = "", content = {} }) => {
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
      from(100, 0),
      to(0, 0),
      0.25
    );

    if (content.featured?.length) {
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
          "gap-8 lg:gap-0 bg-white w-full relative flex flex-col justify-center items-start lg:justify-between",
          "pt-8 lg:pt-20 px-8 xl:pt-28 lg:px-16 -mx-4 lg:mx-0",
          content.reverse ? "lg:flex-row-reverse" : "lg:flex-row",
          className
        )}
        ref={triggerRef}
      >
        {content.multiple_content?.length ? (
          <>
            <div className="flex w-full flex-col lg:flex-row justify-center lg:justify-between">
              {content.multiple_content.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center w-full xl:w-1/2"
                  >
                    {item.title
                      ? item.title.map((contenttitle, idx) => {
                          return (
                            <h4
                              key={idx}
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

                    {item.featured && (
                      <div className="w-full lg:w-[80%] mt-12 columns-3">
                        {item.featured
                          ? item.featured.map((feature, index) => {
                              return (
                                <div
                                  key={index}
                                  className="flex text-clay justify-center text-left text-xs opacity-70 uppercase tracking-widest mb-1.5 overflow-hidden"
                                >
                                  <span ref={addToFeatureRefs}>{feature}</span>
                                </div>
                              );
                            })
                          : null}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col w-full lg:w-1/2">
              {content.title
                ? content.title.map((contenttitle, index) => {
                    return (
                      <h4
                        key={index}
                        className={clsx(
                          "main__heading text-swan overflow-hidden text-[10vw] lg:!text-[5.5vw] !leading-[0.65] lg:!leading-[0.85]",
                          content.reverse ? "lg:!justify-end" : "!text-left"
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
            <div
              className={clsx(
                "flex flex-col w-full lg:w-1/2",
                content.reverse
                  ? "lg:pr-24 xl:pr-48 2xl:pr-96"
                  : "lg:pl-24 xl:pl-46 2xl:pl-96"
              )}
            >
              {content.description && (
                <div
                  className={clsx(
                    "flex flex-col text-clay opacity-70 text-sm lg:text-md xl:text-[0.925rem] xl:leading-[1.3rem] 2xl:text-xl overflow-hidden",
                    content.featured?.length && "mb-12"
                  )}
                >
                  <span ref={descRef} className="flex flex-col gap-4">
                    {parse(content.description)}
                  </span>
                </div>
              )}
              {content.featured && (
                <div className="columns-3">
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
          </>
        )}
      </div>
    )
  );
};

export default ContentTwoCols;
