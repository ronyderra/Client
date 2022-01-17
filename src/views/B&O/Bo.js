
import React, { useEffect, useState } from "react";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import ObForm from '../../components/Forms/ObForm/obForm'
import GridItem from "../../components/Grid/GridItem.js";
import BigDataGrid from '../../components/BigDataGrid/BigDataGrid.js'
import * as dataCollection from '../../dataCollection/dataCollections'
import socket from "../../socket";
import axios from "axios";

export default function Bo() {
  
  const [obList, setobList] = useState([])

  const getobList = async () => {
    const response = await axios.get("https://xnesdeskserver.herokuapp.com/api/order", { mode: 'cors' });
    const obListData = response.data;
    const sorted = await obListData.sort(function (a, b) { return (b.id - a.id); })
    await setobList(sorted)
  }

  useEffect(async () => {
    await getobList();
    socket.on("orderAdded", async () => {
      await getobList();
    })
    socket.on("statusChanged", async () => {
      await getobList();
    })
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <ObForm />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <BigDataGrid
            rows={obList}
            colum={dataCollection.ObColumn}
            header={'Bloomberg and Oppenheimer Orders'} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
