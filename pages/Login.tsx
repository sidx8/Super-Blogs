import React, { useState } from 'react'
import type { ReactElement } from 'react'
import Link from 'next/link'
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js'

import AuthLayout from '../components/layout/AuthLayout'
import UserPool from '../util/awsUserPool'
import { error } from 'console'

export default function Login() {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const onSubmit = (event: any) => {
    event.preventDefault()
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });
    const authdetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });
    user.authenticateUser(authdetails, {
      onSuccess: (data) =>{
        console.log("success :", data);
      },
      onFailure: (err) => {
        console.error("error :", err);
      },
    })
  }

  return (
    <div className="mt-8 grid space-y-4">
      <button
        className="group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
      >
        <div className="relative flex items-center justify-center space-x-4">
          <img
            src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
            className="absolute left-0 w-5"
            alt="google logo"
          />
          <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
            Continue with Google
          </span>
        </div>
      </button>
      <button
        className="group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
      >
        <div className="relative flex items-center justify-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="absolute left-0 w-5 text-gray-700"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
            Continue with Github
          </span>
        </div>
      </button>
      <button
        className="group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 
                                     hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
      >
        <div className="relative flex items-center justify-center space-x-4">
          <img
            src="https://cdn.worldvectorlogo.com/logos/twitter-3.svg"
            className="absolute left-0 w-5"
            alt="google logo"
          />
          <span className="block w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-blue-600 sm:text-base">
            Continue with Twitter
          </span>
        </div>
      </button>

      <div role="hidden" className="mt-12 border-t">
        <span className="mx-auto -mt-3 block w-max bg-white px-4 text-center text-gray-600">
          Or
        </span>
      </div>
      <form onSubmit={onSubmit} className="space-y-8 py-6">
        <div>
          <input
            type="email"
            value={email}
            onChange={(event: any) => setemail(event.target.value)}
            placeholder="Your Email"
            className="w-full rounded-lg bg-transparent py-3 px-6 placeholder-gray-600 ring-1 ring-gray-300 transition invalid:ring-red-400 focus:invalid:outline-none disabled:bg-gray-100 disabled:placeholder-gray-400 disabled:ring-gray-200"
          />
        </div>

        <div className="flex flex-col items-end">
          <input
            type="password"
            value={password}
            onChange={(event: any) => setpassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-lg bg-transparent py-3 px-6 placeholder-gray-600 ring-1 ring-gray-300 transition invalid:ring-red-400 focus:invalid:outline-none disabled:bg-gray-100 disabled:placeholder-gray-400 disabled:ring-gray-200"
          />
          <button type="reset" className="-mr-3 w-max p-3">
            <span className="text-sm tracking-wide text-sky-600">
              Forgot password ?
            </span>
          </button>
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-lg bg-sky-500 px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"
          >
            <span className="text-lg font-semibold text-white">Login</span>
          </button>
          <Link href="/SignUp">
            <button type="reset" className="-ml-3 w-max p-3">
              <span className="text-sm tracking-wide text-sky-600">
                Create new account
              </span>
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

Login.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>
}
