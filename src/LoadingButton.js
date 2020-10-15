import React, { useState, useContext } from 'react'
import { AppContext } from './App'

const LoadingButton = ({ label }) => {

  const { setPricesChanged } = useContext(AppContext)

  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setPricesChanged(false)
    }, 3000)
  }

  return (
    <button onClick={handleClick} className="LoadingButton">
      {label} {loading && <span className="spinner"></span>}
    </button>
  )
}

export default LoadingButton