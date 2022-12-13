import React from 'react'
import mobileBg from '../assets/bg-sidebar-mobile.svg'
import desktopBg from '../assets/bg-sidebar-desktop.svg'
import ProgressIndicator from './ProgressIndicator'
import Controls from './Controls'

const Layout = ({ children }) => {
  return (
    <div className="relative font-ubuntu min-h-screen w-full bg-magnolia md:flex md:items-center md:justify-center md:px-4 lg:py-4">
      <img src={mobileBg} alt="background image" className='absolute top-0 w-full h-auto md:hidden' />
      <ProgressIndicator />

      <div className='relative top-[6.9rem] h-[40rem] animate-fade-in w-full flex flex-col  gap-5 md:top-0 md:bg-white md:rounded-2xl md:drop-shadow-xl md:p-4 md:flex-row md:items-center md:h-[37rem] md:gap-0 md:max-w-[60rem]'>

        <ProgressIndicator visibility='hidden md:flex' position='-right-4' />

        <img src={desktopBg} alt="background image" className='hidden md:block h-full w-[24rem]' />

        <div className='flex flex-col h-full w-full'>

          <div className='w-full md:mx-auto md:max-w-[30rem] h-full flex flex-col justify-between md:pt-10 md:pb-2 md:pl-4 lg:pl-0'>
            {children}
            <Controls position='relative' />
          </div>

        </div>

      </div>
      <Controls display='md:hidden' />
    </div>
  )
}

export default Layout