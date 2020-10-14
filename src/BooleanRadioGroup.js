import React, { useContext } from 'react'
import { AppContext } from './App'

import './radios.scss'

const BooleanRadioGroup = ({ name, choices = [] }) => {

  const { set, values } = useContext(AppContext)

  const onChange = e => {
    const val = e.target.value
    set(name, val)
  }

  return (
    <div className="RadioGroup BooleanRadioGroup">
      {choices.map((ch) => (
        <label
          htmlFor={ch[0]}
          key={ch[0]}
          className={ch[0] === values[name] ? 'current' : null}
        >
          <input
            id={ch[0]}
            name={name}
            type="radio"
            onChange={onChange}
            value={ch[0]}
            checked={ch[0] === values[name]}
          />
          <span>{ch[1]}</span>
        </label>
      ))}
    </div>
  )
}

export default BooleanRadioGroup
