import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionBasics from "./Sections/SectionBasics.js";
import SectionNavbars from "./Sections/SectionNavbars.js";
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionNotifications from "./Sections/SectionNotifications.js";
import SectionTypography from "./Sections/SectionTypography.js";
import SectionJavascript from "./Sections/SectionJavascript.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.js";
import SectionLogin from "./Sections/SectionLogin.js";
import SectionExamples from "./Sections/SectionExamples.js";
import SectionDownload from "./Sections/SectionDownload.js";
import ViewProfile from "../ProfilePage/ProfilePage.js"
import Camera from "@material-ui/icons/Camera";

import NavPills from "components/NavPills/NavPills.js";
import Palette from "@material-ui/icons/Palette";
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import PollIcon from '@material-ui/icons/Poll';

import profile from "assets/img/faces/plot.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
   const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  

  return (
    <div>
      
      <Header
        brand="Joseph Mattern"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
    
      <Parallax image={require("assets/img/landing-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Welcome&#44; I&#39;m Joseph Mattern.</h1>
                <h3 className={classes.subtitle}>
                  
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.space30} />

      <ViewProfile />

       <div className={classNames(classes.main)}>
       <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Projects",
                      tabIcon: CodeIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
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
                            
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src=''
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=''
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Content",
                      tabIcon: PollIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src=''
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=''
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=''
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src=''
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src=''
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
              />
            </GridItem>
          </GridContainer>


        <SectionBasics />

      
        <GridItem md={12} className={classes.textCenter}>
          <Link to={"/login-page"} className={classes.link}>
            <Button color="primary" size="lg" simple>
              View Login Page
            </Button>
          </Link>
        </GridItem>
        
      </div>
    </div>
  );
}