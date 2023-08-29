import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Gallery from "~/components/Modals/gallery";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "my Friend" });
  const getusers = api.user.getUserData.useQuery({email: "burhan.qsols@gmail.com"})
  const name = getusers?.data?.user?.name;


  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div>
          <section className="bg-gray-700 bg-[url('/HeroBike.jpg')] bg-center bg-no-repeat bg-blend-multiply">
            <div className="mx-auto max-w-screen-xl px-4 py-24 text-center lg:py-56">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                Corporate Bikes Expert
              </h1>
              <p className="mb-8 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
                Here at Biyiy, we redefine urban exploration with our
                cutting-edge electric bikes. Discover the city streets with a
                ride that's not only environmentally friendly but also
                effortlessly stylish as well
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
                <a
                  href="/rental"
                  className="inline-flex items-center justify-center rounded-lg bg-[#275a85] px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Rent Our Bikes
                  <svg
                    className="ml-2 h-3.5 w-3.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-lg border border-white px-5 py-3 text-center text-base font-medium text-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400"
                >
                  Learn more
                </a>
              </div>
            </div>
          </section>
          <div>
            <Gallery />
          </div>
          {/* <p className="text-2xl text-black">
              {`This is my name ${name}`}
            </p> */}
        </div>
      </main>
    </>
  );
}
