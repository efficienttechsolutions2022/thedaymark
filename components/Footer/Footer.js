import clsx from "clsx";
import Image from "next/legacy/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import navRoutes from "utils/constants/route";
import Container from "views/components/container";
import {
  Brev,
  Facebook,
  Handicap,
  Hines,
  Housing,
  Instagram,
  PCD,
  StampLuxury,
  TMD,
} from "views/components/icons";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={clsx("relative block bg-clay text-white", className)}
      data-scroll
      data-scroll-section
    >
      <Container
        className="flex-col xl:flex-row justify-center xl:justify-between items-center gap-4 2xl:!px-40"
        xPadding={true}
        yPadding="py-4 xl:py-10"
      >
        <div className="flex flex-col gap-4 md:gap-8 w-full xl:w-auto">
          <div className="flex flex-col gap-0 md:gap-8 lg:gap-0 xl:flex-row justify-between xl:px-10">
            <div className="flex flex-1 flex-col-reverse items-center lg:flex-row lg:justify-between">
              <StampLuxury
                className="w-24 h-24 xl:w-40 xl:h-40"
                color="#FFFFFF"
              />
              <div className="flex flex-1 flex-col items-center justify-center divide-y-2 divide-white xl:px-7">
                <ul className="w-full md:w-auto md:flex items-center columns-2 md:columns-auto text-xs xl:text-[0.7rem] 2xl:text-sm md:divide-x-2 md:divide-white mb-2 md:mb-0">
                  <li className="text-center tracking-widest py-2 md:py-0 md:my-7 px-0 md:px-4 xl:px-7 md:pl-0">
                    <Link
                      href={navRoutes.footer.FACTSHEET}
                      className="block uppercase font-light"
                    >
                      fact sheet
                    </Link>
                  </li>
                  <li className="text-center tracking-widest py-2 md:py-0 md:my-7 px-0 md:px-4 xl:px-7">
                    <Link
                      href={navRoutes.footer.PRESS}
                      className="block uppercase font-light"
                    >
                      press
                    </Link>
                  </li>
                  <li className="text-center tracking-widest py-2 md:py-0 md:my-7 px-0 md:px-4 xl:px-7">
                    <Link
                      href={navRoutes.footer.AVAILABILITY}
                      className="block uppercase font-light"
                    >
                      availability
                    </Link>
                  </li>
                  <li className="text-center tracking-widest py-2 md:py-0 md:my-7 px-0 md:px-4 xl:px-7 md:pr-0">
                    <Link
                      href={navRoutes.footer.ARRANGE}
                      className="block uppercase font-light"
                    >
                      arrange your visit
                    </Link>
                  </li>
                </ul>
                <ul className="w-full md:w-auto md:flex items-center text-xs xl:text-[0.7rem] 2xl:text-sm md:divide-x-2 md:divide-white pt-2 md:pt-0 mb-2 md:mb-0">
                  <li className="text-center uppercase tracking-widest py-2 md:py-0 md:my-7 px-0 md:px-4 xl:px-7 md:pl-0">
                    4 LIGHTHOUSE LANDING, SLEEPY HOLLOW, NY 10591
                  </li>
                  <li className="text-center uppercase tracking-widest py-2 md:py-0 md:my-7 px-0 md:px-4 xl:px-7">
                    <Link href="tel:9147322222">914.732.2222</Link>
                  </li>
                  <li className="text-center uppercase tracking-widest py-2 md:py-0 md:my-7 px-0 md:px-4 xl:px-7 md:pr-0">
                    <Link href="mailto:contact@thedaymark.com">
                      contact@thedaymark.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex xl:flex-row xl:justify-between">
              <div className="flex flex-1 flex-col items-center justify-center divide-y-0 xl:divide-y-2 divide-white">
                <ul className="hidden w-full md:w-auto xl:flex items-center columns-2 md:columns-auto text-xs xl:text-[0.7rem] 2xl:text-sm md:divide-x-2 md:divide-white mb-2 md:mb-0">
                  <li className="text-center py-2 md:py-0 md:my-7 lg:my-10 2xl:my-5 px-0 md:px-4 md:pl-0">
                    <a className="block uppercase invisible">empty string</a>
                  </li>
                </ul>
                <ul className="w-full md:w-auto flex justify-center items-center text-xs xl:text-sm pt-6 lg:pt-2 md:pt-0 mb-2 md:mb-0">
                  <li className="text-center uppercase tracking-widest py-2 md:py-0 xl:my-6 2xl:my-4 px-2 md:pl-4">
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      className="relative aspect-square w-[40px] h-[40px]"
                      alt="facebook link"
                    >
                      <Facebook.Footer className="w-[40px]" color="#ffffff" />
                    </a>
                  </li>
                  <li className="text-center uppercase tracking-widest py-2 md:py-0 xl:my-6 2xl:my-4 px-2 md:pr-4">
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      className="relative aspect-square w-[30px] h-[30px]"
                      alt="instagram link"
                    >
                      <Instagram.Footer className="w-[40px]" color="#ffffff" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex xl:flex-row xl:justify-between">
            <div className="flex flex-1 flex-col xl:flex-row items-center justify-center xl:pr-10">
              <ul className="flex items-center gap-10 mb-4 xl:mb-0">
                <li className="pl-0">
                  <Brev className="w-6 xl:w-12" />
                </li>
                <li>
                  <PCD className="w-20 xl:w-28" />
                </li>
                <li>
                  <Hines className="w-14 xl:w-20" />
                </li>
                <li className="pr-0">
                  <TMD className="w-14 xl:w-20" />
                </li>
              </ul>
              <div className="flex flex-1 flex-col gap-1 xl:gap-0.5 xl:ml-32 text-[7px] text-center xl:text-left xl:pr-16 2xl:pr-40">
                <p>
                  This advertisement is not an offering. It is a solicitation of
                  interest in the advertised property. No offering of the
                  advertised units can be made, and no deposits can be accepted,
                  or reservations, binding, or non-binding, can be made until an
                  offering plan is filed with the New York State Department of
                  Law. This advertisement is made pursuant to Cooperative Policy
                  Statement No. 1, issued by the New York State Department of
                  Law. File No. CP22-0040. The Daymark Condominium. Sponsor: LL
                  Parcel H, LLC, 135 E. 57th Street, 14th Floor, NY, NY 10022.
                </p>
                <p>
                  Identification is required of all consumers in regard to
                  purchasing and leasing a property. Exclusive Broker Agreements
                  are not required of consumers purchasing or leasing a
                  property. Pre-Approval of Purchase Loans and Pre-Approval or
                  Pre-Qualification of Leasing is not required prior to visiting
                  a property. All images are a combination of photography and
                  artist renderings and are provided for illustrative purposes
                  only. PRIVACY POLICY | NYS FAIR HOUSING
                </p>
              </div>
              <div className="flex flex-row justify-between items-center gap-4 pt-4 xl:pt-0 xl:pr-8">
                <div className="relative aspect-square w-[25px] h-[25px]">
                  <Handicap className="w-full h-full" />
                </div>
                <div className="relative aspect-square w-[25px] h-[25px]">
                  <Housing className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
