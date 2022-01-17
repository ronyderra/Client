import React, { Component, useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import axios from "axios";
import CardBody from "../../components/Card/CardBody.js";
import socket from "../../socket";

export default function BuyingPowerTable(props) {

  const [buyingPowerList, setbuyingPower] = useState([])
  const getbuyingPowerList = async () => {
    const response = await axios.get("https://xnesdeskserver.herokuapp.com/api/buyingPowerList", { mode: 'cors' });
    const buyingPowerListData = response.data;
    const sorted = await buyingPowerListData.sort(function (a, b) {
      return (b.id - a.id);
    })
    setbuyingPower(sorted)
  }

  useEffect(async () => {
    await getbuyingPowerList();
    socket.on("admin-change-delete", async () => {
      await getbuyingPowerList();
    })
    return () => alert('goodbye')
  }, []);
  // useEffect(() => {
  //   return () => alert('goodbye')
  // }, []);

  const Row = (props) => {
    const { row } = props;
    return (
      <React.Fragment>
        <TableRow >
          <TableCell align="center">{row.accountNumber}</TableCell>
          <TableCell align="center">{row.fullName}</TableCell>
          <TableCell align="center">{row.amount}</TableCell>
          <TableCell align="center">{row.currency}</TableCell>
          <TableCell align="center">{row.action}</TableCell>
          <TableCell align="center">{row.platform}</TableCell>
          <TableCell align="center">{row.unumber}</TableCell>
          <TableCell align="center">{row.sheled}</TableCell>
          <TableCell align="center">{row.submitter}</TableCell>
          <TableCell align="center">{row.reason}</TableCell>
          <TableCell align="center">{row.date}</TableCell>
          <TableCell align="center">{row.status}</TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  return (
    <Card>
      <CardHeader color="info">
        <h4 >Buying Power List</h4>
      </CardHeader>
      <CardBody>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Account Number</TableCell>
              <TableCell align="center">Full Name</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Currency</TableCell>
              <TableCell align="center">Action</TableCell>
              <TableCell align="center">Platform</TableCell>
              <TableCell align="center">Unumber</TableCell>
              <TableCell align="center">Sheled</TableCell>
              <TableCell align="center">Submitter</TableCell>
              <TableCell align="center">Reason</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {buyingPowerList.map((row, abx) => (
              <Row key={abx} row={row} />
            ))}
          </TableBody>
        </Table>
      </CardBody>

    </Card>
  );
}

