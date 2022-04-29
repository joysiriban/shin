import React from 'react';

import logoAlt from '../../static/images/shin_logo_red.png';
import logo from '../../static/images/shin_logo_white.png';

const Navbar = (props) => {
  return (
    <nav
      className={
        (props.transparent
          ? "absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
          " flex items-center justify-between px-2 py-3 navbar-expand-lg"
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between items-center">
          <a
            className={
              (props.transparent ? 'text-white' : 'text-gray-800') +
              " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
            }
            href="/"
          >
            <img
              src={
                (props.transparent
                  ? logoAlt
                  : logo
                  )
              }
              alt="TEST Logo"
              width="50px" />
          </a>
          <div className="flex flex-grow items-center bg-transparent lg:shadow-none">
            <ul className="flex flex-row list-none ml-auto">
              <li className="flex items-center">
                <a
                  href="https://ebank.test.com/?page=login-form"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    (props.transparent
                      ? 'text-white hover:border-transparent'
                      : 'text-pink-600 shadow') +
                      ' bg-transparent font-normal py-2 px-4 rounded'
                  }
                  >
                  Rarity
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://ebank.test.com/?page=login-form"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    (props.transparent
                      ? 'text-white hover:border-transparent'
                      : 'text-pink-600 shadow') +
                      ' bg-transparent font-normal py-2 px-4 rounded'
                  }
                  >
                  Roadmap
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://ebank.test.com/?page=login-form"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    (props.transparent
                      ? 'text-white hover:border-transparent'
                      : 'text-pink-600 shadow') +
                      ' bg-transparent font-normal py-2 px-4 rounded'
                  }
                  >
                  FAQ
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://ebank.test.com/?page=login-form"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    (props.transparent
                      ? 'text-white hover:border-transparent'
                      : 'text-pink-600 shadow') +
                      ' bg-transparent font-normal py-2 px-4 rounded'
                  }
                  >
                  Team Shinigami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
