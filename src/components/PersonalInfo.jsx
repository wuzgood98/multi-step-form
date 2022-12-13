import React from 'react'
import { useGlobalContext } from '../context/AppContext'

const PersonalInfo = () => {
  const { setUserData, userData: { userInfo }, emailEmpty, nameEmpty, phoneNumberEmpty } = useGlobalContext()

  const handleChange = (e) => {
    const { name, value } = e.target

    setUserData((prevInfo) => {

      const temp = { ...prevInfo.userInfo, [name]: name === 'phoneNumber' ? +value : value }
      return { ...prevInfo, userInfo: temp }
    })
  }

  return (
    <main className='w-full h-max px-4 md:px-0'>

      <div className="h-max w-full flex flex-col gap-7 bg-white md:bg-transparent shadow-lg md:shadow-none py-8 px-6 md:px-0 md:py-0 rounded-lg">
        <div className="flex flex-col w-full md:gap-2">
          <h1 className='text-marine-blue text-2xl font-bold animate-fade-in md:text-[2.2rem] md:leading-10'>Personal info</h1>
          {/* fix this shit later */}
          <p className='text-cool-gray min-w-[17rem] text-base md:text-[1.08rem] md:max-w-full animate-fade-in'>Please provide your name, email address, and phone number.</p>
        </div>
        <div className="flex flex-col gap-4 w-full md:gap-6">
          <div className='flex flex-col gap-1 animate-fade-in'>
            <div className='flex justify-between items-center w-full'>
              <label htmlFor="name" className='text-marine-blue text-[0.81rem] md:text-[0.9rem] font-medium leading-4'>Name</label>
              <span className={`${nameEmpty ? 'block animate-fade-in' : 'hidden'} text-strawberry-red text-[0.81rem] md:text-[0.9rem] font-bold leading-4`}>This field is required</span>
            </div>
            <input
              value={userInfo.name}
              onChange={handleChange}
              id='name'
              type="text"
              name='name'
              className={`border ${nameEmpty ? 'border-strawberry-red' : 'border-light-gray hover:border-purplish-blue'} focus:outline-marine-blue transition-colors cursor-pointer text-marine-blue font-medium  rounded-md indent-4 placeholder-cool-gray placeholder:font-medium placeholder:text-sm py-2 md:text-base md:placeholder:text-base md:h-12`} placeholder='e.g. Stephen King'
            />
          </div>
          <div className='flex flex-col gap-1 animate-fade-in'>
            <div className='flex justify-between items-center w-full'>
              <label htmlFor="email" className='text-marine-blue text-[0.81rem] md:text-[0.9rem] font-medium leading-4'>Email Address</label>
              <span className={`${emailEmpty ? 'block animate-fade-in' : 'hidden'} text-strawberry-red text-[0.81rem] md:text-[0.9rem] font-bold leading-4`}>This field is required</span>
            </div>
            <input
              value={userInfo.email}
              onChange={handleChange}
              id='email'
              type="email"
              name='email'
              className={`border ${emailEmpty ? 'border-strawberry-red' : 'border-light-gray hover:border-purplish-blue'} focus:outline-marine-blue transition-colors cursor-pointer text-marine-blue font-medium  rounded-md indent-4 placeholder-cool-gray placeholder:font-medium placeholder:text-sm py-2 md:text-base md:placeholder:text-base md:h-12`} placeholder='e.g. stephenking@lorem.com'
            />
          </div>
          <div className='flex flex-col gap-1 animate-fade-in'>
            <div className='flex justify-between items-center w-full'>
              <label htmlFor="number" className='text-marine-blue text-[0.81rem] md:text-[0.9rem] font-medium leading-4'>Phone Number</label>
              <span className={`${phoneNumberEmpty ? 'block animate-fade-in' : 'hidden'} text-strawberry-red text-[0.81rem] md:text-[0.9rem] font-bold leading-4`}>This field is required</span>
            </div>
            <input
              value={userInfo.phoneNumber}
              onChange={handleChange}
              id='number'
              type="number"
              name='phoneNumber'
              className={`border  ${phoneNumberEmpty ? 'border-strawberry-red' : 'border-light-gray hover:border-purplish-blue'} focus:outline-marine-blue transition-colors cursor-pointer text-marine-blue font-medium  rounded-md indent-4 placeholder-cool-gray placeholder:font-medium placeholder:text-sm py-2 md:text-base md:placeholder:text-base md:h-12`} placeholder='e.g. +1 234 567 890'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default PersonalInfo