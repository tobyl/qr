import React, { useContext } from 'react'
import CoverageItem from './CoverageItem'
import BooleanCoverageItem from './BooleanCoverageItem'
import DepreciationWaiverItem from './DepreciationWaiverItem'
import AccidentWaiverItem from './AccidentWaiverItem'
import RadioGroup from './RadioGroup'
import BooleanRadioGroup from './BooleanRadioGroup'
import { AppContext } from './App'
import { formatValue } from './utils'

import './coverage.scss'

const CoverageList = () => {

  const { values, choices } = useContext(AppContext)

  return (
    <div className="CoverageList">
      <CoverageItem title="Liability Limit" name="liability_limit" Highest="2000000" Mid="1000000">
        <p className="BriefDescription">If you are in an accident, your damages and medical care are covered for up to {formatValue(values['liability_limit'], 'currency')}</p>
        <div className="Modify">
          <RadioGroup
            name="liability_limit"
            choices={choices['liability_limit']}
          />
          <div className="HelpCopy">
            <small>This protects you from lawsuits resulting from accidents causing bodily injury or death to others or property damage.</small>
          </div>
        </div>
        <small className="CoverageLevel">Currently at Inova's recommended level of coverage</small>
      </CoverageItem>
      <CoverageItem title="Comprehensive Coverage" name="comprehensive_coverage" Highest="1000" Mid="500" Lowest="0">
        <p className="BriefDescription">A deductible of {formatValue(values['comprehensive_coverage'], 'currency')} for damages to your vehicle not caused by a traffic accident (e.g. theft, fire, vandalism).</p>
        <div className="Modify">
          <RadioGroup
            name="comprehensive_coverage"
            choices={choices['comprehensive_coverage']}
          />
          <div className="HelpCopy">
            <small>Comprehensive coverage is the maximum amount you pay in the event of an at-fault accident.</small>
          </div>
        </div>
        <small className="CoverageLevel">Lower than Inova's recommended level of coverage</small>
      </CoverageItem>
      <CoverageItem title="Collision Coverage" name="collision_coverage">
        <p className="BriefDescription">A deductible of {formatValue(values['collision_coverage'], 'currency')} for your vehicle in the event of an at-fault accident, single vehicle accident, or hit and run.</p>
        <div className="Modify">
          <RadioGroup
            name="collision_coverage"
            choices={choices['collision_coverage']}
          />
        </div>
        <small className="CoverageLevel">Lower than Inova's recommended level of coverage</small>
      </CoverageItem>
      <BooleanCoverageItem title="Transportation Replacement" name="transportation_replacement">
          <p className="BriefDescription">{values['transportation_replacement']} for a replacement vehicle if an insurance claim requires your vehicle to be out of service.</p>
        <div className="Modify">
          <BooleanRadioGroup
            name="collision_coverage"
            choices={choices['collision_coverage']}
          />
        </div>
        <small className="CoverageLevel">Lower than Inova's recommended level of coverage</small>
      </BooleanCoverageItem>
      <BooleanCoverageItem title="Damage to Non-owned Autos" name="non_owned_autos">
        <p className="BriefDescription">{values['transportation_replacement']} on any rental vehicle in the Canada or US.</p>
        <div className="Modify">
          <BooleanRadioGroup
            name="collision_coverage"
            choices={choices['collision_coverage']}
          />
        </div>
        <small className="CoverageLevel">Lower than Inova's recommended level of coverage</small>
      </BooleanCoverageItem>
      <DepreciationWaiverItem title="Waiver of Depreciation" name="depreciation_waiver">
        <p className="BriefDescription">Ensures that in the event of an accident, you will be reimbursed for the purchase price without any depreciation.</p>
      </DepreciationWaiverItem>
      <AccidentWaiverItem title="Accident Waiver" name="accident_waiver">
        <p className="BriefDescription">In the event of you being in an accident in which you are at fault, it will protect your driving record and forgive the accident.</p>
      </AccidentWaiverItem>
    </div>
  )
}

export default CoverageList
