import React, { useState } from 'react'
import { useGlobalContext } from '../context/AppContext'
import checkmark from '../assets/icon-checkmark.svg'

const AddOns = () => {
  const [changed, setChanged] = useState(false)
  const { userData: { addOns }, setUserData, checked } = useGlobalContext()

  const handleChecked = (e) => setChanged(e.target.value)

  const chooseAddOn = (id) => {
    setUserData((prevData) => {
      const temp = prevData.addOns.map((addOn) => {
        return addOn.id === id ? { ...addOn, selected: !addOn.selected } : addOn
      })

      return { ...prevData, addOns: temp }
    })
  }


  return (
    <div className='w-full h-max px-5 md:px-0'>

      <section className="h-full w-full flex flex-col gap-4 md:gap-7 bg-white shadow-lg md:shadow-none py-8 px-6 md:px-0 md:py-0 rounded-lg transition-all">
        <div className="flex flex-col w-full md:mb-2 md:gap-2">
          <h1 className='text-marine-blue text-2xl font-bold animate-fade-in md:text-[2.2rem] md:leading-10'>Pick add-ons</h1>
          <p className='text-cool-gray max-w-[17.5rem] text-base md:text-[1.08rem] md:max-w-full animate-fade-in'>Add-ons help enhance your gaming experience.</p>
        </div>

        <div className="flex flex-col gap-4 animate-fade-in">
          {addOns.map((addOn) => (
            <div onClick={() => chooseAddOn(addOn.id)} key={addOn.id} className={`select-none cursor-pointer w-full flex items-center justify-between p-3 md:p-5 ${addOn.selected && 'border-purplish-blue bg-magnolia'} border border-light-gray hover:border-purplish-blue rounded-md transition-colors duration-200`}>
              <div className='flex gap-4 items-center'>
                <label htmlFor="checkbox1" className={`h-6 w-6 ${addOn.selected ? 'bg-purplish-blue' : 'bg-transparent border-light-gray'} shrink-0 border rounded-md grid place-content-center cursor-pointer transition-colors duration-200`}>
                  <img src={checkmark} alt="checkmark" className={`${addOn.selected ? 'animate-spring-bounce visible' : 'invisible'}`} />
                  <input
                    id='checkbox2'
                    checked={addOn.selected}
                    onChange={handleChecked}
                    type="checkbox"
                    className='h-5 w-5 hidden'
                  />
                </label>
                <div className="flex flex-col">
                  <p className='text-marine-blue font-bold capitalize text-sm'>{addOn.type}</p>
                  <p className='text-cool-gray text-xs'>{addOn.description}</p>
                </div>
              </div>
              <p className='text-purplish-blue text-sm'>+${checked ? `${addOn.annualPrice}/yr` : `${addOn.monthlyPrice}/mo`}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default AddOns