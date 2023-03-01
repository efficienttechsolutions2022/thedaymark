import clsx from "clsx";
import Image from "next/legacy/image";
import Container from "views/components/container";
import ContentTwoCols from "views/components/content-twocols";
import { ArrowRounded } from "views/components/icons";
import { useEffect, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const OddImage = ({ className = "", fullwidth = false, content = {} }) => {
  return (
    <Container
      className={clsx(
        "bg-white flex-col justify-center items-center min-h-[500px] xl:min-h-screen",
        "xl:!px-0 xl:!pr-16"
      )}
      xPadding={false}
      yPadding="pt-20 lg:py-20"
    >
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".next--slide",
        }}
        slidesPerView={1}
        loop
        className="w-full"
      >
        {content.images.map((imgGroup, idxGroup) => {
          return (
            <SwiperSlide key={idxGroup}>
              <div
                className={clsx(
                  "relative flex flex-col gap-10 md:gap-0 md:flex-row-reverse md:justify-between w-full overflow-hidden md:overflow-visible",
                  className
                )}
              >
                <div className="relative w-[calc(100%+2rem)] md:w-1/2 z-[2] overflow-hidden">
                  <div
                    className={clsx(
                      "relative w-full xl:h-[calc(100vh-80px)] aspect-video md:aspect-[3/4] xl:aspect-auto overflow-hidden",
                      "-mx-4 lg:mx-0"
                    )}
                  >
                    <div className="absolute w-full h-full top-0 left-0 image-container">
                      <Image
                        src={imgGroup[2].image}
                        alt={imgGroup[2].text}
                        layout="fill"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div
                    className={clsx(
                      "next--slide cursor-pointer hidden md:block absolute top-[calc(50%-60px)] xl:top-[calc(50%-120px)] -translate-y-1/2 -translate-x-1/2"
                    )}
                  >
                    <ArrowRounded className="w-20 xl:w-40" rotate="rotate-0" />
                  </div>
                  <p
                    className={clsx(
                      "px-4 md:px-0 my-4 md:my-8 uppercase tracking-[0.2em] text-clay text-xs md:text-lg xl:text-base"
                    )}
                  >
                    {imgGroup[2].text}
                  </p>
                </div>
                <div className="relative w-full md:w-1/2">
                  <div className="relative w-1/2 aspect-[3/4] overflow-hidden mb-10 lg:mb-4">
                    <div className="absolute h-full top-0 left-0 image-container">
                      <Image
                        src={imgGroup[0].image}
                        alt={imgGroup[0].text}
                        layout="fill"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="relative w-1/2 aspect-[3/4] ml-auto md:ml-32 xl:ml-44 overflow-hidden">
                    <div className="absolute h-full top-0 left-0 image-container">
                      <Image
                        src={imgGroup[1].image}
                        alt={imgGroup[1].text}
                        layout="fill"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    "next--slide cursor-pointer hidden md:block absolute top-[calc(50%-60px)] xl:top-[calc(50%-120px)] left-1/2 -translate-y-1/2 -translate-x-1/2"
                  )}
                >
                  <ArrowRounded
                    className="w-20 xl:w-40"
                    rotate="rotate-0"
                    strokeColor="#8e825c"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <ContentTwoCols className={className} content={content} />
    </Container>
  );
};

export default OddImage;
