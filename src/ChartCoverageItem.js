import React, { useState, useContext } from 'react'
import classNames from 'classnames'
import { AppContext } from './App'
import { Shield, Warning } from './icons'

const ChartCoverageItem = ({ children, title, name, Highest = 'increased', Lowest = 'standard', choices = [] }) => {

  const [modifyVisible, setModifyVisible] = useState(true)

  const { values, set } = useContext(AppContext)

  const val = values[name]

  const isHighest = val === Highest
  const isLowest = val === Lowest

  const onChange = (e) => {
    const val = e.target.value
    set(name, val)
  }

  const cls = classNames('CoverageItem ChartCoverageItem', {
    'Modifying': modifyVisible,
    'Highest': isHighest,
    'Mid': isLowest,
  })

  return (
    <div className={cls}>
      <div>
        <div>
          {isHighest && <Shield />}
          {isLowest && <Warning />}
          <h4>{title}</h4>
        </div>
        <div className="Modify">
          <table>
            <thead>
              <tr>
                <th className="text-left">Coverage</th>
                {choices.map((ch, i) => (
                  <th key={name + i}>
                    <label htmlFor={name + i}>
                      <span>{ch[1]}</span>
                      <input
                        id={name + i}
                        name={name}
                        type="radio"
                        onChange={onChange}
                        value={ch[0]}
                        checked={values[name] === ch[0]}
                      />
                    </label>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Lump sum for a<br />
                  spouse
                </td>
                <td className="text-center Standard">
                  <strong>$25,000</strong>
                </td>
                <td className="text-center Increased">
                  <strong>$50,000</strong>
                </td>
              </tr>
              <tr>
                <td>
                  Lump sum for each
                  <br />
                  dependent
                </td>
                <td className="text-center Standard">
                  <strong>$10,000</strong>
                </td>
                <td className="text-center Increased">
                  <strong>$20,000</strong>
                </td>
              </tr>
              <tr>
                <td>Funeral expenses</td>
                <td className="text-center Standard">
                  <small>Up to</small>
                  <strong>$6,000</strong>
                </td>
                <td className="text-center Increased">
                  <small>Up to</small>
                  <strong>$8,000</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ChartCoverageItem
