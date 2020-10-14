import React, { useContext } from 'react'
import { AppContext } from './App'

import './radios.scss'

const RadioGroup = ({ name, choices = [], kind = 'number' }) => {

  const { set, values } = useContext(AppContext)

  const onChange = e => {
    const val = e.target.value
    set(name, val)
  }

  const compareVals = item => {
    if (kind === 'number') {
      return item === Number(values[name])
    }
    return item === values[name]
  }

  return (
    <div className="RadioGroup">
      {choices.map((ch, i) => (
        <label
          htmlFor={name + i}
          key={name + i}
          className={compareVals(ch[0]) ? 'current' : null}
        >
          <input
            id={name + i}
            name={name}
            type="radio"
            onChange={onChange}
            value={ch[0]}
            checked={compareVals(ch[0])}
          />
          <span>{ch[1]}</span>
        </label>
      ))}
    </div>
  )
}

export default RadioGroup
