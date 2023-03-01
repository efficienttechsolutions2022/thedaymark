import clsx from "clsx";
import Layout from "components/Layout/Layout";
import Link from "next/link";
import Container from "views/components/container";
import { StampLuxury } from "views/components/icons";

const Contact = () => {
  return (
    <Layout
      head={{
        title: "Contact",
        description:
          "Contact - New Condominiums Offering a Distinctive Point of View",
      }}
      header={{
        reveal: true,
        color: "#6B6343",
        centerLogo: true,
      }}
    >
      <section
        className="relative w-full transform-gpu"
        data-scroll-section
        data-scroll
        data-scroll-repeat
      >
        <Container
          className={clsx(
            "bg-swan flex-col justify-center items-center min-h-screen xl:!px-44",
            "after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[10vh] after:lg:top-[13vh] after:xl:top-[18vh]",
            "after:w-[calc(100vw-2rem)] after:lg:w-[calc(100vw-6rem)] after:border-t after:border-brown-tobacco"
          )}
          xPadding={true}
          yPadding="py-20 lg:pt-36"
        >
          <div className="absolute right-0 top-[10.5vh] lg:top-[13.5vh] xl:top-[18vh] px-4 md:px-12">
            <Link
              href="/"
              className={clsx(
                "text-xs 2xl:text-base text-swan tracking-widest leading-none bg-brown-tobacco transition-all duration-300",
                "hover:bg-white hover:text-brown-tobacco"
              )}
            >
              41.082544 -73.870554
            </Link>
          </div>
          <div className="absolute right-0 top-[14.5vh] lg:top-[18vh] xl:top-[22vh] px-4 md:px-12 -rotate-[20deg] opacity-70">
            <div className="relative aspect-square w-20 md:w-32 xl:w-40">
              <StampLuxury color="#E9E4E0" />
            </div>
          </div>
          <div className="relative xl:absolute lg:left-0 2xl:left-20 xl:top-1/2 xl:-translate-y-1/2 mb-6 xl:mb-0">
            <h1 className="uppercase font-cosmetic text-brown-tobacco text-5xl xl:text-[5.5vw] xl:-rotate-90 border-b border-brown-tobacco pb-4 xl:pb-8 2xl:pb-10">
              contact
            </h1>
          </div>
          <div className="w-full flex flex-col lg:px-20 xl:pl-40 2xl:pl-96 text-brown-tobacco">
            <div className="w-full lg:w-9/12">
              <h2 className="uppercase text-xl lg:text-3xl 2xl:text-4xl">
                New Condominiums Offering a Distinctive Point of View
              </h2>
              <div className="w-full xl:w-2/3 text-sm lg:text-base 2xl:text-lg 2xl:leading-tight mt-2 mb-4 lg:mt-4 lg:mb-6 2xl:mt-4 2xl:mb-6">
                <p>
                  Join our Priority List today to be among the first to
                  experience unparalleled Hudson River living.
                </p>
              </div>
            </div>
            <table className="w-full border-0">
              <tbody>
                <tr>
                  <td className="border border-brown-tobacco" colSpan={4}>
                    <input
                      type="text"
                      className="uppercase outline-none border-0 bg-transparent w-full h-full px-2 py-4 2xl:py-6 text-xs lg:text-base 2xl:text-xl text-brown-tobacco placeholder:text-brown-tobacco"
                      placeholder="fullname*"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-b border-x border-brown-tobacco"
                    colSpan={2}
                  >
                    <input
                      type="text"
                      className="uppercase outline-none border-0 bg-transparent w-full h-full px-2 py-4 2xl:py-6 text-xs lg:text-base 2xl:text-xl text-brown-tobacco placeholder:text-brown-tobacco"
                      placeholder="city*"
                      required
                    />
                  </td>
                  <td className="border-b border-x border-brown-tobacco">
                    <input
                      type="text"
                      className="uppercase outline-none border-0 bg-transparent w-full h-full px-2 py-4 2xl:py-6 text-xs lg:text-base 2xl:text-xl text-brown-tobacco placeholder:text-brown-tobacco"
                      placeholder="state*"
                      required
                    />
                  </td>
                  <td className="border-b border-x border-brown-tobacco">
                    <input
                      type="text"
                      className="uppercase outline-none border-0 bg-transparent w-full h-full px-2 py-4 2xl:py-6 text-xs lg:text-base 2xl:text-xl text-brown-tobacco placeholder:text-brown-tobacco"
                      placeholder="zip*"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className="w-1/2 border-b border-x border-brown-tobacco"
                    colSpan={2}
                  >
                    <input
                      type="text"
                      className="uppercase outline-none border-0 bg-transparent w-full h-full px-2 py-4 2xl:py-6 text-xs lg:text-base 2xl:text-xl text-brown-tobacco placeholder:text-brown-tobacco"
                      placeholder="email*"
                      required
                    />
                  </td>
                  <td
                    className="w-1/2 border-b border-x border-brown-tobacco"
                    colSpan={2}
                  >
                    <input
                      type="text"
                      className="uppercase outline-none border-0 bg-transparent w-full h-full px-2 py-4 2xl:py-6 text-xs lg:text-base 2xl:text-xl text-brown-tobacco placeholder:text-brown-tobacco"
                      placeholder="phone*"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-b border-x border-brown-tobacco"
                    colSpan={4}
                  >
                    <input
                      type="text"
                      className="uppercase outline-none border-0 bg-transparent w-full h-full px-2 py-4 2xl:py-6 text-xs lg:text-base 2xl:text-xl text-brown-tobacco placeholder:text-brown-tobacco"
                      placeholder="message"
                    />
                  </td>
                </tr>
                <tr>
                  <td
                    className="border-b border-x border-brown-tobacco"
                    colSpan={4}
                  >
                    <input
                      type="button"
                      className={clsx(
                        "cursor-pointer bg-brown-tobacco w-full h-full outline-none border-0 uppercase text-white px-2 py-4 2xl:py-6 text-xs lg:text-base 2xl:text-xl transition-all duration-300",
                        "hover:opacity-80"
                      )}
                      value="submit"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="w-full flex flex-col lg:flex-row items-center divide-0 lg:divide-x divide-brown-tobacco mt-4 lg:mt-0">
              <Link
                href="tel:9147322222"
                className="hover:underline pr-4 xl:pr-7"
              >
                914.732.2222
              </Link>
              <div className="text-center tracking-widest py-2 md:py-0 md:my-7 pl-4 xl:pl-7">
                4 Lighthouse Landing, Sleepy Hollow, NY 10591
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default Contact;
