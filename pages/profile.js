/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/layout";
import UserHeader from "@/components/userheader";

const profile = () => {
  return (
    <Layout>
      <div className="flex flex-1 flex-col space-y-5 p-0 overflow-y-auto">
        <UserHeader />
        <section class="gradient-form">
          <div class="py-5 px-6 h-full">
            <div class="flex justify-center items-center h-full g-2 text-gray-800">
              <div class="block bg-white shadow-lg rounded-lg">
                <div class="lg:flex  g-0 justify-center items-center">
                  <div class=" px-4 md:px-0">
                    <div class="md:p-12 md:mx-6">
                      <div class="text-center">
                        <img class="mx-auto w-48" src="./ibne.png" alt="logo" />
                        <h4 class="text-xl font-semibold mt-1 mb-12 pb-1">
                          Update your profile
                        </h4>
                      </div>
                      <form>
                        <p class="mb-4">Enter your profile details</p>
                        <div className="flex flex-row gap-1">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="First Name"
                            />
                          </div>
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Last Name"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-1">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="ID"
                            />
                          </div>
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Group"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-1">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Code"
                            />
                          </div>
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Mobile"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-1">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="In & Out"
                            />
                          </div>
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Status"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row gap-1">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Password"
                            />
                          </div>
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                              id="exampleFormControlInput1"
                              placeholder="Description"
                            />
                          </div>
                        </div>
                        <div class="text-center pt-1 mb-12 pb-1">
                          <button
                            class="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            type="button"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class=" flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none justify-center mr-10 ">
                    <div class="max-w-sm bg-transparent flex flex-col justify-center items-center ">
                      <a href="#">
                        <img
                          class="rounded-full w-[200px] h-[200px]"
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                          alt=""
                        />
                      </a>
                      <div class="p-5 text-center">
                        <a href="#">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Niel Sims
                          </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">
                          nielsims@company.com
                        </p>
                        <p class="mb-3 font-normal text-gray-700">
                          +1345124324
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default profile;
