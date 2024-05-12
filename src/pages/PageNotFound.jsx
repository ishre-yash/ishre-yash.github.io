import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <>
      <main className="flex flex-col justify-center px-8">
        <div className="relative h-screen px-4 pt-24 pb-20 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28">
          <div className="flex min-h-full flex-grow pt-16 pb-12">
            <div className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
              <div className="flex flex-shrink-0 justify-center">
                <Icon icon="feather:alert-triangle" className="h-12 w-auto text-primary-500" />
              </div>
              <div className="py-4 text-center">
                <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-500 dark:text-white sm:text-5xl">
                  Whoops!
                </h1>
                <p className="mt-8 text-sm font-medium text-gray-300 dark:text-gray-400">
                  Looks like you took a wrong turn.
                  <br />
                  The page you're looking for couldn't be found.
                </p>
                <div className="mt-6 flex items-center justify-center space-x-4">

                  <button
                    onClick={() => navigate(-1)}
                    type="button"
                    className="hover:bg-opacity-50 default-transition default-focus flex h-12 items-center justify-center rounded-lg bg-gray-50 px-8 py-4 text-base font-bold text-primary-300 hover:bg-gray-100 hover:text-primary-400 dark:bg-gray-900 dark:hover:bg-gray-800"
                  >
                    <Icon icon="feather:arrow-left" className="mr-2" />
                    Back
                  </button>

                  <Link
                    to="/"
                    type="link"
                    className="hover:bg-opacity-50 default-transition default-focus flex h-12 items-center justify-center rounded-lg bg-gray-50 px-8 py-4 text-base font-bold text-primary-300 hover:bg-gray-100 hover:text-primary-400 dark:bg-gray-900 dark:hover:bg-gray-800"
                  >
                    <Icon icon="feather:home" className="mr-2" />
                    Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default PageNotFound;
