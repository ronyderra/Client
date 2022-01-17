import React from "react";
// @material-ui/core components
// core components
import GridContainer from "../../Grid/GridContainer";
// core components
import GridItem from "../../Grid/GridItem.js";
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import CardBody from "../../Card/CardBody.js";
import PriceQuantity from './PriceQuantity';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import TableFooter from '@material-ui/core/TableFooter';
import Button from "@material-ui/core/Button";
import InterestCalc from "../InterestCalc/InterestCalc"
import './price.css'


export default class MainAveragePrice extends React.Component {
    state = {
      averagePrice: { 0: { totalPrice: 0.0, totalShares: 0 } },
      keyTracker: 0
    }
    componentDidMount() {
      this.reloadFD7mMaOrA();
    }
    reloadFD7mMaOrA = () => {
      var sc = document.getElementById('scFD7mMaOrA');
      if (sc) sc.parentNode.removeChild(sc);
      sc = document.createElement('script');
      sc.type = 'text/javascript'; sc.charset = 'UTF-8'; sc.async = true;
      sc.id = 'scFD7mMaOrA';
      sc.src = 'https://freecurrencyrates.com/en/widget-horizontal?iso=USD-EUR-GBP-HKD-ILS-CAD-BTC-PLN&df=1&p=FD7mMaOrA&v=fits&source=fcr&width=1400&width_title=300&firstrowvalue=1&thm=A6C9E2,FCFDFD,4297D7,5C9CCC,FFFFFF,C5DBEC,FCFDFD,2E6E9E,000000&title=Currency%20Converter&tzo=-120';
      var div = document.getElementById('gcw_mainFD7mMaOrA'); div.parentNode.insertBefore(sc, div);
    }
    handleChange = (key, totalPrice = 0.0, totalShares = 0) => {
      const { averagePrice } = this.state;
      averagePrice[key].totalPrice = totalPrice;
      averagePrice[key].totalShares = totalShares;
      this.setState(state => ({ averagePrice }));
    }
    addRow = () => {
      this.setState(state => {
        let { averagePrice, keyTracker } = state;
        keyTracker += 1;
        averagePrice[keyTracker] = { totalPrice: 0.0, totalShares: 0 };
        return { averagePrice, keyTracker };
      });
    }
    deleteRow = event => {
      const key = event.target.getAttribute('key-id');
      this.setState(state => {
        let { averagePrice } = state;
        delete (averagePrice[key]);
        return averagePrice;
      });
    }
  
    render() {
      const averagePriceKeys = Object.keys(this.state.averagePrice);
      const priceQuantityArr = averagePriceKeys.map((key) =>
        <React.Fragment key={key}>
          <PriceQuantity index={key} handleChange={this.handleChange} deleteRow={this.deleteRow}
            removeButton={averagePriceKeys.length > 1} />
          {/* <br /> */}
        </React.Fragment>
      );
      const averagePriceArr = averagePriceKeys.map(key => this.state.averagePrice[key]);
      const averagePrice = averagePriceArr.reduce((acc, cur) => {
        const totalPrice = acc.totalPrice + cur.totalPrice || 0.0;
        const totalShares = acc.totalShares + cur.totalShares || 0;
        return { totalPrice, totalShares };
      });
      const { totalPrice, totalShares } = averagePrice;
  
      return (
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Card>
                <CardHeader color="info">
                  <h4 >Average Pice Calculator</h4>
                  <p>Shares Bought, Purchase Price, Market Value , Time</p>
                </CardHeader>
                <CardBody>
                  <Table>
                    <TableHead>
                      <TableRow >
                        <TableCell>Shares Bought</TableCell>
                        <TableCell>Purchase Price</TableCell>
                        <TableCell>Market Value</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {priceQuantityArr.map(priceQuantity => priceQuantity)}
                    </TableBody>
                    <TableFooter>
                      <TableRow >
                        <TableCell>Average Price : {(totalPrice / totalShares || 0.0).toFixed(2)}</TableCell>
                        <TableCell>Total Shares : {totalShares}</TableCell>
                        <TableCell>Total Investment : {(totalPrice).toFixed(2)}</TableCell>
                        <TableCell><Button onClick={this.addRow}>Add Row</Button></TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      );
    }
  }