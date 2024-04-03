import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { UserButton } from "@clerk/nextjs";


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/" className="flex items-center gap-1">
        <Image src="/icons/logo.svg" width={32} height={32} alt="App Logo" className='max-sm:size-10'/>
        <p className='text-[26px] font-extrabold text-white max-sm:hidden'>
          VideoMeet
        </p>
      </Link>

      <div className="flex justify-between items-center gap-5">
        {/* Clerk User Mgmt */}
          <UserButton />
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar