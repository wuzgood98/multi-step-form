import React from 'react'
import { useGlobalContext } from '../context/AppContext'
import AddOns from './AddOns'
import Finishing from './Finishing'
import PersonalInfo from './PersonalInfo'
import Plan from './Plan'

const Steps = () => {
  const { step } = useGlobalContext()

  switch (step) {
    case 1:
      return (
        <PersonalInfo />
      )
    case 2:
      return (
        <Plan />
      )
    case 3:
      return (
        <AddOns />
      )
    case 4:
      return (
        <Finishing />
      )

    default:
      break;
  }
}

export default Steps