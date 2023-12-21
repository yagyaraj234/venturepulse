import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-4 sm:px-20 md:grid-cols-2 xl:grid-cols-4 xl:px-10 border-t">
        <div className="max-w-sm">
          <div className="mb-6 flex h-10 items-center space-x-2">
           
            <span className="text-lg font-medium">Ventures Pulse ❤️ </span>
          </div>
          <div className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ad a
            officia ea expedita!
          </div>
        </div>

        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4">Links</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Demo
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Press
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Support Hub
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600 hover:underline" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="">
          <div className="flex flex-col">
            <div className="mb-4">
              <a
                href="https://www.producthunt.com/products/Apple?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-Apple"
                target="_blank"
              >
                
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-screen-xl flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:px-20 lg:flex-row lg:justify-between lg:text-left xl:px-10">
          <p className="">© 2023 Ventures Pulse | All Rights Reserved</p>
          <p className="">
            <a className="" href="#">
              Privacy Policy
            </a>
            <span>|</span>
            <a className="" href="#">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
