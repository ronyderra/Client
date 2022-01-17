import React, {  useEffect, useState } from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import TrackingMasterForm from "../../components/Forms/TackingMasterForm/trackingMasterForm";
import BigDataGrid from '../../components/BigDataGrid/BigDataGrid.js'
import * as dataCollection from '../../dataCollection/dataCollections'
import socket from "../../socket";
import axios from "axios";

export default function TrackingMaster() {

  const [trackingList, setTrackingList] = useState([])

  const getTrackingList = async () => {
    const response = await axios.get("https://xnesdeskserver.herokuapp.com/api/tracking", { mode: 'cors' });
    const trackingListData = response.data;
    
    const sorted = await trackingListData.sort(function (a, b) {
      return (b.id - a.id);
    })
    console.log(sorted)

    setTrackingList(sorted)
  }

  useEffect(async () => {
    await getTrackingList();
    socket.on("trackAdded", async () => {
      await getTrackingList();
    })
    socket.on("tracking-update-responded", async () => {
      await getTrackingList();
    })
    // return () => alert('goodbye')
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <TrackingMasterForm />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <BigDataGrid  header={'Tracking List'} colum={dataCollection.trackingColum} rows={trackingList} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
