import React from 'react'
import { useGlobalContext } from '../context/AppContext'
import ThankyouCard from './ThankyouCard'
import Summary from './Summary'

const Finishing = () => {
  const { confirmed } = useGlobalContext()

  return (
    <>
      {confirmed ? <ThankyouCard /> : <Summary />}
    </>
  )
}

export default Finishing