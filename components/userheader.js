/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function UserHeader() {
  const [menu, showMenu] = useState(false);
  const [user, showUser] = useState(false);
  const [notifications, showNotifications] = useState(false);
  const router = useRouter();

  //   const handleLogOut = (e) => {
  //     e.preventDefault();
  //     localStorage.removeItem("isLoggedIn");
  //     router.push("/login");
  //     toast.success("Logout Successfull", {
  //       position: toast.POSITION.TOP_CENTER,
  //     });
  //   };

  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 bg-[#00033a] py-2 relative shadow-md">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="flex justify-start items-center">
            <button className="hidden p-2 mr-3 text-gray-600 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100  dark:hover:text-white dark:hover:bg-gray-700">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              onClick={() => showMenu(!menu)}
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <svg
                aria-hidden="true"
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Toggle sidebar</span>
            </button>
          </div>
          <div className="flex items-center lg:order-2 relative">
            <button
              type="button"
              className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="dropdown"
              onClick={() => showUser(!user)}
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user photo"
              />
            </button>
            {user ? (
              <div className="z-50 absolute my-4 top-5 right-0 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <div className="py-3 px-4">
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    Neil sims
                  </span>
                  <span className="block text-sm font-light text-gray-500 truncate dark:text-gray-400">
                    neilsims@company.com
                  </span>
                </div>
                <ul
                  className="py-1 font-light text-gray-500 dark:text-gray-400"
                  aria-labelledby="dropdown"
                >
                  <Link href="/profile" passHref>
                    <li>
                      <a className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white cursor-pointer">
                        My profile
                      </a>
                    </li>
                  </Link>
                </ul>
                <ul
                  className="py-1 font-light text-gray-500 dark:text-gray-400"
                  aria-labelledby="dropdown"
                >
                  <li>
                    <a
                      className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={(e) => handleLogOut(e)}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}
