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

  const format = value => {
    if (kind === 'number') {
      return numeral(value).format('0,0')
    }
    return value
  }

  const cls = () => {
    return classNames({
      'current': true, 
    })
  }

  return (
    <div className="RadioGroup">
      {choices.map((ch, i) => (
        <label
          htmlFor={name + i}
          key={name + i}
          className={cls()}
        >
          <input
            id={name + i}
            name={name}
            type="radio"
            onChange={onChange}
            value={ch[0]}
            checked={compareVals(ch[0])}
          />
          <span>{format(ch[1])}</span>
        </label>
      ))}
    </div>
  )
}

export default RadioGroup
