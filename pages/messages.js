/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout";
import UserHeader from "@/components/userheader";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-1 flex-col space-y-5 p-0 overflow-y-auto">
        <UserHeader />
        <div className="container mx-auto text-gray-700">
          <div className="py-6 min-h-screen">
            <div className="flex border border-grey rounded shadow-lg h-full">
              {/* <!-- Left --> */}
              <div className="w-3/12 border hidden md:flex flex-col bg-gray-100">
                {/* <!-- Header --> */}
                <div className="py-2 px-3 flex flex-row justify-between items-center">
                  <div className="bg-white px-3 w-full flex items-center hover:cursor-pointer">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="./men1.jpeg"
                      />
                    </div>
                    <div className="ml-4 flex-1 py-4">
                      <div className="flex items-bottom justify-between">
                        <p className="text-red-500 font-medium">
                          Dries Vincent
                        </p>
                      </div>
                      <p className=" mt-1 text-sm">Marketing Manager</p>
                    </div>
                  </div>
                </div>

                {/* <!-- Search --> */}
                <div className="py-2 px-2 ">
                  <input
                    type="text"
                    className="w-full px-2 py-3 rounded-md bg-white text-sm"
                    placeholder="Search or start new chat"
                  />
                </div>

                {/* <!-- Contacts --> */}
                <div className="flex-1 overflow-auto">
                  <div className="bg-white px-3 flex items-center hover:cursor-pointer">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="./men2.jpeg"
                      />
                    </div>
                    <div className="ml-4 flex-1 border-b  py-4">
                      <div className="flex items-bottom justify-between">
                        <p className="">Kina Mayer</p>
                        <p className="text-xs">12:45 pm</p>
                      </div>
                      <p className=" mt-1 text-sm">Hold the line!</p>
                    </div>
                  </div>

                  <div className="bg-white px-3 flex items-center hover:cursor-pointer">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="./men3.jpeg"
                      />
                    </div>
                    <div className="ml-4 flex-1 border-b  py-4">
                      <div className="flex items-bottom justify-between">
                        <p className="">Lina Dry</p>
                        <p className="text-xs ">12:45 pm</p>
                      </div>
                      <p className=" mt-1 text-sm">Show me the money!</p>
                    </div>
                  </div>

                  <div className="bg-white px-3 flex items-center hover:cursor-pointer">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="./men4.jpg"
                      />
                    </div>
                    <div className="ml-4 flex-1 border-b  py-4">
                      <div className="flex items-bottom justify-between">
                        <p className="">Lina Dry</p>
                        <p className="text-xs ">12:45 pm</p>
                      </div>
                      <p className=" mt-1 text-sm">Show me the money!</p>
                    </div>
                  </div>

                  <div className="bg-white px-3 flex items-center hover:cursor-pointer">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="./men5.jpg"
                      />
                    </div>
                    <div className="ml-4 flex-1 border-b  py-4">
                      <div className="flex items-bottom justify-between">
                        <p className="">John Doe</p>
                        <p className="text-xs ">12:45 pm</p>
                      </div>
                      <p className=" mt-1 text-sm">Show me the money!</p>
                    </div>
                  </div>
                  <div className="bg-white px-3 flex items-center hover:cursor-pointer">
                    <div>
                      <img
                        className="h-12 w-12 rounded-full"
                        src="./men6.jpg"
                      />
                    </div>
                    <div className="ml-4 flex-1 border-b  py-4">
                      <div className="flex items-bottom justify-between">
                        <p className="">Lina Dry</p>
                        <p className="text-xs ">12:45 pm</p>
                      </div>
                      <p className=" mt-1 text-sm">Show me the money!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Right --> */}
              <div className="md:w-9/12 w-full border flex flex-col bg-white">
                {/* <!-- Header --> */}
                <div className="py-2 px-3  flex flex-row justify-between items-center">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-10 h-10 rounded-full"
                        src="./men5.jpg"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="">John Doe</p>
                    </div>
                    <div className="ml-4">
                      <div className="bg-green rounded-full w-[10px] h-[10px]" />
                    </div>
                  </div>

                  <div className="flex">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          fill="#263238"
                          fill-opacity=".5"
                          d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-heart"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="#263238"
                        strokeOpacity={".5"}
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </div>
                    <div className="ml-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path
                          fill="#263238"
                          fill-opacity=".5"
                          d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* <!-- Messages --> */}
                <div className="flex-1 overflow-auto">
                  <div className="py-2 px-3">
                    <div className="flex justify-center mb-2">
                      <div className="rounded py-2 px-4">
                        <p className="text-sm uppercase">February 10, 2023</p>
                      </div>
                    </div>

                    <div className="flex mb-2">
                      <div className="rounded-md rounded-bl-none py-2 px-3 bg-gray-200 text-gray-700">
                        <p className="text-sm mt-1">
                          He is. Just invited him to join.
                        </p>
                        <p className="text-right text-xs  mt-1">12:45 pm</p>
                      </div>
                    </div>

                    <div className="flex justify-end mb-2">
                      <div className="rounded-md rounded-br-none py-2 px-3 bg-red-500 text-white">
                        <p className="text-sm mt-1">Hi guys.</p>
                        <span className="text-right text-xs  mt-1">
                          12:45 pm
                        </span>
                      </div>
                    </div>
                    <div className="flex mb-2">
                      <div className="rounded-md rounded-bl-none py-2 px-3 bg-gray-200 text-gray-700">
                        <p className="text-sm mt-1">
                          Yes I am coming tomorrow at meeting.
                        </p>
                        <p className="text-right text-xs  mt-1">12:45 pm</p>
                      </div>
                    </div>
                    <div className="flex justify-end mb-2">
                      <div className="rounded-md rounded-br-none py-2 px-3 bg-red-500 text-white">
                        <p className="text-sm mt-1">Okay thanks for info.</p>
                        <span className="text-right text-xs  mt-1">
                          12:45 pm
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-end mb-2">
                      <div className="rounded-md rounded-br-none py-2 px-3 bg-red-500 text-white">
                        <p className="text-sm mt-1">See you soon take care.</p>
                        <span className="text-right text-xs  mt-1">
                          12:47 pm
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Input --> */}
                <div className=" px-4 py-4 flex items-center">
                  <div className="flex-1 mx-4">
                    <input
                      className="w-full border bg-gray-50 rounded px-2 py-2"
                      type="text"
                    />
                  </div>
                  <button className="p-2 bg-gray-100 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-send"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#ff2825"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                      <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
