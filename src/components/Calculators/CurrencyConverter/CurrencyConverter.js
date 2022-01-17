import React from "react";
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import CardBody from "../../Card/CardBody.js";
import './CurrencyConverter.css'


export default class CurrencyConverter extends React.Component {
  componentDidMount() {
    this.reloadFD7mMaOrA();
  }
  reloadFD7mMaOrA = () => {
    var sc = document.getElementById('scFD7mMaOrA');
    if (sc) sc.parentNode.removeChild(sc);
    sc = document.createElement('script');
    sc.type = 'text/javascript'; sc.charset = 'UTF-8'; sc.async = true;
    sc.id = 'scFD7mMaOrA';
    sc.src = 'https://freecurrencyrates.com/en/widget-horizontal?iso=USD-EUR-GBP-HKD-ILS-CAD-BTC-PLN-CZK-CHF-AUD-NZD&df=1&p=FD7mMaOrA&v=fits&source=fcr&width=1400&width_title=300&firstrowvalue=1&thm=A6C9E2,FCFDFD,4297D7,5C9CCC,FFFFFF,C5DBEC,FCFDFD,2E6E9E,000000&title=Currency%20Converter&tzo=-120';
    var div = document.getElementById('gcw_mainFD7mMaOrA'); div.parentNode.insertBefore(sc, div);
  }

  render() {
    return (
            <Card>  
              <CardHeader color="info">
                <h4 >Currency Converter</h4>
              </CardHeader>
              <CardBody>
                <div id='gcw_mainFD7mMaOrA' class='gcw_mainFD7mMaOrA'></div>
                {/* <a id='gcw_siteFD7mMaOrA' href='https://freecurrencyrates.com/en/'>FreeCurrencyRates.com</a>   */}
              </CardBody>
            </Card>
    );
  }
}
