import Container from "views/components/container";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { from, to } from "utils/constants/gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Layout from "components/Layout/Layout";
import clsx from "clsx";
import Image from "next/legacy/image";

gsap.registerPlugin(ScrollTrigger);

const theTeamLists = [
  {
    title: "BREV",
    role: "master developer",
    desc: `Headquartered in New York City, Biddle Real Estate Ventures (BREV) is a fully integrated real estate development company focused on mixed-use, master-planned communities, with proven expertise in resolving complex land-use and financing issues. The firm, along with the support of its affiliates, is dedicated to creating communities of the highest quality that reflect the local history, culture and context of their settings.With innovation, design creativity and an ever-watchful eye on new methods for lessening environmental impact, BREV is proud to build communities that people love to call home and uplift the growth of surround-ing neighborhoods. The company is led by a close-knit team of professionals who have been associated with the successful development of more than 5,000 new homes throughout the New York tristate areas and Northern Virginia.In addition to Edge-on-Hudson, BREV leads as Master Developer at Potomac Shores. Located just 30 miles south of Washington, DC, Potomac Shores is comprised of 1,920 acres along two miles of the Potomac River shoreline. The Project is entitled for over 3,900 single-family and multi-family residential units. Additionally, it features a publicly accessible Jack Nicklaus Signature Golf Course and Clubhouse, a 10,000 square foot recreation center, two on-site public schools, sports fields, over 850 acres of open space and preserved hard-wood forests, a future VRE train station and planned marina. Today, there are nearly 1,700 homes sold in the community, with another 1,000 lots and homes under construction. Potomac Shores was named 2016 Community of the Year at the Northern Virginia Building Industry Association “Great American Living Awards.”`,
  },
  {
    title: "PCD",
    role: "master developer",
    desc: `PCD's fully integrated team is involved in all real estate services.  The founding member, Jonathan Stein, has been developing real estate for more than 25 years in the northeastern US.  He leads a team of highly qualified professionals that possess the necessary expertise and experience to undertake and the development of some of the most complex real estate deals in the region.  To date, the PCD team has overseen the design, development, and construction of over 10,000 residential units and hundreds of thousands of square feet of commercial development in the greater New York City area and beyond.  Current holdings include developments in New Jersey, New York, Connecticut, and Pennsylvania.PCD recently completed 30 Court, a 58-unit ultra-luxury apartment community in Morristown, NJ, and Meadow Ridge, a 185-unit luxury apartment community in Newburgh, NY. PCD is currently developing The Atwater, a 421 unit luxury apartment community in Bergen County, NJ, and The Duet, a 124-unit luxury apartment community in White Plains, NY.`,
  },
  {
    title: "HINES",
    role: "development manager",
    desc: `Hines is a privately owned global real estate investment, development and management firm, founded in 1957, with a presence in 225 cities in 25 countries and $144.1 billion of assets under management—$75.5 billion in assets for which Hines serves as investment manager and $68.6 billion for which Hines provides third-party property-level services. Hines is a privately owned global real estate investment, development and management firm, founded in 1957, with a presence in 225 cities in 25 countries and $144.1 billion of assets under management—$75.5 billion in assets for which Hines serves as investment manager and $68.6 billion for which Hines provides third-party property-level services.`,
  },
  {
    title: "THE MARKETING DIRECTORS",
    role: "development advisory",
    desc: `The Marketing Directors is a renowned development advisory with over thirty-five years of experience working exclusively on behalf of real estate developers to design, market, and sell residential homes. The Marketing Directors team is a collective of strategic thinkers, mar-ket experts, and trusted partners. Headquartered in New York with offices and sales teams active across North America, The Marketing Directors has helped clients successfully sell-out hundreds of new developments accounting for more than $30 billion in total sales.`,
  },
  {
    title: "COOKFOX",
    role: "lead architect",
    desc: `COOKFOX Architects was founded in 2003 by Rick Cook and Bob Fox to pursue beautiful, innovative, and sustainable design. Now led by Rick and six partners, their core mission is to create environmentally responsible, holistic and biophilic architecture that fosters occupant well-being and a healthy urban landscape. Their work ranges in scope from small jewel projects to complex urban transformations, spanning multifamily residential and single-family homes to institutional and commercial projects. The firm designs high-performance, environmentally responsive spaces that meet the highest standards of environmental performance. Their projects include the LEED Platinum One Bryant Park; Skanska Construction’s office in the Empire State Building; and their former studio in the Flatiron District, the first LEED Platinum project in New York State. The current COOKFOX studio is certified both LEED Platinum and WELL Gold. Several new projects will meet standards “beyond LEED,” including a facility for the Riverside Clay Tennis Association in Riverside Park designed to fulfill the Living Building Challenge; and Betances V, a senior affordable housing and community facility in the Bronx designed for Passive House certification.`,
  },
];

const Teams = () => {
  const [headerReveal, setReveal] = useState(false);
  const triggerRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);

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

  return (
    <Layout
      head={{
        title: "The Teams",
        description: "The Teams - Behind The Expertise",
      }}
      header={{
        reveal: true,
        color: "#8b6e4b",
        centerLogo: true,
      }}
      footer={{
        style: "-mt-24 lg:mt-0 2xl:-mt-56",
      }}
    >
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
            <span ref={labelRef}>the teams</span>
          </h1>
          <h2 className="main__heading text-white overflow-hidden">
            <span ref={headingRef}>behind</span>
          </h2>
          <h3 className="main__heading--sub text-swan xl:text-[6vw] leading-none -mt-6 xl:-mt-12 overflow-hidden">
            <span ref={subHeadingRef}>The Expertise</span>
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
                    src="/images/galleries/18.jpg"
                    alt="/images/galleries/18.jpg"
                    layout="fill"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <div className="relative text-brown-tobacco grid gap-28 md:gap-16 lg:gap-28 2xl:gap-56 grid-cols-1 md:grid-cols-2 w-full p-4 lg:py-16 xl:px-28 2xl:py-20">
              {theTeamLists.map((team, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-start w-full divide-y-2 divide-swan"
                  >
                    <div className="flex h-auto items-end mb-4 lg:mb-6">
                      <h2 className="font-cosmetic text-3xl lg:text-4xl xl:text-5xl font-light uppercase">
                        {team.title}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-8 lg:gap-16 pt-4 lg:pt-6">
                      <h3 className="uppercase font-black text-base xl:text-lg">
                        {team.role}
                      </h3>
                      <p className="text-clay text-sm lg:text-lg">
                        {team.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Teams;
