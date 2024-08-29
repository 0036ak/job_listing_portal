import React from "react";
import { Badge } from "flowbite-react";

const Nav = () => {
  return (
    <div>
      <div class="navbar bg-gray-200 sm:p-6 ">
        <div class="">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[90vw] p-2 shadow"
            >
              <li>
                <a className="font-semibold border-b-2 border-gray-200 p-2">
                  HOME
                </a>
              </li>
              <li>
                <details>
                  <summary className="font-semibold border-b-2 my-2 border-gray-200 p-2">
                    JOBS
                  </summary>
                  <ul class=" grid grid-cols-2">
                    <div class="one">
                      <h1 className="font-bold mb-3"> Categories</h1>
                      <h1 className="text-gray-500 font-semibold">IT jobs</h1>
                      <h1 className="text-gray-500 font-semibold my-2">
                        Sales jobs
                      </h1>
                    </div>

                    <div class="two">
                      <h1 className="font-bold mb-3"> Jobs in demand</h1>
                      <h1 className="text-gray-500 font-semibold">
                        Fresher jobs
                      </h1>
                      <h1 className="text-gray-500 font-semibold my-2">
                        MNC jobs
                      </h1>
                    </div>

                    <div class="three mb-3">
                      <h1 className="font-bold mb-3 mt-3 ">
                        {" "}
                        Jobs by location
                      </h1>
                      <h1 className="text-gray-500 font-semibold">
                        Jobs in Delhi
                      </h1>
                      <h1 className="text-gray-500 font-semibold my-2">
                        Jobs in Mumbai
                      </h1>
                    </div>
                  </ul>
                </details>
              </li>
              <li>
                <a className="font-semibold p-2 border-b-2 my-2 border-gray-200 ">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost -ml-4 sm:ml-0 text-sm sm:text-lg font-bold uppercase">
            Opportune
          </a>
        </div>
        <div class=" hidden lg:flex ">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a className="font-semibold">HOME</a>
            </li>
            <li>
              <details>
                <summary className="font-semibold  ">JOBS</summary>
                <ul class="p-2 flex flex-wrap justify-between w-[28rem]">
                  <div class="one">
                    <h1 className="font-bold mb-3"> Popular categories</h1>
                    <h1 className="text-gray-500 font-semibold cursor-pointer">
                      IT jobs
                    </h1>
                    <h1 className="text-gray-500 font-semibold cursor-pointer my-2">
                      Sales jobs
                    </h1>
                    <h1 className="text-gray-500 font-semibold cursor-pointer">
                      Marketing jobs
                    </h1>
                    <h1 className="text-gray-500 font-semibold my-2 cursor-pointer">
                      HR jobs
                    </h1>
                    <h1 className="text-gray-500 font-semibold mb-2 cursor-pointer">
                      Engineering jobs
                    </h1>
                  </div>

                  <div class="two">
                    <h1 className="font-bold mb-3"> Jobs in demand</h1>
                    <h1 className="text-gray-500 font-semibold cursor-pointer">
                      Fresher jobs
                    </h1>
                    <h1 className="text-gray-500 font-semibold my-2 cursor-pointer">
                      MNC jobs
                    </h1>
                    <h1 className="text-gray-500 font-semibold cursor-pointer">
                      Remote jobs
                    </h1>
                    <h1 className="text-gray-500 font-semibold my-2 cursor-pointer">
                      Walk-in jobs
                    </h1>
                    <h1 className="text-gray-500 font-semibold mb-2 cursor-pointer">
                      {" "}
                      Part-time jobs
                    </h1>
                  </div>

                  <div class="three">
                    <h1 className="font-bold mb-3"> Jobs by location</h1>
                    <h1 className="text-gray-500 font-semibold cursor-pointer">
                      Jobs in Delhi
                    </h1>
                    <h1 className="text-gray-500 font-semibold my-2 cursor-pointer">
                      Jobs in Mumbai
                    </h1>
                    <h1 className="text-gray-500 font-semibold cursor-pointer">
                      Jobs in Bangalore
                    </h1>
                    <h1 className="text-gray-500 font-semibold my-2 cursor-pointer">
                      Jobs in Hyderabad
                    </h1>
                    <h1 className="text-gray-500 font-semibold mb-2 cursor-pointer">
                      Jobs in Chennai
                    </h1>
                  </div>
                </ul>
              </details>
            </li>
            <li>
              <a className="font-semibold">CONTACT</a>
            </li>
          </ul>
        </div>

        <div class="lg:mr-8 mr-4">
          <div className="dropdown dropdown-end">
            <div className="avatar online">
              <div
                tabIndex={0}
                role="button"
                className="w-9 sm:w-12 rounded-full"
              >
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between font-semibold border-b-2 border-gray-200 p-2">
                  Profile
                  <span>
                    <Badge color="pink">New</Badge>
                  </span>
                </a>
              </li>
              <li>
                <a className=" mt-2 font-semibold border-b-2 border-gray-200 p-2 ">
                  Bookmark Jobs
                </a>
              </li>
              <li>
                <a className=" mt-2 font-semibold border-b-2 border-gray-200 p-2">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
