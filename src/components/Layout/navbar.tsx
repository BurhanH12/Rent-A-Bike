import React from 'react'
import Link from 'next/link'
import { useAuth } from '~/pages/auth/auth';

const Navbar: React.FC = () => {

    const { user, isAuthenticated, signIn, signOut } = useAuth();


  return (
    <div>
        <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            href={"/"}
          >
            <img width={90} src="/qsol_logo_full.png" alt="Qsols"></img>
            {/* <span className="ml-3 text-xl">Qsols</span> */}
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-gray-700">
              Home
            </Link>
            <Link href={"/about"} className="mr-5 hover:text-gray-900">
              About Us
            </Link>
            <Link href={"/rental"} className="mr-5 hover:text-gray-900">
              Rental
            </Link>
            <Link href={"/findyourbike"} className="mr-5 hover:text-gray-900">
              Find your perfect bike
            </Link>
            <Link href={"/careers"} className="mr-5 hover:text-gray-900">
              Careers
            </Link>
            <Link href={"/contactUs"} className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          {/* Conditional rendering for Sign In/Sign Out button */}

          {isAuthenticated ? (
            <div className="flex items-center">
              <h1 className="mr-3">{user.name}</h1>
              <img
                src={user.image}
                alt={user.name + " photo"}
                className="w-8 h-8 rounded-full"
              />
              <button
                onClick={signOut}
                className="ml-3 items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base hidden md:inline-flex"
              >
                Sign Out
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Sign In
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>
      </header>
    </div>
  )
}

export default Navbar