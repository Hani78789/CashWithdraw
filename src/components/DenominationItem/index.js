import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withDraw} = props
  const {value} = denominationDetails

  const onClickhandele = () => {
    withDraw(value)
  }

  return (
    <div>
      <li className="denomination-item">
        <button
          type="button"
          onClick={onClickhandele}
          className="denomination-button "
        >
          {value}
        </button>
      </li>
    </div>
  )
}

export default DenominationItem
