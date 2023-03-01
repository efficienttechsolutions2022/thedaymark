import clsx from "clsx";
import Image from "next/legacy/image";
import Container from "views/components/container";

const pathImage = "/images/galleries/";

const GallerySections = () => {
  return (
    <div className="relative w-full -translate-y-32 xl:-translate-y-48">
      <Container
        className={clsx(
          "flex-col justify-start xl:justify-center items-center min-h-[500px] xl:min-h-screen",
          "lg:!px-16"
        )}
        xPadding={true}
        yPadding={"pt-20 lg:pb-0"}
      >
        <div
          className={clsx(
            "relative mb-4 xl:mb-14 aspect-square lg:aspect-[4/3] xl:aspect-video 2xl:aspect-[16/7] w-[calc(100%+2rem)] lg:w-full overflow-hidden -mx-4 lg:mx-0"
          )}
        >
          <div
            className="absolute w-full h-full top-0 left-0 transform-gpu"
            data-scroll
            data-scroll-speed="-2"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={`${pathImage}1.jpg`}
                alt={`${pathImage}1.jpg`}
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="flex aspect-video gap-4 xl:gap-14 relative w-[calc(100%+2rem)] lg:w-full overflow-hidden -mx-4 lg:mx-0">
          <div className="w-1/2 xl:w-5/12 h-full overflow-hidden relative">
            <Image
              src={`${pathImage}2.jpg`}
              alt={`${pathImage}2.jpg`}
              layout="fill"
              className="absolute object-cover object-center w-full h-full"
            />
          </div>
          <div className="w-1/2 xl:w-7/12 h-full overflow-hidden relative">
            <Image
              src={`${pathImage}3.jpg`}
              alt={`${pathImage}3.jpg`}
              layout="fill"
              className="absolute object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </Container>
      <Container
        className={clsx(
          "flex-col justify-start xl:justify-center items-center xl:min-h-screen"
        )}
        xPadding={false}
      >
        <div
          className={clsx(
            "relative mb-0 aspect-square lg:aspect-[4/3] xl:aspect-video 2xl:aspect-[16/7] w-full overflow-hidden"
          )}
        >
          <div
            className="absolute w-full h-full top-0 left-0 transform-gpu"
            data-scroll
            data-scroll-speed="-2"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={`${pathImage}4.jpg`}
                alt={`${pathImage}4.jpg`}
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="relative flex w-full">
          <div className="bg-platinum w-1/2 xl:w-[55%]">
            <div className="aspect-[3/4] relative flex justify-center items-center">
              <Image
                src={`${pathImage}5.jpg`}
                alt={`${pathImage}5.jpg`}
                layout="fill"
                className="object-cover object-center xl:!px-44 xl:!py-56"
              />
            </div>
          </div>
          <div className="bg-white flex flex-col w-1/2 xl:w-[45%]">
            <div className="relative flex-1 w-full">
              <Image
                src={`${pathImage}6.jpg`}
                alt={`${pathImage}6.jpg`}
                layout="fill"
                className="object-cover object-center"
              />
            </div>
            <div className="relative flex-1 w-full">
              <Image
                src={`${pathImage}7.jpg`}
                alt={`${pathImage}7.jpg`}
                layout="fill"
                className="object-cover object-left xl:!p-20"
              />
            </div>
          </div>
        </div>
      </Container>
      <Container
        className={clsx(
          "flex-col justify-start xl:justify-center items-center xl:min-h-screen"
        )}
        xPadding={false}
      >
        <div className="relative flex w-full">
          <div className="bg-white flex flex-col w-1/2 xl:w-[45%]">
            <div className="relative flex-1 w-full">
              <Image
                src={`${pathImage}8.jpg`}
                alt={`${pathImage}8.jpg`}
                layout="fill"
                className="object-cover object-center"
              />
            </div>
            <div className="relative flex-1 w-full">
              <Image
                src={`${pathImage}9.jpg`}
                alt={`${pathImage}9.jpg`}
                layout="fill"
                className="object-cover object-left xl:!p-20"
              />
            </div>
          </div>
          <div className="bg-brown-tobacco w-1/2 xl:w-[55%]">
            <div className="aspect-[3/4] relative flex justify-center items-center">
              <Image
                src={`${pathImage}10.jpg`}
                alt={`${pathImage}10.jpg`}
                layout="fill"
                className="object-cover object-[85%_50%] xl:!px-44 xl:!py-56"
              />
            </div>
          </div>
        </div>
      </Container>
      <Container
        className={clsx(
          "flex-col justify-start xl:justify-center items-center min-h-[500px] xl:min-h-screen"
        )}
        xPadding={false}
      >
        <div
          className={clsx(
            "relative mb-0 aspect-square lg:aspect-[4/3] xl:aspect-video 2xl:aspect-[16/7] w-full overflow-hidden"
          )}
        >
          <div
            className="absolute w-full h-full top-0 left-0 transform-gpu"
            data-scroll
            data-scroll-speed="-2"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={`${pathImage}11.jpg`}
                alt={`${pathImage}11.jpg`}
                layout="fill"
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
        <div className="relative grid p-4 xl:p-10 w-full grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-10 h-[50vh] xl:h-[85vh] pb-0">
          <div className="relative w-full h-full xl:h-full">
            <Image
              src={`${pathImage}12.jpg`}
              alt={`${pathImage}12.jpg`}
              layout="fill"
              className="object-cover object-left w-full h-full -scale-x-[1]"
            />
          </div>
          <div className="relative w-full h-full xl:h-full">
            <Image
              src={`${pathImage}13.jpg`}
              alt={`${pathImage}13.jpg`}
              layout="fill"
              className="object-cover object-[70%] w-full h-full"
            />
          </div>
          <div className="relative w-full col-span-2 xl:col-span-1 h-full xl:h-full">
            <Image
              src={`${pathImage}14.jpg`}
              alt={`${pathImage}14.jpg`}
              layout="fill"
              className="object-cover object-[20%] w-full h-full"
            />
          </div>
        </div>
      </Container>
      <Container
        className={clsx(
          "flex-col justify-start xl:justify-center items-center xl:min-h-screen"
        )}
        xPadding={false}
      >
        <div
          className={clsx(
            "relative mb-0 w-full min-h-[500px] xl:h-screen overflow-hidden"
          )}
        >
          <div
            className="absolute w-full h-full top-0 left-0 transform-gpu"
            data-scroll
            data-scroll-speed="-2"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={`${pathImage}15-bg.jpg`}
                alt={`${pathImage}15.jpg`}
                layout="fill"
                className="object-cover w-full h-full"
              />
              <div
                className="absolute w-full h-full"
                data-scroll
                data-scroll-speed="-2"
              >
                <Image
                  src={`${pathImage}15.jpg`}
                  alt={`${pathImage}15.jpg`}
                  layout="fill"
                  className="object-cover w-full h-full !p-10 xl:!py-44 xl:!px-56"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container
        className={clsx(
          "flex-col justify-start xl:justify-center items-center xl:min-h-screen"
        )}
        xPadding={false}
      >
        <div className="relative flex w-full">
          <div className="bg-swan w-1/2 xl:w-[55%]">
            <div className="relative flex w-full h-full justify-center items-center overflow-hidden">
              <Image
                src={`${pathImage}16.jpg`}
                alt={`${pathImage}16.jpg`}
                layout="fill"
                className="object-cover object-[10%] xl:!px-40 xl:!py-40"
              />
            </div>
          </div>
          <div className="bg-white w-1/2 xl:w-[45%]">
            <div className="aspect-[3/4] relative flex justify-center items-center">
              <Image
                src={`${pathImage}17.jpg`}
                alt={`${pathImage}17.jpg`}
                layout="fill"
                className="object-cover object-right xl:!p-20 h-full"
              />
            </div>
          </div>
        </div>
        <div className="relative xl:mb-8 grid p-4 xl:p-10 w-full grid-rows-3 grid-cols-2 xl:grid-cols-3 xl:grid-rows-1 gap-4 xl:gap-10 min-h-[85vh] xl:min-h-0 xl:h-[85vh]">
          <div className="relative w-full h-full xl:h-full">
            <Image
              src={`${pathImage}18.jpg`}
              alt={`${pathImage}18.jpg`}
              layout="fill"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="relative w-full h-full xl:h-full">
            <Image
              src={`${pathImage}19.jpg`}
              alt={`${pathImage}19.jpg`}
              layout="fill"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="relative w-full col-span-2 row-span-2 xl:col-span-1 xl:row-span-1 h-full xl:h-full">
            <Image
              src={`${pathImage}20.jpg`}
              alt={`${pathImage}20.jpg`}
              layout="fill"
              className="object-cover object-[70%_top] w-full h-full"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default GallerySections;
