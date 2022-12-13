import React from 'react'
import { useGlobalContext } from '../context/AppContext'

const ProgressIndicator = ({ visibility = 'md:hidden flex' }) => {
  const { step, pages } = useGlobalContext()

  return (
    <div className={`${visibility} absolute z-30 w-max right-0 left-0 top-9 md:top-14 md:left-12 mx-auto md:mx-0 md:right-0 md:flex-col items-center justify-center md:items-start gap-5 md:gap-6`}>
      {pages.map((page, index) => (
        <div key={index} className='flex gap-4 items-center'>
          <button className={`font-medium ${step === page.step ? 'bg-light-blue border-transparent text-marine-blue' : 'bg-transparent border-light-blue text-white'} h-9 w-9 border  rounded-full grid place-content-center transition-colors duration-500`}>{page.step}</button>

          <div className="hidden flex-col text-white uppercase md:flex">
            <p className='text-[0.79rem] font-light text-pastel-blue'>step {page.step}</p>
            <p className='font-medium text-sm tracking-widest'>{page.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgressIndicator