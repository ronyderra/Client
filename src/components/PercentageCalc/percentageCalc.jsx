import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "./main.css"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    marginTop: 10,
    marginBottom: 20,
    // margin: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '55%'
    }
  }
}));

const Main = () => {
  const classes = useStyles();


  return (
    <Container className={classes.root}>
      <div class="container">
        <h2 class="unselectable">Percentage Calculator</h2>
        <h6 class="unselectable">Click on result to copy to clipboard</h6>
        <div class="methods-wrapper">
          <div class="method-container percent-from">
            <div class="left-elements mobile-column">
              <div>
                <span class="unselectable">What is</span>
                <input class="modern percent mobile-align" onkeydown="return (event.keyCode!=188);" type="number"
                  id="from-first-input"></input>
                <span class="unselectable">%</span>
              </div>
              <div>
                <span class="unselectable"><span class="spacing-desktop"></span>of</span>
                <input class="modern long-input mobile-align mobile-from" type="number"
                  onkeydown="return (event.keyCode!=188);" id="from-second-input"></input>
                <span class="unselectable">?<span class="mobile-from-label"></span></span>
              </div>
            </div>
            <div class="right-elements">
              <span class="result-text unselectable">=</span>
              <input class="modern result resultmouse margin-right" readonly id="from-result-input"></input>
            </div>
          </div>
          <div class="method-container percent-of">
            <div class="left-elements mobile-column">
              <div>
                <input class="modern long-input no-margin-left mobile-align" type="number"
                  onkeydown="return (event.keyCode!=188);" id="of-first-input"></input>
                <span class="unselectable">is what % </span>
              </div>
              <div>
                <span class="unselectable"><span class="spacing-desktop"></span>of</span>
                <input class="modern long-input mobile-align mobile-of" type="number"
                  onkeydown="return (event.keyCode!=188);" id="of-second-input"></input>
                <span class="unselectable">?</span>
              </div>
            </div>
            <div class="right-elements">
              <span class="result-text unselectable mobile-of-label">=</span>
              <input class="modern percent resultmouse mobile-result-of" readonly id="of-result-input"></input>
              <span class="unselectable">%</span>
            </div>
          </div>
          <div class="method-container percent-increase">
            <div class="left-elements mobile-column tablet-column">
              <div>
                <span class="unselectable">In<span class="mobile-expand"></span>/<span
                  class="mobile-expand-second"></span>Decrease <span class="mobile-expand-third"></span>%</span>
              </div>
              <div>
                <span class="unselectable"><span class="spacing-desktop"></span>from</span>
                <input class="modern long-input mobile-align mobile-increase-first" onkeydown="return (event.keyCode!=188);"
                  type="number" id="increase-first-input"></input>
              </div>
              <div>
                <span class="unselectable">to</span>
                <input class="modern long-input mobile-align mobile-increase-second"
                  onkeydown="return (event.keyCode!=188);" type="number" id="increase-second-input"></input>
                <span class="unselectable">?</span>
              </div>
            </div>
            <div class="right-elements">
              <span class="result-text unselectable mobile-increase-label">=</span>
              <input class="modern percent resultmouse mobile-result-increase" readonly id="increase-result-input"></input>
              <span class="unselectable">%</span>
            </div>
          </div>
        </div>
        <div class="setting">
          <div class="option">
            <label class="vertical-align unselectable">Convert results to german notation</label>
            <button class="btn convert convert-dark" id="button-convert">
              <i class="fas fa-sync-alt" id="convert-symbol"></i>
            </button>
          </div>
          <div class="option">
            <label class="unselectable">Round to second decimal place</label>
            <div class="switch-align">
              <label class="switch">
                <input type="checkbox" id="switch-rounding" checked />
                <div></div>
              </label>
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
};

export default Main;
