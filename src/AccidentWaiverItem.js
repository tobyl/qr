import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
import { Shield, Warning } from './icons'

const AccidentWaiverItem = ({ children, title, name }) => {

  const [modifyVisible, setModifyVisible] = useState(false)

const { vehicles } = useContext(AppContext)

  const cls = classNames('CoverageItem VehicleCoverageItem', {
    'Modifying': modifyVisible,
  })

  const icon = vehicle => {
    if (vehicle.accident_waiver) {
      return <span><Shield /></span>
    } else {
      return <span><Warning /></span>
    }
  }

  const anyFalse = () => {
    const any = vehicles.filter(v => !v.accident_waiver)
    if (any.length > 0) {
      return <small className="CoverageLevel">Accident waivers are only available where drivers have no previous at-fault accidents.</small>
    }
    return null
  }

  return (
    <div className={cls}>
      <div onClick={() => setModifyVisible(!modifyVisible)}>
        <h4>{title}</h4>
        {children}
        {vehicles.map((v) => (
          <div key={v.title}>
            {icon(v)}
            <h5 className="VehicleTitle">{v.title}</h5>
          </div>
        ))}
      </div>
      {anyFalse()}
    </div>
  )
}

export default AccidentWaiverItem
