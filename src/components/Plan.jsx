import React from 'react'
import { useGlobalContext } from '../context/AppContext'

const Plan = () => {
  const { userData: { plans }, setUserData, checked, setChecked } = useGlobalContext()

  const handleChange = (e) => setChecked(e.target.checked)

  const choosePlan = (id) => {
    setUserData((prevData) => {
      const temp = prevData.plans.map((plan) => {
        if (plan.id !== id) {
          return { ...plan, selected: false }
        }
        return { ...plan, selected: !plan.selected }
      })

      return { ...prevData, plans: temp }
    })
  }

  return (
    <div className='w-full h-max px-5 md:px-0'>

      <section className="h-full w-full flex flex-col gap-4 md:gap-7 bg-white shadow-lg md:shadow-none py-8 px-6 md:px-0 md:py-0 rounded-lg transition-all">
        <div className="flex flex-col w-full md:mb-2 md:gap-2">
          <h1 className='text-marine-blue text-2xl font-bold animate-fade-in md:text-[2.2rem] md:leading-10'>Select your plan</h1>
          <p className='text-cool-gray max-w-[17.5rem] text-base md:text-[1.08rem] md:max-w-full animate-fade-in'>You have the option of monthly or yearly billing.</p>
        </div>

        <div className="flex flex-col gap-4 w-full md:gap-7">
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 animate-fade-in">
            {plans.map((plan) => (
              <div onClick={() => choosePlan(plan.id)} key={plan.id} className={`flex md:flex-[8.5rem] md:h-[11rem] md:flex-col md:justify-between gap-4 px-4 py-3 ${plan.selected && 'border-marine-blue bg-magnolia'} cursor-pointer select-none border border-light-gray hover:border-purplish-blue rounded-md transition-all duration-300`}>
                <img src={plan.icon} alt="plan icon" className={`${checked && 'self-start'} transition-all md:w-12`} />
                <div className="flex flex-col gap-1">
                  <p className='text-marine-blue font-medium capitalize'>{plan.name}</p>
                  <p className='text-cool-gray text-sm'>${checked ? `${plan.annualPrice}/yr` : `${plan.monthlyPrice}/mo`}</p>
                  {checked && <p className='text-marine-blue text-sm animate-fade-in'>2 months free</p>}
                </div>
              </div>
            ))}
          </div>

          {/* toggler */}
          <div className='flex items-center justify-center gap-6 bg-magnolia py-3 font-medium text-cool-gray capitalize rounded-md animate-fade-in'>
            <span className={`${!checked && 'text-marine-blue'} text-sm font-bold transition-colors`}>monthly</span>

            <label htmlFor="checkbox" className='cursor-pointer relative w-10 h-5 p-1 rounded-full bg-marine-blue flex transition-all'>
              <span className={`w-3 h-3 absolute z-10 top-0 bottom-0 my-auto rounded-full bg-white ${checked && 'translate-x-[1.25rem]'} transition-all duration-200`} />
              <input onChange={handleChange} id='checkbox' type="checkbox" className='hidden' />
            </label>

            <span className={`${checked && 'text-marine-blue'} text-sm font-bold transition-colors`}>yearly</span>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Plan