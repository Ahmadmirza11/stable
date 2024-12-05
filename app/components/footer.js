import React from "react";

export const Footer = () => {
  return (
    <div>
      <footer className=" text-center text-surface/75 dark:bg-black dark:text-white/75 lg:text-left">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="">
              <h6 className="mb-4 flex items-center justify-between font-semibold uppercase md:justify-start">
             
                Valix
              </h6>
              <p>
                The fastest and simple way to generate growing business
                solutions with our software
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Contacts
              </h6>
              <p className="mb-4">
                <a href="#!">Contact vilax</a>
              </p>
              <p className="mb-4">
                <a href="#!">Email Sales</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Company
              </h6>
              <p className="mb-4">
                <a href="#!">About</a>
              </p>
              <p className="mb-4">
                <a href="#!">Leadership</a>
              </p>
              <p className="mb-4">
                <a href="#!">Carear</a>
              </p>
              <p className="mb-4">
                <a href="#!">Rafrale Program</a>
              </p>

              <p className="mb-4">
                <a href="#!">Affiliate Program</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                Privacy& Security
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Privacy Policy
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Term of uses
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
                Vulnerability Disclosure Program
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
               GDRP
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start">
               Statment
              </p> <p className="mb-4 flex items-center justify-center md:justify-start">
               Google API
              </p>

              <p className="flex items-center justify-center md:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5"></span>+ 01 234
                567 89
              </p>
            </div>
          </div>
        </div>

        <div className="bg-black/5 p-6 text-center">
          <span>© 2023 Copyright:</span>
          <a className="font-semibold" href="https://tw-elements.com/">
            TW Elements
          </a>
        </div>
      </footer>
    </div>
  );
};
