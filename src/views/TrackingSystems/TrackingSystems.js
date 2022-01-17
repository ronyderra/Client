import React, {  useEffect, useState } from "react";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import TrackingForm from "../../components/Forms/TrackingForm/TrackingForm";
import BigDataGrid from '../../components/BigDataGrid/BigDataGrid.js'
import * as dataCollection from '../../dataCollection/dataCollections'
import socket from "../../socket";
import axios from "axios";

export default function TrackingSystem() {

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
  }, []);

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <TrackingForm />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <BigDataGrid  header={'Tracking List'} colum={dataCollection.trackingColum} rows={trackingList} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
