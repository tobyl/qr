import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
// import { Star, Warning } from './icons'

const VehicleCoverageItem = ({ children, title, name }) => {

  const [modifyVisible, setModifyVisible] = useState(false)

const { values, choices, vehicles } = useContext(AppContext)

  const cls = classNames('CoverageItem', {
    'Modifying': modifyVisible,
  })

  const icon = vehicle => {
    if (name === 'accident_waiver') {
      if (vehicle.accident_waiver) {
        return <span>yup!</span>
      } else {
        return <span>nope!</span>
      }
    } else if (name === 'depreciation_waiver') {
      if (vehicle.depreciation_waiver) {
        return <span>yup!</span>
      } else {
        return <span>nope!</span>
      }
    }
    return null
  }

  return (
    <div className={cls}>
      <div onClick={() => setModifyVisible(!modifyVisible)}>
        <h4>{title}</h4>
        {children}
        {vehicles.map(v =>
          <div>
            <h5>{v.title} {icon(v)}</h5>
          </div>
        )}
      </div>
    </div>
  )
}

export default VehicleCoverageItem
