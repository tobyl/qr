import React, { useContext } from 'react'
import LoadingButton from './LoadingButton'
import { AppContext } from './App'

const StickyHeader = () => {

  const { pricesChanged } = useContext(AppContext)

  return (
    <div className="StickyHeader clearfix">
      {pricesChanged ? (
        <div className="Requote">
          <p>
            After changing coverage you can <LoadingButton label="Requote" /> to
            see updated pricing.
          </p>
        </div>
      ) : (
        <div>
          <div className="left">
            <span className="Dollar">$</span>
            <span className="Price">374</span>
            <span className="Per">PER MONTH</span>
          </div>
          <div className="right">
            <span className="Dollar">$</span>
            <span className="Price">4488</span>
            <span className="Per">PER YEAR</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default StickyHeader
