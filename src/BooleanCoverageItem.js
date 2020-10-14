import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
import { Shield, Warning } from './icons'

const BooleanCoverageItem = ({ children, title, name, Highest = 'false', Lowest = 'false' }) => {

  const [modifyVisible, setModifyVisible] = useState(false)

  const { values } = useContext(AppContext)

  const val = values[name]

  const isHighest = val === Highest
  const isLowest = val === Lowest

  const cls = classNames('CoverageItem BooleanCoverageItem', {
    'Modifying': modifyVisible,
    'Highest': isHighest,
    'Mid': isLowest,
  })

  return (
    <div className={cls} onClick={() => setModifyVisible(!modifyVisible)}>
      <div>
        <div>
          {isHighest && <Shield />}
          {isLowest && <Warning />}
          <h4>{title}</h4>
        </div>
        {children}
      </div>
    </div>
  )
}

export default BooleanCoverageItem
