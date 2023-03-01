import clsx from "clsx";
import Image from "next/image";
import Container from "views/components/container";
import ContentTwoCols from "views/components/content-twocols";
import parse from "html-react-parser";
import ContentTwoRowsCols from "views/components/content-tworows-cols";

const SingleImage = ({
  className = "",
  fullwidth = false,
  content = {},
  lastSection = false,
}) => {
  return (
    <Container
      className={clsx(
        "flex-col justify-start xl:justify-center items-center min-h-[500px] xl:min-h-screen",
        fullwidth ? "!px-4 lg:!px-0" : "lg:!px-16"
      )}
      xPadding={fullwidth ? false : true}
      yPadding={lastSection ? "py-8 lg:pt-20 lg:pb-0" : "pt-20 lg:py-20"}
    >
      <div
        className={clsx(
          "relative aspect-square lg:aspect-[4/3] xl:aspect-video 2xl:aspect-[16/8.5] w-[calc(100%+2rem)] lg:w-full overflow-hidden -mx-4 lg:mx-0",
          className
        )}
      >
        <div
          className="absolute w-full h-full top-0 left-0"
          data-scroll
          data-scroll-speed="-2"
        >
          <div className="relative w-full h-full overflow-hidden">
            <Image
              src={content.image}
              alt={content.description}
              width={1920}
              height={1080}
              className="object-cover w-full h-full object-[0%_50%]"
            />
          </div>
        </div>
      </div>
      {lastSection ? (
        <ContentTwoRowsCols className={className} content={content} />
      ) : (
        <ContentTwoCols className={className} content={content} />
      )}
    </Container>
  );
};

export default SingleImage;
