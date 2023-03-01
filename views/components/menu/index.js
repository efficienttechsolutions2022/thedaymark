import clsx from "clsx";
import Image from "next/legacy/image";
import Link from "next/link";
import navRoutes from "utils/constants/route";

const listMenu = [
  {
    menu: "daymark",
    url: navRoutes.THEDAYMARK,
    thumb: "/images/menus/daymark.jpg",
  },
  {
    menu: "residences",
    url: navRoutes.THERESIDENCES,
    thumb: "/images/menus/residences.jpg",
  },
  {
    menu: "amenities",
    url: navRoutes.THEAMENITIES,
    thumb: "/images/menus/amenities.jpg",
  },
  {
    menu: "availability",
    url: navRoutes.footer.AVAILABILITY,
    thumb: "/images/menus/availability.jpg",
  },
  {
    menu: "neighborhood",
    url: navRoutes.THENEIGHBORHOOD,
    thumb: "/images/menus/neighborhood.jpg",
  },
  {
    menu: "gallery",
    url: navRoutes.GALLERY,
    thumb: "/images/menus/gallery.jpg",
  },
  {
    menu: "team",
    url: navRoutes.TEAMS,
    thumb: "/images/menus/team.jpg",
  },
  {
    menu: "contact",
    url: navRoutes.CONTACT,
    thumb: "/images/menus/contact.jpg",
  },
];

const Menu = ({ open = false, toggleMenu = () => {} }) => {
  return (
    <div
      className={clsx(
        "fixed w-full h-screen top-0 left-0 bg-platinum opacity-0 pointer-none transition-all duration-500",
        open && "z-[1030] opacity-100 pointer-auto"
      )}
    >
      <div className="flex w-full h-full items-center justify-center">
        <div
          className={clsx(
            "grid gap-x-8 gap-y-4 md:gap-8",
            "grid-cols-2 md:grid-cols-4"
          )}
        >
          {listMenu.length &&
            listMenu.map((menu, index) => {
              return (
                <div key={index} className="flex flex-col" onClick={toggleMenu}>
                  <Link
                    href={menu.url}
                    className="w-[30vw] sm:w-[25vw] md:w-[20vw]"
                  >
                    <div className="uppercase tracking-widest text-center xl:text-left text-brown-tobacco text-xs sm:text-base xl:text-2xl">
                      {menu.menu}
                    </div>
                    <div className="relative w-full overflow-hidden group">
                      <div className="relative aspect-square w-full">
                        <Image
                          src={menu.thumb}
                          layout="fill"
                          className={clsx(
                            "object-cover object-center w-full h-full scale-[1] transition-all duration-300 ease-none",
                            "group-hover:scale-[2] group-hover:duration-[10000ms]"
                          )}
                        />
                      </div>
                      <div
                        className={clsx(
                          "absolute top-0 left-0 w-full h-full opacity-0 bg-brown-dull transition duration-500",
                          "group-hover:opacity-70"
                        )}
                      ></div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Menu;
