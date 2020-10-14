import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
import { Shield, Warning, Stop } from './icons'

const CoverageItem = ({ children, title, name }) => {

  const [modifyVisible, setModifyVisible] = useState(false)

  const { values, choices } = useContext(AppContext)

  const opts = choices[name].map(x => x[0])
  const val = values[name]
  const index = opts.indexOf(val)

  const isHighest = index + 1 === opts.length
  const isLowest = index === -1

  const cls = classNames('CoverageItem', {
    'Modifying': modifyVisible,
    'Highest': isHighest,
    'Lowest': isLowest,
    'Mid': !isHighest && !isLowest,
  })

  return (
    <div className={cls} onClick={() => setModifyVisible(!modifyVisible)}>
      <div>
        <div>
          {isHighest && <Shield />}
          {!isHighest && !isLowest && <Warning />}
          {isLowest && <Stop />}
          <h4>{title}</h4>
        </div>
        {children}
      </div>
    </div>
  )
}

export default CoverageItem
