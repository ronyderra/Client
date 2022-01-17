import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import GridContainer from "../../components/Grid/GridContainer.js";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Table from "@material-ui/core/Table";
import GridItem from "../../components/Grid/GridItem.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import TableRow from "@material-ui/core/TableRow";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  let options = {
    method: 'GET', url: 'https://upcoming-ipo-calendar.p.rapidapi.com/ipos-thisweek',
    headers: { 'x-rapidapi-host': 'upcoming-ipo-calendar.p.rapidapi.com', 'x-rapidapi-key': 'b587201fdamshe57d2f7ed417417p14d38fjsne008e82272df' }
  };
  const [info, setInfo] = useState([])

  // useEffect(async () => {
  //   let response = await getFromSql()
  //   console.log(response)
  //   if (!response) {
  //     await setInfo(response.data);
  //   } else {
  //     await getFromApi()
  //   }
  // }, []);

  const getFromApi = async () => {
    await axios.request(options).then(function (response) {
      setInfo(response.data.data)
      saveData(response.data.data)
    }).catch(function (error) {
      console.error(error);
    });
  }

  const saveData = async (data) => {
    let saveData = JSON.stringify(data)
    for (let i = 0; i < saveData.length; i++) {
      let oneObj = saveData[i]
      const postingResponse = await axios.post("https://xnesdeskserver.herokuapp.com/api/ipo", { mode: 'cors', oneObj })
      console.log(postingResponse)
    }
  } 

  const getFromSql = async () => {
    const getIpoResponse = await axios.get('https://xnesdeskserver.herokuapp.com/api/ipo', { mode: 'cors' })
    return (getIpoResponse)
  }

  const Row = (props) => {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }} className={classes.tableBodyRow}>
          <TableCell className={classes.tableCell}>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell className={classes.tableCell} align="left">{row.name}</TableCell>
          <TableCell className={classes.tableCell} align="left">{row.symbol}</TableCell>
          <TableCell className={classes.tableCell} align="left">{row.exchange}</TableCell>
          <TableCell className={classes.tableCell} align="left">{row.industry}</TableCell>
          <TableCell className={classes.tableCell} align="left">{row.ipoDate}</TableCell>
          <TableCell className={classes.tableCell} align="left">{row.marketCap / 1000000}M</TableCell>
          <TableCell className={classes.tableCell} align="left">{row.ipoPrice}</TableCell>
          <TableCell className={classes.tableCell} align="left">{row.sharesOfferd / 1000000}M</TableCell>
          <TableCell className={classes.tableCell} align="left">{row.sharesOutstanding / 1000000}M</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 0 }}>
                <Typography variant="h6" gutterBottom component="div">
                  description
                </Typography>
                <div> {row.description}</div>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 >Material Dashboard Heading</h4>
            <p >
              Created using Roboto Font Family
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableResponsive}>
              <Table aria-label="collapsible table" className={classes.table}>
                <TableHead>
                  <TableRow className={classes.tableHeadRow}>
                    <TableCell />
                    <TableCell align="left">name</TableCell>
                    <TableCell align="left">symbol</TableCell>
                    <TableCell align="left">exchange</TableCell>
                    <TableCell align="left">industry</TableCell>
                    <TableCell align="left">ipoDate</TableCell>
                    <TableCell align="left">marketCap</TableCell>
                    <TableCell align="left">ipo Price Final</TableCell>
                    <TableCell align="left">shares Offered</TableCell>
                    <TableCell align="left">shares Outstanding</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {info.map((row) => (
                    <Row key={row.name} row={row} />
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 >Average Down Calculator</h4>
            <p>name, symbol exchange , industry</p>
          </CardHeader>
          <CardBody>
            <Table>
              <TableHead>
                <TableRow >
                  <TableCell>name</TableCell>
                  <TableCell>symbol</TableCell>
                  <TableCell>exchange</TableCell>
                  <TableCell>industry</TableCell>
                  <TableCell>ipoDate</TableCell>
                  <TableCell>marketCap</TableCell>
                  <TableCell>ipoPriceFinal</TableCell>
                  <TableCell>sharesOffered</TableCell>
                  <TableCell>sharesOutstanding</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  info.map(({ name, symbol, exchange, industry, ipoDate, marketCap, ipoPriceFinal, sharesOffered, sharesOutstanding }) => (
                    <TableRow key={symbol} hover={true}>
                      <TableCell key={symbol}>{symbol}</TableCell>
                      <TableCell key={name}>{name}</TableCell>
                      <TableCell key={exchange}>{exchange}</TableCell>
                      <TableCell key={industry}>{industry}</TableCell>
                      <TableCell key={ipoDate}>{ipoDate}</TableCell>
                      <TableCell key={marketCap}>{marketCap}M</TableCell>
                      <TableCell key={ipoPriceFinal}>{ipoPriceFinal}</TableCell>
                      <TableCell key={sharesOffered}>{sharesOffered}M</TableCell>
                      <TableCell key={sharesOutstanding}>{sharesOutstanding}M</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}


