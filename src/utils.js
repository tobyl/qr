import React from 'react'
import numeral from 'numeral'

export const formatValue = (value, kind) => {

  let val = <strong>invalid</strong>

  if (kind === 'currency' || kind === 'number') {
    val = <strong className="currencyValue">${numeral(value).format('0,0')}</strong>
  }

  return val
}