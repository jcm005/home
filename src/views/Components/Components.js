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
import ViewProfile from "../ProfilePage/ProfilePage.js"
import Camera from "@material-ui/icons/Camera";

import NavPills from "components/NavPills/NavPills.js";
import CodeIcon from '@material-ui/icons/Code';
import PollIcon from '@material-ui/icons/Poll';
import SchoolIcon from '@material-ui/icons/School';

import profile from "assets/img/faces/plot.jpg";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { Document } from "react-pdf"
import { PDFViewer } from '@react-pdf/renderer';


import styles from "assets/jss/material-kit-react/views/components.js";
import profilestyles from "assets/jss/material-kit-react/views/profilePage.js";

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
      <div className={classes.space50} />

      <ViewProfile />

       <div className={classNames(classes.main)}>
        

          <GridContainer justify="center">
              <GridItem xs={10} sm={10} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="info"
                  tabs={[
                    {
                      tabButton: "Projects",
                      tabIcon: CodeIcon,
                      tabContent: (
                        <GridContainer justify="center" >
                          <GridItem xs={10} sm={10} md={8}>
                            <Card >
                                <h2>Quantitative Trader </h2>
                                <div className={classes.space30} />

                              <GridItem xs={10} sm={10} md={8} lg={8}>
                                <img src={profile} alt="..." className={imageClasses} />
                              
                                  <p className={classes.description}>
                                    In this project I developed two frameworks in Python that uses alpaca.markets 
                                    API to trade paper and real stock, based on custom algorithms
                                     influenced by multitudes of indicators, and market research. 
                                  </p>
                                
                                <Button href='https://github.com/jcm005/QuantitativeTrader' 
                                color='info' 
                                className={classes.largeTitle}
                                size='lg'
                                >
                                Check it Out On Github
                                </Button>
                                
                              </GridItem>

                              
                            </Card>
                          </GridItem>
                       </GridContainer>
                    
                          
                      )
                    },
                    {
                      tabButton: "Content",
                      tabIcon: PollIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          
                        </GridContainer>
                      ),
                    },

                    {
                      tabButton: "Certifications",
                      tabIcon: SchoolIcon,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={10} sm={10} md={10}>
                            <Card>
                              <Button color="info" size="lg" href='https://www.udemy.com/certificate/UC-2cb01624-5c85-4e95-8019-b2998d903e55/' >
                                Complete Python Developer in 2020
                              </Button>
                            </Card>
                          </GridItem>
                          <GridItem xs={10} sm={10} md={10}>
                           <Card>
                            <Button color='info' size='lg' href='https://www.udemy.com/certificate/UC-81bba2a9-8eb2-4132-aeeb-dacf61602b40/' >
                                Statistics for Data Science and Business Analysis
                            </Button>
                          </Card>
                            
                          </GridItem>
                          <GridItem xs={10} sm={10} md={10}>

                            <Card>
                             <Button color='info' size='lg' href='https://www.udemy.com/certificate/UC-98fabd51-6343-44c6-bdb5-eda53b7bbdc9/' >
                                Python for Data Science and Machine Learning Bootcamp
                             </Button>
                            </Card>
                          </GridItem>
                          
                        </GridContainer>
                      ),
                    },
                  ]}
              />
            </GridItem>
          </GridContainer>

      
        
        
      </div>
    </div>
  );
}
