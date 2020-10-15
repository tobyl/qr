import React, { useState } from 'react'
import CoverageList from './CoverageList'
import StickyHeader from './StickyHeader'
import { Shield, Logo } from './icons'

import './custom.scss'

export const AppContext = React.createContext()

const App = () => {

  const choices = {
    liability_limit: [[1000000, 1000000], [2000000, 2000000]],
    comprehensive_coverage: [[0, 'No coverage'], [500, 500], [1000, 1000]],
    collision_coverage: [[0, 'No coverage'], [500, 500], [1000, 1000]],
    transportation_replacement: [['false', 'You will not be covered'], ['true', 'You will be covered']],
    non_owned_autos: [['false', 'You will not be covered'], ['true', 'You will be covered']],
    medical_rehab_non: [[0, 'No increase'], [130000, 130000], [1000000, 1000000]],
    death_funeral: [['standard', 'Standard'], ['increased', 'Increased']],
  }

  const vehicles = [
    { title: '2018 HONDA RIDGELINE LX', depreciation_waiver: false, accident_waiver: true },
    { title: '2020 FORD FOCUS SE', depreciation_waiver: true, accident_waiver: true },
    { title: '2017 CHEVROLET COLORADO LT', depreciation_waiver: false, accident_waiver: true },
    { title: '2020 GMC ACADIA SLT', depreciation_waiver: true, accident_waiver: true },
  ]

  const [pricesChanged, setPricesChanged] = useState(false)

  const [values, setValues] = useState({
    liability_limit: 2000000,
    comprehensive_coverage: 500,
    collision_coverage: 500,
    transportation_replacement: 'true',
    non_owned_autos: 'true',
    medical_rehab_non: 0,
    death_funeral: 'standard',
  })

  const set = (name, value) => {
    setPricesChanged(true)
    setValues(prevState => {
      let current = Object.assign({}, prevState)
      current[name] = value
      return current
    })
  }

  return (
    <AppContext.Provider value={{ values, set, vehicles, choices, pricesChanged, setPricesChanged }}>
      <div className="App">
        <StickyHeader />
        <div>
          <p className="lead Intro">Customize your coverage, look out for the <Logo /> <strong>recommended coverage</strong> <Shield /> as you make your choices!</p>
        </div>
        <CoverageList />
      </div>
    </AppContext.Provider>
  )
}

export default App
