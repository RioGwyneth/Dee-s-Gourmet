import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import logo from "../assets/imgs/logo.png";
import Button from "./Button";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0 flex  gap-3">
                <img
                  className="h-8 w-8 "
                  src={logo}
                  alt="Workflow"
                />
                <h1 className="flex items-center text-red-600 text-lg font-black">Dee’s Gourmet</h1>
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-2">
                  <a href="#"className=" text-zinc-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </a>

                  <a href="#" className="text-zinc-900 hover:text-red-600 px-3 py-2 rounded-md text-sm  font-medium">
                    Team
                  </a>

                  <a href="#" className="text-zinc-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                    Projects
                  </a>

                  <a href="#" className="text-zinc-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                    Calendar
                  </a>

                  <Button text="Contact Us" bgcolor="bg-red-600" padding="px-6 py-2" />

                </div>
              </div>
            </div>
            
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-red-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="hover:text-red-600 text-zinc-900 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-zinc-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-zinc-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <Button text="Contact Us" bgcolor="bg-red-600" padding=" py-2" width="w-full" />


              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
