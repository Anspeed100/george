import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoAlt from "../assets/assets_4.png";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "#Breakingthe2", href: "/breakingthe2", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Take Action", href: "/take-action", current: false },
  { name: "Events/Roadmap", href: "/events", current: false },
];

// const mobile_navigation = [
//   { name: "Home", href: "/", current: false },
//   { name: "#Breakingthe2", href: "/breakingthe2", current: false },
//   { name: "About", href: "/about", current: false },
//   { name: "Take Action", href: "/take-action", current: false },
//   { name: "Events/Roadmap", href: "/events", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ useRed }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === currentPath,
  }));

  return (
    <Disclosure
      as="nav"
      className={`bg-transparent nav-bg ${useRed ? "" : "trans-nav-bg-fixed"}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 md:h-32 flex items-center shadow-lg ">
            <div className="relative grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-center justify-between h-24  ">
              <div className="absolute inset-y-0 right-0 flex items-center gap-8 ">
                <div className="md:block justify-center items-center hidden ">
                  <a
                    href="asd"
                    spy={true}
                    smooth={true}
                    className="bg-[#b91f26] text-white text-2xl rounded-md px-4 py-2 font-bold"
                  >
                    <span className="button-text">Donate</span>
                  </a>
                </div>
                {/* BURGER BUTTON*/}
                <Disclosure.Button className="z-30 w-12 inline-flex items-center justify-center  text-red-700  ">
                  {open ? (
                    <XIcon
                      className="block h-9 w-9 text-black"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuIcon className="block h-12 w-12" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="justify-start flex sm:justify-start ">
                <Link to={"/"} className="w-[470px]">
                  {/* {useRed ? (
                      <img
                        alt=""
                        className="w-96 p-4 hidden lg:block md:block"
                        src={Logo}
                      />
                    ) : (
                      <img
                        alt=""
                        className="w-96 p-4 hidden lg:block md:block"
                        src={Logo}
                      />
                    )} */}

                  <img alt="" className="w-52  md:w-[470px]  " src={Logo} />
                </Link>
              </div>
              {/* <div className="col-span-3 flex-1 flex items-center justify-end sm:items-stretch z-1 nav-items-margin">
                <div className="hidden sm:block md:flex items-center">
                  <div className="flex space-x-2">
                    {updatedNavigation.map((item) => (
                      <a
                        href={item.href}
                        key={item.name}
                        className={classNames(
                          item.current ? "nav-text" : "cursor-pointer",
                          `px-3 py-2 rounded-md text-lg font-normal ${
                            useRed ? "text-white" : "text-black"
                          }`
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex lg:justify-end pl-4 lg:items-center lg:gap-4 lg:w-auto">
                  <a
                    href="#"
                    spy={true}
                    smooth={true}
                    className={"button-primary"}
                  >
                    <span className="button-text">Donation</span>
                  </a>
                </div>
              </div> */}
            </div>
          </div>

          {/* MOBILE NAV */}

          <Disclosure.Panel className="bg-[#fff] border w-[100%] md:w-[60%] h-[60%]  fixed  md:right-1  top-24 md:top-32 shadow-xl rounded-md flex flex-col items-center justify-center gap-1 md:gap-3 ">
            {updatedNavigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "border-b-4 border-red-700 font-bold md:text-2xl text-center"
                    : "font-bold text-center md:text-2xl ",
                  `px-3 py-2 block`
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}

            <div className="md:hidden block mt-6 ">
              <a
                href="asd"
                spy={true}
                smooth={true}
                className=" bg-[#b91f26] text-white text-xl rounded-md px-3 py-2 font-semibold "
              >
                Donate
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
