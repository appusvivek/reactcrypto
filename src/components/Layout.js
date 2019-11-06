import React, { Component } from 'react';
import axios from 'axios';

import './Layout.css';
import Cryptocurrency from './Cryptocurrency';
import Bitcoin from './bitcoin.jpg'
import Etherum from './etherum.jpg'
import Litecoin from './litecoin.jpeg'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: "bitcoin",
                    name: "Bitcoin",
                    symbol: "BTC",
                    price_usd: "1",
                    percent_change_1h: "0",
                    percent_change_24h: "0",
                    percent_change_7d: "0",
                    market_cap_usd: "1",
                    pic: Bitcoin
                },
                {
                  id: "ethereum",
                  name: "Ethereum",
                  symbol: "ETH",
                  price_usd: "1",
                  percent_change_1h: "0",
                  percent_change_24h: "0",
                  percent_change_7d: "0",
                  market_cap_usd: "1",
                  pic: Etherum
                },
                {
                  id: "litecoin",
                  name: "Litecoin",
                  symbol: "LTC",
                  price_usd: "1",
                  percent_change_1h: "0",
                  percent_change_24h: "0",
                  percent_change_7d: "0",
                  market_cap_usd: "1",
                  pic: Litecoin
                }
            ]
        }
    }

    componentDidMount() {
        this.fetchCryptocurrencyData();
        this.interval = setInterval(() => this.fetchCryptocurrencyData(), 10 * 1000);
    }
    
    fetchCryptocurrencyData() {
        axios.get("https://api.coinmarketcap.com/v1/ticker/")
            .then(response => {
                var wanted = ["bitcoin", "ethereum", "litecoin"];
                var result = response.data.filter(currency => wanted.includes(currency.id));

                result.map(item => { 
                    if(item.id == 'bitcoin'){
                        item.pic = Bitcoin;
                    }else if(item.id == 'litecoin'){
                        item.pic = Litecoin;
                    }else{
                        item.pic = Etherum;
                    }
                })
                this.setState({data: result});
            })
            .catch(err => console.log(err));
    }

    render() {
        var screeners = this.state.data.map((currency) =>
            <Cryptocurrency data={currency} key={currency.id} />
    );
        return (
            <div className="container" >
                <div className="row mt-5 mb-5">
                  {screeners}
                </div>
            </div>

        );
    }
}

export default Layout;