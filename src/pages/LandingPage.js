import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import LostOrFound from "../components/LostOrFound/LostOrFound";
import GetStarted from "../components/GetStarted/GetStarted";


export default function LandingPage() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          {/* <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <a
                      href="#"
                      className="inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                    >
                      <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                        We're hiring
                      </span>
                      <span className="ml-4 text-sm">
                        Visit our careers page
                      </span>
                      <ChevronRightIcon
                        className="ml-2 w-5 h-5 text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">A better way to</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        ship web apps
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui Lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form
                        action="#"
                        className="sm:max-w-xl sm:mx-auto lg:mx-0"
                      >
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            >
                              Start free trial
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Start your free 14-day trial, no credit card
                          necessary. By providing your email, you agree to our{" "}
                          <a href="#" className="font-medium text-white">
                            terms or service
                          </a>
                          
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Feature section with grid */}
          <div className="relative bg-white py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              How It Works
              </h2>
              
              <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                Get Started In 3 Easy Steps
              </p>
              <GetStarted/>
            </div>
          </div>

          {/* Blog section */}
          <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
            <div className="relative">
              <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Get The Help You Need
                </h2>
                <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
                  Get connected to the community in seconds. Answer 6 questions and upload a picture of your pet. We'll check our database and get you connected to anyone that may have lost or found a pet with a similar description. 
                </p>
              </div>
              <LostOrFound/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
