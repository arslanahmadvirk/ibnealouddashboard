import Card from "../components/card";
import Layout from "../components/layout";
import StatisticCard from "../components/statistic-card";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import NotificationIcon from "../components/svgs/notification-icon";
import SearchIcon from "../components/svgs/search-icon";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import CarIcon from "../components/svgs/car-icon";
import ChevronDownIcon from "../components/svgs/chevron-down-icon";
import UserHeader from "../components/userheader";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Total", "Paid", "Remaining"],
  datasets: [
    {
      label: "Total",
      data: [78581.885, 42026.668, 36555.217],
      backgroundColor: ["#006AFF", "#52C93F", "#FF2727"],
    },
  ],
};

const carNumbers = [
  "BK 123123 AB",
  "BK 234324 AB",
  "BK 162565 AB",
  "BK 653576 AB",
];

export default function Home() {
  const [carNumber, setCarNumber] = useState("");
  const [query, setQuery] = useState("");

  // Replace with data from api
  const filteredCarNumber =
    query === ""
      ? carNumbers
      : carNumbers.filter((number) => {
          return number.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Layout>
      {/* Todays Statistic */}
      <div className="flex flex-1 flex-col space-y-5 p-0 overflow-y-auto">
        <UserHeader />
        {/* Car Availablity */}
        <Card className="px-6 pt-8 pb-10">
          <section className="text-gray-600 body-font">
            <div className=" px-1 py-1 mx-auto">
              <div className="flex -m-4 gap-1">
                <div className="p-1 lg:w-1/4 transform transition duration-500 hover:scale-105 ">
                  <div className="flex flex-row justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 pt-3 pb-1 overflow-hidden relative rounded-t-md">
                    <div>
                      <h1 className=" text-[35px] font-bold text-white mb-3">
                        26
                      </h1>
                      <p className="leading-relaxed mb-3 text-white text-[16px]">
                        Purchased Cars
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-car-front opacity-25"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z" />
                        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z" />
                      </svg>
                    </div>
                  </div>
                  <Link href="./purchased" passHref>
                    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-b-md cursor-pointer">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <h1 className="text-[15px] text-center text-white font-normal">
                          More info
                        </h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right-circle-fill text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-1 lg:w-1/4 transform transition duration-500 hover:scale-105 ">
                  <div className="flex flex-row justify-between bg-gradient-to-r from-[#00b2d3] via-[#d36d00] to-pink-500 px-2 pt-3 pb-1 overflow-hidden relative rounded-t-md">
                    <div>
                      <h1 className=" text-[35px] font-bold text-white mb-3">
                        5
                      </h1>
                      <p className="leading-relaxed mb-3 text-white text-[16px]">
                        Watch List
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-eye-fill opacity-25"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                      </svg>
                    </div>
                  </div>
                  <Link href="./purchased">
                    <div className="bg-gradient-to-r from-[#0087a0] via-[#b25c00] to-pink-600 rounded-b-md cursor-pointer">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <h1 className="text-[15px] text-center text-white font-normal">
                          More info
                        </h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right-circle-fill text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-1 lg:w-1/4 transform transition duration-500 hover:scale-105 ">
                  <div className="flex flex-row justify-between bg-gradient-to-r from-[#c500ad] via-[#c50000] to-pink-500 px-2 pt-3 pb-1 overflow-hidden relative rounded-t-md">
                    <div>
                      <h1 className=" text-[35px] font-bold text-white mb-3">
                        5
                      </h1>
                      <p className="leading-relaxed mb-3 text-white text-[16px]">
                        Messages
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-envelope opacity-25"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#800071] via-[#9d0000] to-pink-600 rounded-b-md cursor-pointer">
                    <div className="flex flex-row justify-center items-center gap-1">
                      <h1 className="text-[15px] text-center text-white font-normal">
                        More info
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-arrow-right-circle-fill text-white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-1 lg:w-1/4 transform transition duration-500 hover:scale-105 ">
                  <div className="flex flex-row justify-between bg-gradient-to-r from-[#0dc500] via-purple-500 to-pink-500 px-2 pt-3 pb-1 overflow-hidden relative rounded-t-md">
                    <div>
                      <h1 className=" text-[30px] absolute  font-bold text-white mb-3">
                        36555.217 OMR
                      </h1>
                      <p className="leading-relaxed mb-3 text-white text-[16px] mt-[52px]">
                        Payment Remaining
                      </p>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="currentColor"
                        className="bi bi-car-front opacity-25"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z" />
                        <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z" />
                      </svg>
                    </div>
                  </div>
                  <Link href="./invoices" passHref>
                    <div className="bg-gradient-to-r from-[#0ba000] via-purple-600 to-pink-600 rounded-b-md cursor-pointer">
                      <div className="flex flex-row justify-center items-center gap-1">
                        <h1 className="text-[15px] text-center text-white font-normal">
                          More info
                        </h1>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-right-circle-fill text-white"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Card>
        <div className="flex flex-row gap-2 justify-center items-center mx-auto">
          <Card className="p-2 ">
            <div className="bg-[#00084b] rounded-md p-1">
              <h1 className="text-white text-center text-[15px]">
                Copart Auction Fee (رسوم المزايدة) For Customer
              </h1>
            </div>

            <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg mt-2 h-80">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r border-gray-300"
                    >
                      From Price (من السعر)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r border-gray-300"
                    >
                      To Price (إلى السعر)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Auction Price (السعر المزاد)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">50</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">100</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">200</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
          <Card className="p-2 ">
            <div className="bg-[#00084b] rounded-md p-1">
              <h1 className="text-white text-center text-[15px]">
                IAAI Auction Fee (رسوم المزايدة) For Customer
              </h1>
            </div>
            <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg mt-2 h-80">
              <table className="w-full text-sm text-left text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r border-gray-300"
                    >
                      From Price (من السعر)
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border-r border-gray-300"
                    >
                      To Price (إلى السعر)
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Auction Price (السعر المزاد)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">139$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">50</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">100</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">200</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <td className="px-6 py-4 border-r">0</td>
                    <td className="px-6 py-4 border-r">49.99</td>
                    <td className="px-6 py-4">104$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        <Card className="px-6 pt-8 pb-10">
          <div className="flex flex-row gap-2 justify-center items-center">
            {/* Income */}
            <StatisticCard
              title="Total Payment"
              date="Today"
              amount={9460.0}
              percentage={3.5}
              comparedText="Compared to OMR9940 yesterday"
              lasetWeekText="Last week OMR25658.00"
            />

            {/* Expanses */}
            <StatisticCard
              title="Total Remaining"
              date="Today"
              amount={3260.0}
              percentage={-2.5}
              comparedText="Compared to OMR5240 yesterday"
              lasetWeekText="Last week OMR25658.00"
            />
            <StatisticCard
              title="Total Paid"
              date="Today"
              amount={2460.0}
              percentage={2.5}
              comparedText="Compared to OMR5240 yesterday"
              lasetWeekText="Last week OMR25658.00"
            />

            <Card>
              <div className="flex flex-col space-y-[30px]">
                {/* Header */}
                <div className="flex flex-row items-center justify-between">
                  <h3 className="text-gray-02">Paid vs Remaining Payment</h3>
                  <span className="p5 rounded-sm bg-[#F4F5F7] px-2 py-1 text-gray-02">
                    Today
                  </span>
                </div>

                <div>
                  <Doughnut
                    data={data}
                    options={{ cutout: "80%" }}
                    className="mb-6"
                  />
                  <div className="flex flex-col space-y-2">
                    <div className="flex flex-row items-center">
                      <span className="h-4 w-4 flex-none rounded-full bg-primary"></span>
                      <p className="ml-3 mr-6 flex-1">Total Payment</p>
                      <p>
                        54% <span className="text-green">↑</span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="h-4 w-4 flex-none rounded-full bg-secondary"></span>
                      <p className="ml-3 mr-6 flex-1">Total Remainig</p>
                      <p>
                        20% <span className="text-secondary">↓</span>
                      </p>
                    </div>
                    <div className="flex flex-row items-center">
                      <span className="h-4 w-4 flex-none rounded-full bg-green"></span>
                      <p className="ml-3 mr-6 flex-1">Total Paid</p>
                      <p>
                        34% <span className="text-green">↑</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </Layout>
  );
}
