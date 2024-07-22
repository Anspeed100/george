import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "#Breakingthe2", href: "/breakingthe2", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Take Action", href: "/take-action", current: false },
  { name: "FAQ", href: "/faq", current: false },
];

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
          <div className="mx-auto px-2 sm:px-6 lg:px-8 flex items-center  h-32">
            <div className="relative flex items-center justify-between w-full">
              <Link to="/" className="w-52 md:w-auto">
                <img alt="Logo" className="w-full h-auto" src={Logo} />
              </Link>
              <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center">
                  <Link to="/donate" 
                    className="bg-[#b91f26] text-white text-2xl rounded-md px-4 py-2 font-bold"
                  >
                    <span className="button-text">Donate</span>
                  </Link>
                </div>
                {/* BURGER BUTTON */}
                <Disclosure.Button className="z-30 w-12 inline-flex items-center justify-center text-red-700 p-2">
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
            </div>
          </div>

          {/* MOBILE NAV */}
          <Disclosure.Panel className="bg-[#fff] border w-[100%] md:w-[30%] h-[50%] fixed md:right-1 top-24 md:top-32 shadow-xl rounded-md flex flex-col items-center justify-center gap-1 md:gap-3">
            {updatedNavigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={classNames(
                  item.current
                    ? "border-b-4 border-red-700 font-bold md:text-2xl text-center"
                    : "font-bold text-center md:text-2xl",
                  "px-3 py-2 block"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
            <div className="md:hidden block mt-6">
            <Link to="/donate" 
                className="bg-[#b91f26] text-white text-xl rounded-md px-3 py-2 font-semibold"
              >
                Donate
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
