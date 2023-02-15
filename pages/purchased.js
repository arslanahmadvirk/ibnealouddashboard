/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "@/components/layout";
import Card from "@/components/card";
import UserHeader from "@/components/userheader";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Purchased = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <Layout>
      <div className="flex flex-1 flex-col space-y-5 p-0 overflow-y-auto">
        <UserHeader />
        <div className=" relative shadow-md sm:rounded-lg mb-60 md:mx-12 mt-5">
          <div className="flex flex-row justify-start gap-5 ml-5 items-center">
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Status
              </label>
              <select
                id="countries"
                class="bg-gray-50 border w-[200px] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5  "
              >
                <option selected>All</option>
                <option value="US">All</option>
              </select>
            </div>
            <div>
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Car VIN
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5  "
              >
                <option selected>Select Car</option>
                <option value="US">FSEFW4RWVDFSCVA33</option>
                <option value="CA">GDSFE45532DGSFSEG</option>
                <option value="FR">A435THFGVSGWERGER</option>
                <option value="DE">GSRGTWE523532GSSF</option>
              </select>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none mt-7"
              >
                Search
              </button>
            </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 ">
            <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
              Purchased Cars
            </caption>
            <thead className="text-xs text-gray-700 uppercase bg-gray-300  ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Row
                </th>
                <th scope="col" className="py-3 px-6">
                  BrandModel
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  LotNo
                </th>
                <th scope="col" className="py-3 px-6">
                  VIN
                </th>
                <th scope="col" className="py-3 px-6">
                  YearModel
                </th>
                <th scope="col" className="py-3 px-6">
                  Color
                </th>
                <th scope="col" className="py-3 px-6">
                  Image
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                className="bg-white border-b cursor-pointer"
                onClick={openModal}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  1
                </th>
                <td className="py-4 px-6">BMW -Series3-340I</td>
                <td className="py-4 px-6">BMW-Series3-340I 2022</td>
                <td className="py-4 px-6">64079312</td>
                <td className="py-4 px-6">3MGFSDF5234423V</td>
                <td className="py-4 px-6">2022</td>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">
                  <img
                    src="http://ibnalaoud.com/Contents/Images/Car/2023-01/20230121_085056_3MW5U7J07N8C61539.jpg"
                    alt=""
                    className="w-[70px] h-[70px] object-cover"
                  />
                </td>
              </tr>
              <tr
                className="bg-white border-b cursor-pointer "
                onClick={openModal}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  2
                </th>
                <td className="py-4 px-6">BMW -Series3-340I</td>
                <td className="py-4 px-6">BMW-Series3-340I 2022</td>
                <td className="py-4 px-6">64079312</td>
                <td className="py-4 px-6">3MGFSDF5234423V</td>
                <td className="py-4 px-6">2022</td>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">
                  <img
                    src="http://ibnalaoud.com/Contents/Images/Car/2023-01/20230121_085056_3MW5U7J07N8C61539.jpg"
                    alt=""
                    className="w-[70px] h-[70px] object-cover"
                  />
                </td>
              </tr>
              <tr
                className="bg-white border-b cursor-pointer "
                onClick={openModal}
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  3
                </th>
                <td className="py-4 px-6">BMW -Series3-340I</td>
                <td className="py-4 px-6">BMW-Series3-340I 2022</td>
                <td className="py-4 px-6">64079312</td>
                <td className="py-4 px-6">3MGFSDF5234423V</td>
                <td className="py-4 px-6">2022</td>
                <td className="py-4 px-6">White</td>
                <td className="py-4 px-6">
                  <img
                    src="http://ibnalaoud.com/Contents/Images/Car/2023-01/20230121_085056_3MW5U7J07N8C61539.jpg"
                    alt=""
                    className="w-[70px] h-[70px] object-cover"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <nav
            className="flex justify-between items-center pt-4 mx-5 mb-5 mt-5"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 ">
              Showing <span className="font-semibold text-gray-900">1-10</span>{" "}
              of <span className="font-semibold text-gray-900">1000</span>
            </span>
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700  "
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700     "
                >
                  <span className="sr-only">Next</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src="http://ibnalaoud.com/Contents/Images/Car/2023-01/20230121_085056_3MW5U7J07N8C61539.jpg"
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                          BMW-Series3-340I 2022
                        </h5>
                      </a>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        BrandModel: BMW-Series3-340I
                      </p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        VIN: 3MGFSDF5234423V
                      </p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Model Year: 2022
                      </p>
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Color: White
                      </p>
                      {/* <a
                        href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Read more
                        <svg
                          aria-hidden="true"
                          class="w-4 h-4 ml-2 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  );
};

export default Purchased;
