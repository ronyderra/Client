import React, { Component, useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Clock from "react-live-clock";
import axios from 'axios';

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
};

const useStyles = makeStyles(styles);

export default function TimeZone() {
  const classes = useStyles();
  // let options = {
  //   method: 'GET',
  //   url: 'https://upcoming-ipo-calendar.p.rapidapi.com/ipos-thisweek',
  //   headers: {
  //     'x-rapidapi-host': 'upcoming-ipo-calendar.p.rapidapi.com',
  //     'x-rapidapi-key': 'b587201fdamshe57d2f7ed417417p14d38fjsne008e82272df'
  //   }
  // };
  // const [data, setData] = useState("")


  // const getData = () => {
  //   axios.request(options).then(function (response) {
  //     console.log(response.data);
  //     setData(response)
  //     window.sessionStorage.setItem("data", response);
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }

  // useEffect(() => {
  //   let check = window.sessionStorage.getItem("data");
  //   if (check) {
  //     console.log("wehave data" + check);
  //     console.log("d " + data);

  //   } else {
  //     console.log("we do not have data")
  //     getData()
  //   }
  // }, []);

  return (
    <GridContainer>
      {/* <GridItem xs={12} sm={12} md={12}><iframe src="https://sslecal2.investing.com?ecoDayBackground=%23030303&columns=exc_flags,exc_currency,exc_importance,exc_actual,exc_forecast,exc_previous&features=datepicker,timezone&countries=25,32,6,37,72,22,17,39,14,10,35,43,56,36,110,11,26,12,4,5&calType=week&timeZone=17&lang=1" width="650" height="467" frameborder="0" allowtransparency="true" marginwidth="0" marginheight="0"></iframe></GridItem> */}
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>AMERICA TIME ZONE</h4>
            <p className={classes.cardCategoryWhite}>
              Country, Exchange, Status , Time
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Country", "Exchange", "Status", "Local Time"]}
              tableData={[
                ["USA", "Nasdaq - US", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"US/Eastern"} />],
                ["USA", "New York Stock Exchange Canonical", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"US/Eastern"} />],
                ["Brazil", "B3 - Brasil Bolsa Balcão Cash and Odd Lots Market", "OPEN", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"America/Fortaleza"} />],
                ["Mexico", "Mexican Stock Exchange (BMV) Primary Equities Market", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"America/Mexico_City"} />],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>EUROPE TIME ZONE</h4>
            <p className={classes.cardCategoryWhite}>
              Country, Exchange, Status , Time
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Country", "Exchange", "Status", "Local Time"]}
              tableData={[
                ["Moscow", "Moscow Exchange Equities Market - Equities and DR's on equities", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Europe/Berlin"} />],
                ["Germany", "Deutsche Boerse AG", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Europe/Berlin"} />],
                ["Germany", "Munich Stock Exchange", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Europe/Berlin"} />],
                ["Germany", "Stuttgart Stock Exchange", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Europe/Berlin"} />],
                ["Germany", "Xetra DAX, TecDAX, MDAX, SDAX listed", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Europe/Berlin"} />],
                ["Germany", "Frankfurt Stock Exchange", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["Spain", "Bolsa de Madrid", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["England", "LSE Group", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["Italy", "Borsa Italiana", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>ASIA TIME ZONE</h4>
            <p className={classes.cardCategoryWhite}>
              Country, Exchange, Status , Time
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Country", "Exchange", "Status", "Local Time"]}
              tableData={[
                ["India", "BSE India Limited", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["China", "Shanghai Stock Exchange", "OPEN", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["China", "Shenzhen Stock Exchange", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["China", "Hong Kong Exchanges and Clearing", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["Japan", "Japan Exchange Group ", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["Korea", "Korea Exchange KOSPI Market", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["Taiwan", "Taiwan Stock Exchange", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>OTHER TIME ZONE</h4>
            <p className={classes.cardCategoryWhite}>
              Country, Exchange, Status , Time
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Country", "Exchange", "Status", "Local Time"]}
              tableData={[
                ["Australia", " ASX Australian Securities Exchange ASX canonical - Equity market", "OPEN", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["South Africa.", "Johannesburg Stock Exchange", "CLOSED", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
                ["Canada", "TSX Venture Exchange", "OPEN", <Clock format="dddd, MMMM Do YYYY, h:mm:ss a" interval={1000} ticking={true} timezone={"Asia/Hong_Kong"} />],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>

    </GridContainer>
  );
}
