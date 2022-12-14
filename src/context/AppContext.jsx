import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [step, setStep] = useState(1)
  const [checked, setChecked] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [nameEmpty, setNameEmpty] = useState(false)
  const [emailEmpty, setEmailEmpty] = useState(false)
  const [phoneNumberEmpty, setPhoneNumberEmpty] = useState(false)
  const [emailInvalid, setEmailInvalid] = useState(false)
  const [phoneNumberInvalid, setPhoneNumberInvalid] = useState(false)

  const pages = [{ step: 1, description: 'your info' }, { step: 2, description: 'select plan' }, { step: 3, description: 'add-ons' }, { step: 4, description: 'summary' }]

  const [userData, setUserData] = useState({
    userInfo: {
      name: '',
      email: '',
      phoneNumber: '',
    },
    plans: [
      {
        id: 1,
        name: 'arcade',
        icon: '/icon-arcade.svg',
        monthlyPrice: 9,
        annualPrice: 90,
        selected: false,
      },
      {
        id: 2,
        name: 'advanced',
        icon: '/icon-advanced.svg',
        monthlyPrice: 12,
        annualPrice: 120,
        selected: false,
      },
      {
        id: 3,
        name: 'pro',
        icon: '/icon-pro.svg',
        monthlyPrice: 15,
        annualPrice: 150,
        selected: false,
      }
    ],
    addOns: [
      {
        id: 4,
        type: 'Online service',
        description: 'Access to multiplayer games',
        monthlyPrice: 1,
        annualPrice: 10,
        selected: false,
      },
      {
        id: 5,
        type: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        monthlyPrice: 2,
        annualPrice: 20,
        selected: false,
      },
      {
        id: 6,
        type: 'Customizable profile',
        description: 'Custom theme on your profile',
        monthlyPrice: 2,
        annualPrice: 20,
        selected: false,
      }
    ]
  })

  return (
    <AppContext.Provider value={{ step, setStep, userData, setUserData, checked, setChecked, pages, confirmed, setConfirmed, nameEmpty, setNameEmpty, emailEmpty, setEmailEmpty, phoneNumberEmpty, setPhoneNumberEmpty, emailInvalid, setEmailInvalid, phoneNumberInvalid, setPhoneNumberInvalid }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)

export { AppContext, AppProvider }