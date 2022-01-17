import React, { useEffect, useState } from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import BuyingPowerForm from "../../components/Forms/BuyingPowerForm/buyingPowerForm";
import BigDataGrid from '../../components/BigDataGrid/BigDataGrid.js'
import * as dataCollection from '../../dataCollection/dataCollections'
import socket from "../../socket";
import axios from "axios";

export default function BuyingPower() {

  const [buyingPowerList, setbuyingPower] = useState([])

  const getbuyingPowerList = async () => {
    const response = await axios.get("https://xnesdeskserver.herokuapp.com/api/buyingPowerList", { mode: 'cors' });
    const buyingPowerListData = response.data;
    const sorted = await buyingPowerListData.sort(function (a, b) {
      return (b.id - a.id);
    })
    // console.log(sorted)
    setbuyingPower(sorted)
  }

  useEffect(async () => {
    // await socket.connect()
    await getbuyingPowerList();
    socket.on("buyingPowerStatusChanged", async () => {
      await getbuyingPowerList();
    })
    socket.on("buyingpowerPost", async () => {
      await getbuyingPowerList();
    })
  }, []);

  // useEffect(() => {
  //   return () => {
  //     socket.disconnect()
  //   }
  // }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <BuyingPowerForm />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} >
          <BigDataGrid rows={buyingPowerList} header={'Buying Power List'} colum={dataCollection.BuyingPowerColomn} />
        </GridItem>
      </GridContainer>
    </div>
  );
}

