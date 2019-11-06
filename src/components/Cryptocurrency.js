import React, { Component } from 'react';
import './Cryptocurrency.css';

class Cryptocurrency extends Component {
  render() {
    var {
      id,
      name,
      symbol,
      price_usd,
      percent_change_1h,
      percent_change_24h,
      percent_change_7d,
      market_cap_usd,
      pic
      
  } = this.props.data;

  return (
    <div className="col-xs-12 col-sm-12 col-md-4 d-flex align-items-stretch mb-3">
        <div className="card">
            <img className="card-img" src={pic} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 449">
                <path
                d="M-6.84 362.89c28.01-16.38 76.91-39.23 136.86-38.95 14.79.07 54.58.26 97.9 16.84 11.73 4.49 21.07 9.17 40 14.74 13.84 4.07 35.91 10.42 64.22 11.58 21.61.89 38.04-1.61 62.11-5.26 12.27-1.86 27.49-4.66 54.74-8.42 8.4-1.16 17.9-2.4 30.53-2.11 11.83.28 21.61 1.79 28.42 3.16l1.05 96.85-519-1.05c1.06-29.13 2.12-58.25 3.17-87.38z"
                fill="#fafafa" /></svg>
            <div className="card-content">
                <h4>{name} {(symbol)}</h4>
                <p>$ { (+price_usd).toFixed(2) } </p>
                <p>{percent_change_1h}% 1hr </p>
                <p>{percent_change_24h}% 24hr </p>
                <p>{percent_change_7d}% 7days </p>
                <p> Market Cap { (+market_cap_usd).toFixed(2) } </p>
            </div>
        </div>
    </div>
  )
 }
}

export default Cryptocurrency;