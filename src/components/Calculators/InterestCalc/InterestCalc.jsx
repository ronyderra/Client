import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from "../../Card/Card.js";
import CardHeader from "../../Card/CardHeader.js";
import CardBody from "../../Card/CardBody.js";

import TabsPanel from '../../TabsPanel';
import SimpleInterest from './SimpleInterest';
import CompoundInterest from '../../CompoundInterest';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: 0,
    marginBottom: 20,
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  }
}));

const InterestCalc = () => {
  const classes = useStyles();
  const [tabStatus, setTabStatus] = useState(0);
  const top = useRef();
  const bottom = useRef();

  const scrollTop = () => {
    top.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollBottom = () => {
    bottom.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Card>
      <CardHeader color="info">
        <h4 >Interest Calculator</h4>
        <p>Simple Interest , Compound Interest</p>
      </CardHeader>
      <CardBody>
        <Container className={classes.root}>
          <div ref={top}></div>
          <Paper elevation={3} className={classes.paper}>
            <TabsPanel tabStatus={tabStatus} setTabStatus={setTabStatus} />
            {tabStatus === 0 && (
              <SimpleInterest scrollTop={scrollTop} scrollBottom={scrollBottom} />
            )}
            {tabStatus === 1 && (
              <CompoundInterest scrollTop={scrollTop} scrollBottom={scrollBottom} />
            )}
          </Paper>
          <div ref={bottom}></div>
        </Container>
      </CardBody>
    </Card>
  );
};

export default InterestCalc;
