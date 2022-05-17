import React from 'react';

import logoAlt from '../../static/images/PrimaryLogo_01.png';
import logo from '../../static/images/PrimaryLogo_02.png';

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
              width="150px" />
          </a>
          <div className="hidden md:block absolute right-0 flex flex-grow items-center bg-transparent lg:shadow-none">
            <ul className="flex flex-row list-none ml-auto">
              <li className="flex items-center">
                <a
                  href="/rarity"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    (props.transparent
                      ? 'text-white hover:border-transparent'
                      : 'text-shinred-600') +
                      ' bg-transparent font-normal py-2 px-4 rounded'
                  }
                  >
                  Rarity
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="/play"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    (props.transparent
                      ? 'text-white hover:border-transparent'
                      : 'text-shinred-600') +
                      ' bg-transparent font-normal py-2 px-4 rounded'
                  }
                  >
                  Play to Earn
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="/token"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    (props.transparent
                      ? 'text-white hover:border-transparent'
                      : 'text-shinred-600') +
                      ' bg-transparent font-normal py-2 px-4 rounded'
                  }
                  >
                    $SINS Token
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://discord.com/invite/C4QB9M8bka"
                  target="_blank"
                  rel="noreferrer"
                  className={
                    (props.transparent
                      ? 'text-white border hover:border-transparent'
                      : 'text-shinred-600') +
                      ' bg-transparent font-normal py-2 px-4 rounded'
                  }
                  >
                  Join Discord
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
