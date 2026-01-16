import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

export default function Header() {
  return (
    <>
          <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
              <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
              <Image
                  src="/kairos_log.png"
                  alt="Kairos logo"
                  width={500}
                  height={500}
                  className="w-full h-11"
                  priority
              />
          </Link>
          <div className="flex items-center space-x-4">
          <SignedIn>
              <UserButton />
          </SignedIn>
          <SignedOut>
              <SignInButton mode='modal' />
              <SignUpButton>
                  <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                      Sign Up
                  </button>
              </SignUpButton>
          </SignedOut>
                  </div>
          </div>
          </nav>    
       
    </>
  )
}
