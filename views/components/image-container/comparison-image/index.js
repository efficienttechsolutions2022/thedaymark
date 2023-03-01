import clsx from "clsx";
import Image from "next/image";
import Container from "views/components/container";
import ContentTwoCols from "views/components/content-twocols";
import parse from "html-react-parser";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { useCallback, useEffect, useState } from "react";
import { ArrowLine } from "views/components/icons";
import { useRouter } from "next/router";

const ComparisonImage = ({
  className = "",
  fullwidth = false,
  content = {},
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dynamicRoute = useRouter().asPath;

  const lastSlide = () => {
    return currentSlide === content.images.length - 1;
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [dynamicRoute]);

  return (
    <Container
      className={clsx(
        "bg-white relative flex-col justify-center items-center min-h-[500px] xl:min-h-screen",
        fullwidth ? "!px-4 lg:!px-0" : "xl:!px-16"
      )}
      xPadding={fullwidth ? false : true}
      yPadding="pt-20 lg:py-20"
    >
      <div
        className={clsx(
          "flex flex-col relative aspect-square lg:aspect-[4/3] xl:aspect-video 2xl:aspect-[16/7] w-[calc(100%+2rem)] lg:w-full overflow-hidden -mx-4 lg:mx-0 lg:px-16",
          className
        )}
      >
        <ReactCompareSlider
          boundsPadding={0}
          onlyHandleDraggable
          changePositionOnHover={false}
          handle={
            <ReactCompareSliderHandle
              style={{
                justifyContent: "flex-end",
                paddingBottom: "100%",
              }}
              linesStyle={{ display: "none" }}
              buttonStyle={{
                backdropFilter: undefined,
                border: "2px",
                boxShadow: undefined,
                color: "#6b6343",
                WebkitBackdropFilter: undefined,
              }}
            />
          }
          itemOne={
            <ReactCompareSliderImage
              alt={content.images[currentSlide]?.text}
              src={content.images[currentSlide]?.image}
              style={{
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              alt={content.sketch_image?.text}
              src={content.sketch_image?.image}
              style={{
                objectPosition: "center",
                objectFit: "cover",
              }}
            />
          }
          position={50}
          className="grow"
        />
        {currentSlide > 0 && (
          <div
            onClick={handlePrevSlide}
            className="cursor-pointer bottom-1 lg:bottom-14 absolute w-14 h-14 -translate-x-1/2 left-10 lg:left-32"
          >
            <ArrowLine
              strokeColor="#8e825c"
              strokeWidth="8px"
              className="rotate-[90deg]"
            />
          </div>
        )}
        {!lastSlide() && (
          <div
            onClick={handleNextSlide}
            className="cursor-pointer bottom-1 lg:bottom-14 absolute w-14 h-14 -translate-x-1/2 -right-10 lg:right-16"
          >
            <ArrowLine
              strokeColor="#8e825c"
              strokeWidth="8px"
              className="rotate-[-90deg]"
            />
          </div>
        )}
      </div>
      <p className="text-brown-tobacco text-base lg:text-2xl uppercase font-semibold mt-0 lg:mt-4">
        move slider
      </p>
      <ContentTwoCols className={className} content={content} />
    </Container>
  );
};

export default ComparisonImage;
