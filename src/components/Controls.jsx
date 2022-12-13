import React from 'react'
import { useGlobalContext } from '../context/AppContext'

const Controls = ({ position = 'fixed', display = 'hidden md:flex' }) => {
  const { userData: { userInfo, plans, addOns }, step, setStep, setConfirmed, confirmed, setEmailEmpty, setNameEmpty, setPhoneNumberEmpty } = useGlobalContext()

  const incrementValue = () => {
    const optionSelected = plans.some((plan) => plan.selected)
    const addOnsSelected = addOns.some((addOn) => addOn.selected)

    if (step === 1) {
      if (!userInfo.name) {
        setNameEmpty(true)
        return
      } else {
        setNameEmpty(false)
      }

      if (!userInfo.email) {
        setEmailEmpty(true)
        return
      } else {
        setEmailEmpty(false)
      }

      if (!userInfo.phoneNumber) {
        setPhoneNumberEmpty(true)
        return
      } else {
        setPhoneNumberEmpty(false)
      }
    }

    if (step === 2 && !optionSelected) return
    if (step === 3 && !addOnsSelected) return
    setStep((prevValue) => prevValue + 1)
  }

  const decrementValue = () => setStep((prevValue) => prevValue - 1)

  const confirmPayment = () => setConfirmed(true)

  return (
    <>
      {
        confirmed ? '' : (
          <div className={` ${display} ${position} bottom-0 left-0 self-end w-full h-[4.2rem] bg-white md:bg-transparent drop-shadow-xl md:max-w-[30rem] md:drop-shadow-none items-center`}>
            {
              step > 1 && (
                <button onClick={decrementValue} className='absolute text-sm md:text-base left-4 md:left-0 font-medium text-cool-gray hover:text-marine-blue active:scale-95 transition-all'>Go Back</button>
              )
            }
            <button onClick={() => step === 4 ? confirmPayment() : incrementValue()} className={`absolute right-4 md:right-0 font-medium text-sm text-white ${step === 4 ? 'bg-purplish-blue px-5 py-[0.65rem] hover:bg-purplish-blue/80 tracking-wide' : 'bg-marine-blue px-4 py-[0.65rem] tracking-wide'} rounded-[0.27rem] md:rounded-lg md:text-base md:py-3 md:px-6 active:scale-95 transition-all`}>{step === 4 ? 'Confirm' : 'Next Step'}</button>
          </div>
        )
      }</>
  )
}

export default Controls