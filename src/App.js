import React, { useState } from 'react'
import CoverageList from './CoverageList'
import StickyHeader from './StickyHeader'
import { Shield, Warning, Stop, Logo } from './icons'

import './custom.scss'

export const AppContext = React.createContext()

const App = () => {

  const choices = {
    liability_limit: [
      [
        1000000,
        <span className="Choice MidChoice">
          $1,000,000 <Warning />
        </span>,
        'MidChoice',
      ],
      [
        2000000,
        <span className="Choice HighChoice">
          $2,000,000 <Shield />
        </span>,
        'HighChoice',
      ],
    ],
    comprehensive_coverage: [
      [0, <span className="Choice LowChoice">No coverage</span>, 'LowChoice'],
      [
        500,
        <span className="Choice MidChoice">
          $500 <Warning />
        </span>,
        'MidChoice',
      ],
      [
        1000,
        <span className="Choice HighChoice">
          $1000 <Shield />
        </span>,
        'HighChoice',
      ],
    ],
    collision_coverage: [
      [0, <span className="Choice LowChoice">No coverage</span>, 'LowChoice'],
      [
        500,
        <span className="Choice MidChoice">
          $500 <Warning />
        </span>,
        'MidChoice',
      ],
      [
        1000,
        <span className="Choice HighChoice">
          $1000 <Shield />
        </span>,
        'HighChoice',
      ],
    ],
    transportation_replacement: [
      [
        'false',
        <span className="Choice LowChoice">No coverage</span>,
        'MidChoice',
      ],
      [
        'true',
        <span className="Choice LowChoice">
          You will be covered <Shield />
        </span>,
        'HighChoice',
      ],
    ],
    non_owned_autos: [
      [
        'false',
        <span className="Choice MidChoice">No coverage</span>,
        'MidChoice',
      ],
      [
        'true',
        <span className="Choice HighChoice">
          You will be covered <Shield />
        </span>,
        'HighChoice',
      ],
    ],
    medical_rehab_non: [
      [
        1000000,
        <span className="Choice MidChoice">
          $1,000,000
        </span>,
        'MidChoice',
      ],
      [
        2000000,
        <span className="Choice HighChoice">
          $2,000,000 <Shield />
        </span>,
        'HighChoice',
      ],
    ],
    death_funeral: [
      ['standard', 'Standard'],
      ['increased', 'Increased'],
    ],
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
    medical_rehab_non: 1000000,
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

  console.log(
    'v: ',
    values['comprehensive_coverage'],
    typeof values['comprehensive_coverage'],
  )

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
