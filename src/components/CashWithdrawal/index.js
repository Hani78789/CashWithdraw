import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withDraw = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="hani">
        <div className="app-containe">
          <div className="withdrawal-container">
            <div className="balance-container">
              <p className="label">Your Balance</p>

              <h1 className="balance"> {balance}</h1>
            </div>
            <p className=""> In Rupees</p>
            <h1 className="withdraw-label ">Withdraw</h1>
            <h2 className="choose-label">CHOOSE SUM (IN RUPEES)</h2>
            <ul className="denominations-list  denominations-list li">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationDetails={eachItem}
                  key={eachItem.id}
                  withDraw={this.withDraw}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
