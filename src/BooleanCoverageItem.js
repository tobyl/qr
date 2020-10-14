import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
import { Shield, Warning, Stop } from './icons'

const BooleanCoverageItem = ({ children, title, name, Highest = null, Mid = null, Lowest = null }) => {

  const [modifyVisible, setModifyVisible] = useState(false)

  const { values } = useContext(AppContext)

  const val = values[name]

  const isHighest = val === Highest
  const isMid = val === Mid
  const isLowest = val === Lowest

  const cls = classNames('CoverageItem BooleanCoverageItem', {
    'Modifying': modifyVisible,
    'Highest': isHighest,
    'Lowest': isLowest,
    'Mid': isMid,
  })

  return (
    <div className={cls} onClick={() => setModifyVisible(!modifyVisible)}>
      <div>
        <div>
          {isHighest && <Shield />}
          {!isMid && <Warning />}
          {isLowest && <Stop />}
          <h4>{title}</h4>
        </div>
        {children}
      </div>
    </div>
  )
}

export default BooleanCoverageItem
