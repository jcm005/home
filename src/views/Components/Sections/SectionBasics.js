// the section that holds my projects 
import React from "react";
// plugin that creates slider
import Slider from "nouislider";
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Paginations from "components/Pagination/Pagination.js";
import Badge from "components/Badge/Badge.js";
import profile from "assets/img/faces/plot.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import team1 from "assets/img/faces/avatar.jpg";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  React.useEffect(() => {
   
   
    return function cleanup() {};
  });
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1 className={classes.title}>Projects</h1>
        </div>
         <GridContainer justify="center">
          <div id="Quant" className={classes.container}>
            <Card plain>
              <h3 className={classes.title}>Quantitative Trader</h3>
              <div className={classes.space30} />

              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={profile} alt="..." className={imageClasses} />
              </GridItem>
              <GridItem xs={12} sm={12} md={8}>
              <CardBody>
                <p className={classes.description}>
                  In this project I developed two frameworks in Python that uses alpaca.markets 
                  API to trade paper and real stock, based on custom algorithms
                   influenced by multitudes of indicators, and market research. 
                </p>
              </CardBody>
                <Button href='https://github.com/jcm005/QuantitativeTrader' 
                color='info' 
                className={classes.largeTitle}
                size='lg'
                >
                Check it Out On Github
                </Button>
              </GridItem>
              <h4 className={classes.cardTitle}>
              More Updates Coming Soon
              </h4>
              
              <CardFooter className={classes.justifyCenter}>
                
              </CardFooter>
            </Card>
           </div>
          </GridContainer>
          
          
        </div>

      </div>
    
  );
}
