import React, { useContext } from 'react'
import classNames from 'classnames'
import numeral from 'numeral'
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

  const cls = (index, str = 'LowChoice') => {
    console.log(index)
    return classNames({
      'current': true,
      [str]: str,
    })
  }

  return (
    <div className="RadioGroup">
      {choices.map((ch, i) => (
        <label
          htmlFor={name + i}
          key={name + i}
          className={cls(i, ch[2])}
        >
          <input
            id={name + i}
            name={name}
            type="radio"
            onChange={onChange}
            value={ch[0]}
            checked={compareVals(ch[0])}
          />
          {ch[1]}
        </label>
      ))}
    </div>
  )
}

export default RadioGroup
