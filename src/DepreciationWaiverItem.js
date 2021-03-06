import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
import { Shield, Warning } from './icons'

const VehicleCoverageItem = ({ children, title, name }) => {

  const [modifyVisible, setModifyVisible] = useState(false)

const { vehicles } = useContext(AppContext)

  const cls = classNames('CoverageItem VehicleCoverageItem', {
    Modifying: modifyVisible,
  })

  const icon = vehicle => {
    if (vehicle.depreciation_waiver) {
      return <span><Shield /></span>
    } else {
      return <span className="NotApplicable">N/A</span>
    }
  }

  const anyFalse = () => {
    const any = vehicles.filter(v => !v.depreciation_waiver)
    if (any.length > 0) {
      return <small className="CoverageLevel">Depreciation waivers are only available on new vehicles.</small>
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
            <h5 className={v.depreciation_waiver ? 'VehicleTitle' : 'VehicleTitle notApplicable'}>{v.title}</h5>
          </div>
        ))}
      </div>
      {anyFalse()}
    </div>
  )
}

export default VehicleCoverageItem
