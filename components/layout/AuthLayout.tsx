import React from 'react'
import type { NextComponentType } from 'next'

const AuthLayout:NextComponentType = ({children}) => {  
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-sky-50 to-gray-400 py-14">
      <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
        <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
          <div className="rounded-xl bg-white shadow-xl">
            <div className="p-6 sm:p-16">
              <div className="space-y-4">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/aws-cognito.svg"
                  loading="lazy"
                  className="w-10"
                  alt="tailus logo"
                />
                <h2 className="mb-1 text-2xl font-bold text-cyan-900">
                  Sign in Useing <span className="text-orange-400"> AWS </span>{' '}
                  <br />
                  <span className="text-fuchsia-600"> Cognito</span>.
                </h2>
              </div>
              {children}                                                           
              <div className="space-y-4 text-center text-gray-600 sm:-mb-8">
                <p className="text-xs">
                  By proceeding, you agree to our{' '}
                  <a href="#" className="underline">
                    Terms of Use
                  </a>{' '}
                  and confirm you have read our{' '}
                  <a href="#" className="underline">
                    Privacy and Cookie Statement
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
