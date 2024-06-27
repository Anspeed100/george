import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/assets_4.png"
import LogoAlt from "../assets/logo.png"

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "#Breakingthe2", href: "/breakingthe2", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Take Action", href: "/take-action", current: false },
  { name: "Events/Roadmap", href: "/events", current: false },
];

const mobile_navigation = [
  { name: "Home", href: "/", current: false },
  { name: "#Breakingthe2", href: "/breakingthe2", current: false },
  { name: "About", href: "/about", current: false },
  { name: "Take Action", href: "/take-action", current: false },
  { name: "Events/Roadmap", href: "/events", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AltNavbar({ useRed }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const updatedNavigation = navigation.map((item) => ({
    ...item,
    current: item.href === currentPath,
  }));

  return (
    <Disclosure as="nav" className={`bg-transparent nav-bg ${useRed ? 'red-nav-bg' : 'no-red-nav-bg'}`}>
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8 h-4 lg:h-24 md:h-24">
            <div className="relative grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 items-center justify-between h-16">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="z-30 inline-flex items-center justify-center rounded-md text-red-700 focus:outline-none ring-0 ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-9 w-9 white" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="justify-start flex-shrink-0 flex sm:justify-start">
                <h6 className="uppercase font-semibold text-black flex items-center justify-center md:justify-start">
                  <Link to={'/'}>
                    <img alt="" className="w-96 p-auto lg:p-4 md:p-4 hidden lg:block md:block" src={Logo} />
                    <img alt="" className="w-44 block lg:hidden md:hidden" src={Logo}/>
                  </Link>
                </h6>
              </div>
              <div className="col-span-3 flex-1 flex items-center justify-end sm:items-stretch z-1 nav-items-margin">
                <div className="hidden sm:block">
                  <div className="flex space-x-2">
                    {updatedNavigation.map((item) => (
                      <a href={item.href}
                        key={item.name}
                        className={classNames(
                          item.current
                            ? `${ useRed ? 'alt-nav-text' : 'nav-text' }`
                            : "cursor-pointer",
                          `px-3 py-2 rounded-md text-lg font-normal ${useRed ? 'text-white' : 'text-black'}`
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex lg:justify-end pl-4 lg:items-center lg:gap-4 lg:w-auto">
                  <a href="#" spy={true} smooth={true}
                    className={"button-primary-alt button-primary"}
                  >
                    <span className='button-text'>Donation</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden mobile-nav-bg">
            <div className="px-2 pb-3">
              {updatedNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                          item.current
                            ? "mobile-nav-text"
                            : "mobile-nav-text-normal",
                            `px-3 py-2 block`
                        )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <div className="flex justify-center items-center">
                <a href="#" spy={true} smooth={true}
                  className={"button-primary"}
                >
                  <span className='button-text'>Donation</span>
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
