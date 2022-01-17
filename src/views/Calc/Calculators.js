import React from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import InterestCalc from "../../components/Calculators/InterestCalc/InterestCalc";
import PercentageCalc from "../../components/Calculators/PercentageCalc/PercentageCalc";
import MainAveragePrice from "../../components/Calculators/AveragePrice/MainAveragePrice";
import CurrencyConverter from "../../components/Calculators/CurrencyConverter/CurrencyConverter";

export default class Calculator extends React.Component {

  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CurrencyConverter/>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <MainAveragePrice />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InterestCalc />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info">
                <h4 >Average Down Calculator</h4>
              </CardHeader>
              <CardBody>
                <PercentageCalc/>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
