import React from 'react'
import iconThankYou from '../assets/icon-thank-you.svg'

const ThankyouCard = () => {
  return (
    <div className='w-full h-max px-5 md:px-0'>

      <section className="h-[27rem] w-full flex flex-col text-center items-center justify-center gap-3 bg-white shadow-lg md:shadow-none py-8 px-6 md:px-0 rounded-lg transition-all">
        <img src={iconThankYou} alt="thank you icon" className='mb-3 w-[60px] md:w-[75px] animate-fade-in' />
        <h1 className='text-marine-blue text-2xl font-bold animate-fade-in'>Thank you!</h1>
        <p className='text-cool-gray text-[1.1rem] animate-fade-in'>
          Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at support@loremgaming.com.
        </p>
      </section>

    </div>
  )
}

export default ThankyouCard