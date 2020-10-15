import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
import { Shield, Warning, Stop } from './icons'

const CoverageItem = ({ children, title, name, Highest = null, Mid = null, Lowest = null }) => {

  const [modifyVisible, setModifyVisible] = useState(true)

  const { values } = useContext(AppContext)

  const val = values[name]

  const isHighest = Number(val) === Number(Highest)
  const isMid = Number(val) === Number(Mid)
  const isLowest = Number(val) === Number(Lowest)

  const cls = classNames('CoverageItem', {
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
          {isMid && <Warning />}
          {isLowest && <Stop />}
          <h4>{title}</h4>
        </div>
        {children}
      </div>
    </div>
  )
}

export default CoverageItem
