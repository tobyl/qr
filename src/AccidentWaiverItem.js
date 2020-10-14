import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
import { Star, Warning } from './icons'

const AccidentWaiverItem = ({ children, title, name }) => {

  const [modifyVisible, setModifyVisible] = useState(false)

const { values, choices, vehicles } = useContext(AppContext)

  const cls = classNames('CoverageItem', {
    'Modifying': modifyVisible,
  })

  const icon = vehicle => {
    if (vehicle.accident_waiver) {
      return <span><Star /></span>
    } else {
      return <span><Warning /></span>
    }
  }

  const anyFalse = () => {
    const any = vehicles.filter(v => !v.depreciation_waiver)
    if (any.length > 0) {
      return <small>Depreciation waivers are only available on new vehicles.</small>
    }
    return null
  }

  return (
    <div className={cls}>
      <div onClick={() => setModifyVisible(!modifyVisible)}>
        <h4>{title}</h4>
        {children}
        {vehicles.map((v) => (
          <div>
            {icon(v)}
            <h5>{v.title}</h5>
          </div>
        ))}
      </div>
      {anyFalse()}
    </div>
  )
}

export default AccidentWaiverItem
