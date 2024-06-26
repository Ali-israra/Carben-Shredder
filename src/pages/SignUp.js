import React from "react";
import Logo from "../assets/images/footer-logo-2.png";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <section class="max-w-4xl p-6 mx-auto mt-5">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-70 w-48   " src={Logo} alt="Your Company" />
        </div>
        <form>
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-10">
            <div>
              <label
                class=" text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                for="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                class="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500  "
              />
            </div>

            <div>
              <label
                class=" text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                for="emailAddress"
              >
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                class="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500  "
              />
            </div>

            <div>
              <label
                class=" text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                for="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500  "
              />
            </div>

            <div>
              <label
                class=" text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Confirm Password
              </label>
              <input
                id="passwordConfirmation"
                type="password"
                class="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500  "
              />
            </div>
            <div>
              <label
                class=" text-sm font-medium leading-6 text-gray-900 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Country
              </label>
              <select class="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500  ">
                <option>Surabaya</option>
                <option>Jakarta</option>
                <option>Tangerang</option>
                <option>Bandung</option>
              </select>
            </div>
            <br />
          </div>
          <div className="w-[100%] mt-5">
            <label class="block  text-sm font-medium leading-6 text-gray-900">
              Upload Image
            </label>
            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div class="space-y-1 text-center">
                <svg
                  class="mx-auto h-12 w-12  text-sm font-medium leading-6 text-gray-900"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div class="flex text-sm text-gray-600">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer  rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span class=" bg-primary p-1 px-3  rounded-md text-white">
                      Upload a file
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1  text-sm font-medium leading-6 text-gray-900">
                    or drag and drop
                  </p>
                </div>
                <p class="text-xs  text-sm font-medium leading-6 text-gray-900">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
          <div class=" mt-6">
           
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-text-primary px-3 py-1.5 text-sm font-semibold leading-6 bg-primary text-white shadow-sm     "
              >
                Sign Up
              </button>
            
          </div>
        </form>
        <p class="mt-6 text-center text-sm text-gray-500">
          Already a member?
          <Link
            to="/ "
            class="font-semibold leading-6 text-primary hover:text-primary px-2"
          >
            Sign In
          </Link>
        </p>
      </section>
    </>
  );
}

export default SignUp;
