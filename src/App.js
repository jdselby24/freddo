import React from 'react';

import Title from './Title';
import Ticker from './BitcoinTicker';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      btcPrice: 1.00,
      lastUpdate: null
    };

    setInterval(() => {
      this.getBtcGbp();
    }, 500)

    this.getBtcGbp();
    } 

  getBtcGbp = async() => {
    let data = await fetch('https://api.coindesk.com/v1/bpi/currentprice/gbp.json');
    let dataJSON = await data.json();

    this.setState({
      btcPrice: parseFloat(await dataJSON.bpi.GBP.rate_float).toFixed(2),
      lastUpdate: await dataJSON.time.updated
    })
  }

  getFreddos = () => {
    const freddoPrice = 0.30
    let price = this.state.btcPrice
    let freddos = price / freddoPrice;
    return freddos.toFixed(2)
  }

  render() {
    return(
      <div className="container">
        <Title content="Freddo" />
        <h2 className="subtitle">The number of Freddos you can buy for one Bitcoin</h2>
        <div className="box">
        <Ticker lhtoken='BTC' rhtoken='GBP' price={this.state.btcPrice} />
        <Ticker lhtoken='BTC' rhtoken='FREDDO' price={this.getFreddos()} />
        </div>
        <p>Data last updated: {this.state.lastUpdate}</p>
        <p className="bold">Made by <a className="josh" href="http://github.com/jdselby24">Josh Selby </a>with <a className="otherLink" href="https://reactjs.org/" >React.js </a>/ Hosted on <a className="otherLink" href="http://zeit.co/home" >Now ▲</a></p>
      </div>
      
    )
  }


}

export default App;
