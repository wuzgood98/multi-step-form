import React from 'react'
import { useGlobalContext } from '../context/AppContext'

const Summary = () => {

  const { userData: { plans, addOns }, checked, setStep } = useGlobalContext()

  const planSelected = plans.find((plan) => plan.selected)
  const addOnsSelected = addOns.filter((addOn) => addOn.selected)
  const addOnPrices = addOnsSelected.map((addOn) => checked ? addOn.annualPrice : addOn.monthlyPrice)
  const price = checked ? planSelected.annualPrice : planSelected.monthlyPrice

  const total = [price, ...addOnPrices].reduce((acc, curr) => acc + curr, 0)

  const goBackToPlan = () => setStep(2)

  return (
    <div className='w-full  h-max px-5 md:px-0'>

      <section className='w-full h-full gap-3 flex flex-col bg-white shadow-lg md:gap-6 md:shadow-none py-8 px-6 md:px-0 md:py-0 rounded-lg transition-all'>
        <h1 className='text-marine-blue text-2xl font-bold animate-fade-in md:text-[2.2rem] md:leading-10'>Finishing up</h1>
        <p className='text-cool-gray max-w-[17.5rem] md:max-w-full text-base md:text-[1.08rem] animate-fade-in mb-3'>Double-check everything looks OK before confirming.</p>

        <div className="flex flex-col gap-4 bg-magnolia p-4 md:p-6 rounded-md animate-fade-in">
          <div className=" flex justify-between items-center w-full border-b border-light-gray pb-4">
            <div>
              <p className='text-sm md:text-base font-bold text-marine-blue capitalize'>{planSelected.name} <span>{`(${checked ? 'Yearly' : 'Monthly'})`}</span></p>
              <button onClick={goBackToPlan} className='text-cool-gray text-sm md:text-[0.9375rem] capitalize underline underline-offset-2 hover:text-purplish-blue transition-colors'>change</button>
            </div>
            <p className='text-sm md:text-base text-marine-blue font-bold'>${checked ? planSelected.annualPrice : planSelected.monthlyPrice}/{checked ? 'yr' : 'mo'}</p>
          </div>

          {
            addOnsSelected.map((addOn) => (
              <div key={addOn.id} className='flex w-full items-center justify-between'>
                <p className='text-cool-gray text-sm md:text-[0.9375rem]'>{addOn.type}</p>
                <p className='text-marine-blue text-sm md:text-[0.9375rem] font-normal'>+${checked ? addOn.annualPrice : addOn.monthlyPrice}/{checked ? 'yr' : 'mo'}</p>
              </div>
            ))
          }

        </div>

        <div className="flex justify-between items-center w-full px-4 md:px-6 animate-fade-in mt-2">
          <p className='text-cool-gray text-sm md:text-[0.9375rem]'>Total (per {checked ? 'year' : 'month'})</p>
          <p className='text-purplish-blue text-base md:text-xl font-bold'>+${total}/{checked ? 'yr' : 'mo'}</p>
        </div>
      </section>

    </div>
  )
}

export default Summary