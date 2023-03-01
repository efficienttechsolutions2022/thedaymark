import Container from "views/components/container";
import ArrowLine from "views/components/icons/arrow-line";
import clsx from "clsx";
import { useEffect, useState } from "react";

export const FloorPlan = (props) => {
  const {
    id = 0,
    totalRooms = 0,
    reveal = false,
    onClick = () => {},
    onDataSetter = () => {},
    data = {
      header: {},
      row: {},
      prevRow: {},
      nextRow: {},
    },
  } = props;

  const [idPrev, setPrevId] = useState(0);
  const [idNext, setNextId] = useState(0);

  useEffect(() => {
    if (id > 1) setPrevId(id - 1);
    else setPrevId(0);

    if (id < totalRooms) setNextId(id + 1);
    else setNextId(0);
  }, [id, idPrev, idNext]);

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    data && (
      <section
        className={clsx(
          "z-[20] pointer-events-none bg-platinum fixed top-0 left-0 w-full min-h-screen transform-gpu opacity-0 transition duration-300",
          reveal && "!opacity-100 !pointer-events-auto"
        )}
      >
        <div className="relative w-full h-auto max-h-screen overflow-y-scroll">
          <Container
            className="bg-platinum flex-row justify-between items-center min-h-[100px] h-auto 2xl:!px-40"
            xPadding={true}
            yPadding="pt-20 xl:pt-12"
          >
            <div className="absolute xl:fixed left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-[calc(100%-72px)] xl:right-8 top-8 xl:top-12 z-[21]">
              <button
                type="button"
                className="flex flex-col outline-none w-[30px] text-brown-dull"
                onClick={onClick}
              >
                <div className="border-[0.5px] w-full border-brown-dull"></div>
                <div className="w-full text-center leading-[2rem] text-[2rem]">
                  X
                </div>
                <div className="border-[0.5px] w-full border-brown-dull"></div>
              </button>
            </div>
            <div className="w-full xl:w-11/12 mx-auto">
              <div className="max-w-full relative">
                <div className="overflow-x-scroll lg:overflow-x-auto w-auto">
                  <table className="w-full text-brown-tobacco uppercase">
                    <thead className="">
                      <tr>
                        <th className="px-4 lg:px-0 text-left bg-transparent px-2 py-2 text-sm lg:text-3xl 2xl:text-5xl font-cosmetic font-bold md:font-light opacity-70 !leading-[0.4]">
                          <h1 className="leading-none">
                            {data.row?.room_title}
                          </h1>
                        </th>
                        {data.header &&
                          data.header.map((head, index) => {
                            return (
                              head != "floor plan" && (
                                <th
                                  className="px-2 lg:px-0 py-2 font-bold text-clay text-xs xl:text-lg"
                                  key={index}
                                >
                                  {head}
                                </th>
                              )
                            );
                          })}
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr className="text-xs xl:text-base 2xl:text-lg !leading-none">
                        <td className="px-4 lg:px-0 text-left bg-transparent px-2 py-2 text-sm lg:text-3xl 2xl:text-5xl font-cosmetic font-bold md:font-light opacity-70 !leading-[0.4]">
                          <span className="text-brown-tobacco text-xs xl:text-base 2xl:text-lg uppercase font-bold font-brooklyn !leading-none">
                            {data.row?.floor}
                          </span>
                        </td>
                        <td className="bg-transparent px-2 py-2 font-light opacity-70">
                          {data.row?.bedrooms}
                        </td>
                        <td className="bg-transparent px-2 py-2 font-light opacity-70">
                          {data.row?.den}
                        </td>
                        <td className="bg-transparent px-2 py-2 font-light opacity-70">
                          {data.row?.terrace}
                        </td>
                        <td className="bg-transparent px-2 py-2 font-light opacity-70">
                          {data.row?.bathrooms}
                        </td>
                        <td className="bg-transparent px-2 py-2 font-light opacity-70">
                          {data.row?.exposure}
                        </td>
                        <td className="bg-transparent px-2 py-2 font-light opacity-70">
                          {currencyFormat.format(data.row?.price)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
          <Container
            className="bg-platinum flex-col justify-center items-center min-h-[500px] lg:min-h-screen lg:!px-20 xl:!px-40 2xl:!px-96"
            xPadding={true}
            yPadding="pt-4 xl:pt-10"
          >
            <div className="relative w-full mb-8 xl:mb-16">
              <img
                src={data.row?.room_image}
                className="object-contain object-center mx-auto max-w-full xl:h-[calc(100vh-220px)]"
                alt={data.row?.room_title}
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-10 text-brown-tobacco w-full xl:w-[80%] mb-8 xl:mb-16">
              <div className="flex flex-col w-full lg:w-1/2 divide-y-2 divide-swan mb-8 xl:mb-0">
                <h2 className="font-cosmetic uppercase text-3xl lg:text-5xl font-light pb-2 lg:pb-6">
                  location
                </h2>
                <div className="relative w-full pt-2 lg:pt-4">
                  <img
                    src={data.row?.location_image}
                    alt={data.row?.room_title}
                    className="object-contain object-top w-full h-auto"
                  />
                </div>
              </div>
              {data.row?.keys && data.row?.keys.length > 0 && (
                <div className="flex flex-col w-full lg:w-1/2 divide-y-2 divide-swan">
                  <h2 className="font-cosmetic uppercase text-3xl lg:text-5xl font-light pb-2 lg:pb-6">
                    key
                  </h2>
                  <div className="grid grid-rows-4 grid-flow-col w-full pt-2 lg:pt-4">
                    {data.row?.keys &&
                      data.row?.keys.map((row, index) => {
                        return (
                          <div key={index} className="flex py-1 md:py-2">
                            <div className="min-w-[50px] md:min-w-[65px] xl:min-w-[80px] font-bold text-xs md:text-sm">
                              {row.short}
                            </div>
                            <div className="font-light text-xs md:text-sm">
                              {row.detail}
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </Container>
          <Container
            className="bg-platinum flex-row justify-between items-center min-h-[100px] 2xl:!px-40"
            xPadding={true}
            yPadding="pb-10 xl:pb-20"
          >
            <div className="w-full flex justify-between border-t border-swan pt-6 xl:pt-10">
              <div>
                {idPrev != 0 && (
                  <div
                    onClick={() => {
                      onDataSetter(idPrev);
                    }}
                    className="cursor-pointer group flex gap-2 items-center text-brown-tobacco text-base lg:text-2xl xl:text-5xl font-cosmetic font-light"
                  >
                    <>
                      <ArrowLine strokeColor="#6B6343" rotate="rotate-180" />
                      <div className="hidden md:block pl-2 group-hover:pl-0 transition-all duration-300">
                        {data.prevRow?.room_title}
                      </div>
                    </>
                  </div>
                )}
              </div>
              <div className="group absolute xl:translate-y-[18%] left-1/2 -translate-x-1/2 uppercase bg-brown-tobacco hover:bg-white flex items-center justify-center transition-all duration-300">
                <div
                  onClick={onClick}
                  className="cursor-pointer group-hover:text-brown-tobacco text-white text-xs xl:text-base xl:text-lg py-2 px-8 transition-all duration-300"
                >
                  all floor plans
                </div>
              </div>
              <div>
                {idNext != 0 && (
                  <div
                    onClick={() => {
                      onDataSetter(idNext);
                    }}
                    className="cursor-pointer group flex gap-2 items-center text-brown-tobacco text-base lg:text-2xl xl:text-5xl font-cosmetic font-light"
                  >
                    <>
                      <div className="hidden md:block pr-2 group-hover:pr-0 transition-all duration-300">
                        {data.nextRow?.room_title}
                      </div>
                      <ArrowLine strokeColor="#6B6343" rotate="rotate-0" />
                    </>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      </section>
    )
  );
};
