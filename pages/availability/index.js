import Container from "views/components/container";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { from, to } from "utils/constants/gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Layout from "components/Layout/Layout";
import clsx from "clsx";
import Image from "next/legacy/image";
import ArrowLine from "views/components/icons/arrow-line";
import { roomLists } from "utils/data/rooms";
import { FloorPlan } from "views/components/modal-floor";

gsap.registerPlugin(ScrollTrigger);

const Availability = () => {
  const [modalReveal, setReveal] = useState(false);
  const triggerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const [planID, setPlanID] = useState(0);
  const [data, setData] = useState({});
  const [prevData, setPrevData] = useState({});
  const [nextData, setNextData] = useState({});

  const dataSetter = (id) => {
    setData(roomLists.lists.find((row) => row.id == id));
    prevDataSetter(id);
    nextDataSetter(id);
  };

  const prevDataSetter = (id) => {
    let theID = id ? id : planID;
    setPlanID(theID);

    if (theID > 1)
      setPrevData(roomLists.lists.find((row) => row.id == theID - 1));
  };

  const nextDataSetter = (id) => {
    let theID = id ? id : planID;
    setPlanID(theID);

    if (theID < roomLists.lists.length)
      setNextData(roomLists.lists.find((row) => row.id == theID + 1));
  };

  const onClickPlan = () => {
    setReveal(!modalReveal);
  };

  const getData = (id) => {
    onClickPlan();
    setPlanID(id);
    dataSetter(id);
    prevDataSetter(id);
    nextDataSetter(id);
  };

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

  const currencyFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Layout
      head={{
        title: "Availability",
        description: "Availability - Explore your options",
      }}
      header={{
        reveal: true,
        color: "#8b6e4b",
        centerLogo: true,
      }}
      footer
    >
      <FloorPlan
        id={planID}
        totalRooms={roomLists.lists.length}
        reveal={modalReveal}
        onClick={onClickPlan}
        onDataSetter={dataSetter}
        data={{
          header: roomLists.header,
          row: data,
          prevRow: prevData,
          nextRow: nextData,
        }}
      />
      <section
        className="relative w-full transform-gpu"
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
            <span ref={labelRef}>availability</span>
          </h1>
          <h2 className="main__heading text-white overflow-hidden">
            <span ref={headingRef}>explore</span>
          </h2>
          <h3 className="main__heading--sub text-swan xl:text-[6vw] leading-none -mt-6 xl:-mt-12 overflow-hidden">
            <span ref={subHeadingRef}>Your Options</span>
          </h3>
        </Container>
      </section>
      <section
        className="relative w-full bg-white transform-gpu"
        data-scroll
        data-scroll-repeat
        data-scroll-section
      >
        <div className="relative w-full -translate-y-32 lg:-translate-y-48">
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
                    src="/images/explores/the-residences/hero.jpg"
                    alt="/images/explores/the-residences/hero.jpg"
                    layout="fill"
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 flex flex-col mt-16 mb-24">
              <div className="flex flex-col w-full mb-8">
                <h4
                  className={clsx(
                    "main__heading text-swan overflow-hidden !text-[8vw] lg:!text-[5vw] 2xl:!text-[5.5vw] !leading-[0.65] lg:!leading-[0.85] !opacity-100",
                    "!text-left"
                  )}
                >
                  <span className="py-2">visit our on-site</span>
                </h4>
                <h4
                  className={clsx(
                    "main__heading text-swan overflow-hidden !text-[8vw] lg:!text-[5vw] 2xl:!text-[5.5vw] !leading-[0.65] lg:!leading-[0.85] !opacity-100",
                    "!text-left"
                  )}
                >
                  <span className="py-2">sales gallery today</span>
                </h4>
              </div>
              <h6 className="uppercase lg:tracking-[0.5em] text-swan">
                make an appoinment
              </h6>
            </div>
            <div className="w-full xl:w-11/12">
              <div className="max-w-full relative">
                <div className="overflow-x-scroll lg:overflow-x-auto w-auto">
                  <table className="divide-y-2 divide-swan w-full text-brown-tobacco text-xs md:text-sm 2xl:text-lg uppercase tracking-[0.15em]">
                    <thead className="">
                      <tr>
                        <th className="p-4"></th>
                        {roomLists.header.map((head, index) => (
                          <th className="p-4 font-bold text-clay" key={index}>
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="text-center divide-y-2 divide-swan">
                      {roomLists.lists.map((list, index) => (
                        <tr
                          key={index}
                          className="group text-xs md:text-sm 2xl:text-base"
                        >
                          <td className="group-hover:opacity-100 group-hover:bg-platinum transition-all duration-300 bg-transparent px-2 md:px-4 py-4 md:py-8 text-lg lg:text-3xl font-cosmetic font-light opacity-70">
                            {list.room}
                          </td>
                          <td className="group-hover:opacity-100 group-hover:bg-platinum transition-all duration-300 bg-transparent px-2 md:px-4 py-4 md:py-8 font-light opacity-70">
                            {list.bedrooms}
                          </td>
                          <td className="group-hover:opacity-100 group-hover:bg-platinum transition-all duration-300 bg-transparent px-2 md:px-4 py-4 md:py-8 font-light opacity-70">
                            {list.den}
                          </td>
                          <td className="group-hover:opacity-100 group-hover:bg-platinum transition-all duration-300 bg-transparent px-2 md:px-4 py-4 md:py-8 font-light opacity-70">
                            {list.terrace}
                          </td>
                          <td className="group-hover:opacity-100 group-hover:bg-platinum transition-all duration-300 bg-transparent px-2 md:px-4 py-4 md:py-8 font-light opacity-70">
                            {list.bathrooms}
                          </td>
                          <td className="group-hover:opacity-100 group-hover:bg-platinum transition-all duration-300 bg-transparent px-2 md:px-4 py-4 md:py-8 font-light opacity-70">
                            {list.exposure}
                          </td>
                          <td className="group-hover:opacity-100 group-hover:bg-platinum transition-all duration-300 bg-transparent px-2 md:px-4 py-4 md:py-8 font-light opacity-70">
                            <div
                              className="cursor-pointer hover:underline"
                              onClick={() => getData(list.id)}
                            >
                              {list.floor_plan}
                            </div>
                          </td>
                          <td className="group-hover:opacity-100 group-hover:bg-platinum transition-all duration-300 bg-transparent px-2 md:px-4 py-4 md:py-8 font-light opacity-70">
                            {currencyFormat.format(list.price)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Availability;
