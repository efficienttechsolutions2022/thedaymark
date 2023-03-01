import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import navRoutes from "utils/constants/route";
import Container from "views/components/container";
import { CloseX, LogoChar, LogoEOH } from "views/components/icons";
import styles from "./Header.module.scss";

const Header = ({
  reveal = true,
  color = "#ffffff",
  centerLogo = false,
  openedMenu = false,
  isShrinked = false,
  toggleMenu = () => {},
}) => {
  const navbarRef = useRef();
  const [shrinked, setShrink] = useState(false);

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
    <header
      id="header"
      ref={navbarRef}
      className={clsx(
        "bg-transparent w-full fixed z-10 top-0 transition-all duration-500 ease",
        reveal ? "!top-0" : "!-top-full",
        openedMenu && "!z-[1050] !duration-[0ms]",
        (shrinked || isShrinked) && !openedMenu && "!bg-platinum"
      )}
    >
      <Container
        className="transition-all duration-300 justify-between items-center header-container"
        yPadding={clsx("py-8 xl:py-12", (shrinked || isShrinked) && "!py-4")}
        xPadding={true}
      >
        {centerLogo && (
          <Link
            id="header-logo"
            href="/"
            className={clsx(
              "absolute left-1/2 -translate-x-1/2",
              openedMenu && "invisible"
            )}
          >
            <LogoEOH
              color={color}
              className={clsx((shrinked || isShrinked) && "!w-32 xl:!w-40")}
            />
          </Link>
        )}
        <div className={openedMenu && "invisible"}>
          <LogoChar color={color} className={clsx("w-6 xl:w-8")} />
        </div>
        <div className="flex gap-4 items-center">
          <Link
            href={navRoutes.CONTACT}
            className={clsx(
              "uppercase hidden md:block",
              openedMenu && "invisible"
            )}
            style={{
              color: color,
            }}
          >
            Contact
          </Link>
          {openedMenu ? (
            <button
              type="button"
              className="flex flex-col outline-none w-[30px]"
              style={{
                color: color,
              }}
              onClick={toggleMenu}
            >
              <div
                className="border-[0.5px] w-full"
                style={{
                  borderColor: color,
                }}
              ></div>
              <div className="w-full text-center leading-[2rem] text-[2rem]">
                X
              </div>
              <div
                className="border-[0.5px] w-full"
                style={{
                  borderColor: color,
                }}
              ></div>
            </button>
          ) : (
            <button
              type="button"
              className="flex flex-col outline-none w-[30px] space-y-2"
              onClick={toggleMenu}
            >
              <div
                className="border-[0.5px] w-full"
                style={{
                  borderColor: color,
                }}
              ></div>
              <div
                className="border-[0.5px] w-full"
                style={{
                  borderColor: color,
                }}
              ></div>
              <div
                className="border-[0.5px] w-full"
                style={{
                  borderColor: color,
                }}
              ></div>
            </button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
