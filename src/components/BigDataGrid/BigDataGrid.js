import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarExport, gridClasses } from '@mui/x-data-grid';
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export default function BigDataGrid(props) {
  return (
    <Card>
      <CardHeader color="info">
        <h4 >{props.header}</h4>
      </CardHeader >
      <CardBody>
        <div style={{ height: 700, width: '100%' }}>
          <DataGrid
            columns={props.colum}
            rows={props.rows}
            components={{ Toolbar: CustomToolbar, }}
            pageSize={10}
            rowsPerPageOptions={[10]}
            // checkboxSelection
          />
        </div>
      </CardBody> 
    </Card>
  );
}
