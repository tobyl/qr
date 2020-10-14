import React, { useState } from 'react'
import CoverageList from './CoverageList'
import StickyHeader from './StickyHeader'
import { Star, Logo } from './icons'

import './custom.scss'

export const AppContext = React.createContext()

const App = () => {

  const choices = {
    liability_limit: [[1000000, 1000000], [2000000, 2000000]],
    comprehensive_coverage: [[0, 'No coverage'], [500, 500], [1000, 1000]],
    collision_coverage: [[0, 'No coverage'], [1000, 1000]],
    transportation_replacement: [['You will not be covered', 'You will not be covered'], ['You will be covered', 'You will be covered']],
    non_owned_autos: [['You will not be covered', 'You will not be covered'], ['You will be covered', 'You will be covered']],
  }

  const vehicles = [
    { title: '2018 HONDA RIDGELINE LX', depreciation_waiver: false, accident_waiver: true },
    { title: '2020 FORD FOCUS SE', depreciation_waiver: true, accident_waiver: true },
    { title: '2017 CHEVROLET COLORADO LT', depreciation_waiver: false, accident_waiver: true },
    { title: '2020 GMC ACADIA SLT', depreciation_waiver: true, accident_waiver: true },
  ]

  const [values, setValues] = useState({
    liability_limit: 2000000,
    comprehensive_coverage: 500,
    collision_coverage: 500,
    transportation_replacement: 'You will be covered',
    non_owned_autos: 'You will be covered',
  })

  const set = (name, value) => {
    setValues(prevState => {
      let current = Object.assign({}, prevState)
      current[name] = value
      return current
    })
  }

  return (
    <AppContext.Provider value={{ values, set, vehicles, choices }}>
      <div className="App">
        <StickyHeader />
        <div>
          <p className="lead Intro">Customize your coverage, look out for the <Logo /> <strong>recommended coverage</strong> <Star /> as you make your choices!</p>
        </div>
        <CoverageList />
      </div>
    </AppContext.Provider>
  )
}

export default App
