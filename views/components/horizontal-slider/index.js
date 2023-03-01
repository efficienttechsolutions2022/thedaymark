import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Container from "views/components/container";
import Image from "next/legacy/image";
import { ArrowRounded } from "views/components/icons";

import "swiper/css";
import "swiper/css/navigation";

const HorizontalSlider = ({ images = [] }) => {
  return (
    <>
      {images.images.length && (
        <Container
          className={clsx(
            "overflow-hidden bg-white flex-col justify-start xl:justify-center items-center min-h-[500px] xl:min-h-screen",
            "!px-8 lg:!px-32"
          )}
          yPadding="pt-20 lg:py-20"
        >
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".next--slide",
              prevEl: ".prev--slide",
            }}
            grabCursor
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              563: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            loop
            className={clsx(
              "group w-full h-full !overflow-visible",
              "after:absolute after:w-full after:h-full after:-left-full after:bg-white after:top-0 after:z-[1]"
            )}
          >
            {images.images.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="h-full relative aspect-[2.5/4]">
                    <div className="absolute w-full h-full top-0 left-0 image-container">
                      <Image
                        src={item.image}
                        alt={item.text}
                        layout="fill"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}

            <div
              className={clsx(
                "opacity-0 transition duration-500 z-[2] next--slide cursor-pointer hidden md:block absolute top-1/2 right-4 -translate-y-1/2",
                "group-hover:opacity-100"
              )}
            >
              <ArrowRounded className="w-20 xl:w-28" rotate="rotate-0" />
            </div>

            <div
              className={clsx(
                "opacity-0 transition duration-500 z-[2] prev--slide cursor-pointer hidden md:block absolute top-1/2 left-4 -translate-y-1/2",
                "group-hover:opacity-100"
              )}
            >
              <ArrowRounded className="w-20 xl:w-28" rotate="rotate-180" />
            </div>
          </Swiper>
        </Container>
      )}
    </>
  );
};

export default HorizontalSlider;
