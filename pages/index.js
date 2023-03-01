import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import navRoutes from "utils/constants/route";
import ExploreBlock from "views/components/explore-block";
import { Distinctive, Hero } from "views/pages/home";
import FooterHome from "components/Footer/FooterHome";
import { HeroMobile, DistinctiveMobile } from "views/pages/home/mobile";
import Layout from "views/components/layout";
import { useMediaQuery } from "react-responsive";
import ReactFullpage from "@fullpage/react-fullpage";

const exploreSections = [
  {
    title: {
      text: "the daymark",
    },
    image: {
      src: "/images/homepage/the-daymark.jpg",
      alt: "explore - the daymark",
    },
    explore: {
      url: navRoutes.THEDAYMARK,
    },
    gradient: false,
  },
  {
    title: {
      text: "the residences",
    },
    image: {
      src: "/images/homepage/the-residences.jpg",
      alt: "explore - the residences",
    },
    explore: {
      url: navRoutes.THERESIDENCES,
    },
    gradient: false,
  },
  {
    title: {
      text: "the amenities",
    },
    image: {
      src: "/images/homepage/the-amenities.jpg",
      alt: "explore - the amenities",
    },
    explore: {
      url: navRoutes.THEAMENITIES,
    },
    gradient: false,
  },
  {
    title: {
      text: "the neighborhood",
    },
    image: {
      src: "/images/homepage/neighborhood.jpg",
      alt: "neighborhood - The neighborhood",
    },
    explore: {
      url: navRoutes.THENEIGHBORHOOD,
    },
    gradient: true,
  },
];

export default function Home() {
  const [headerReveal, setReveal] = useState(false);
  const [shrinked, setShrink] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  let destIndex = 0;
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1279px)" });
  function onLeave(origin, destination, direction) {
    if (destination.index === 0) setShrink(false);
    else setShrink(true);
  }

  function onAfterLoad(origin, destination, direction, trigger) {}

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      )
        setShrink(true);
      else setShrink(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shrinked]);

  return (
    <Layout
      head={{
        title: "The Daymark",
        description: "The Daymark - Edge on Hudson",
      }}
      header={{
        reveal: headerReveal,
        color: shrinked ? "#8b6e4b" : "#ffffff",
        centerLogo: true,
        shrinked: shrinked,
      }}
      footer={!isDesktopOrLaptop}
    >
      {isDesktopOrLaptop && (
        <>
          <ReactFullpage
            fitToSection={true}
            css3={true}
            scrollingSpeed={1500}
            paddingBottom="0"
            responsiveWidth={1024}
            licenseKey={"I93K9-3CP18-UIB67-PILO9-UQAUM"}
            onLeave={onLeave.bind(this)}
            afterLoad={onAfterLoad.bind(this)}
            render={({ state, fullpageApi }) => {
              destIndex = fullpageApi?.getActiveSection().index;
              return (
                <ReactFullpage.Wrapper>
                  <Hero
                    headerReveal={headerReveal}
                    setReveal={setReveal}
                    fpApi={fullpageApi}
                  />
                  <Distinctive
                    reveal={destIndex === 1}
                    reversed={destIndex !== 1}
                    fpApi={fullpageApi}
                  />
                  {exploreSections.length &&
                    exploreSections.map((section, index) => {
                      return (
                        <ExploreBlock
                          key={index}
                          title={section.title}
                          image={section.image}
                          explore={section.explore}
                          gradient={section.gradient}
                          isDesktop={true}
                          reveal={destIndex - 2 === index}
                          reversed={destIndex - 2 !== index}
                        />
                      );
                    })}
                  <FooterHome className="section fp-auto-height fp-auto-height-responsive" />
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </>
      )}
      {isTabletOrMobile && (
        <>
          <HeroMobile headerReveal={headerReveal} setReveal={setReveal} />
          <DistinctiveMobile />
          {exploreSections.length &&
            exploreSections.map((section, index) => {
              return (
                <ExploreBlock
                  key={index}
                  title={section.title}
                  image={section.image}
                  explore={section.explore}
                  bgColor={section.bgColor}
                  stampColor={section.stampColor}
                  isDesktop={false}
                />
              );
            })}
        </>
      )}
    </Layout>
  );
}
