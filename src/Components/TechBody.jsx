import React, { useState, useEffect } from "react";
import { Grid, Typography, makeStyles, alpha } from "@material-ui/core";
import classNames from "classnames";
import data from "../data";

import vehicleLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "../assets/technology/image-space-capsule-portrait.jpg";
import portLandscape from "../assets/technology/image-spaceport-landscape.jpg";
import portPortrait from "../assets/technology/image-spaceport-portrait.jpg";

const backgroundLandscape = [vehicleLandscape, portLandscape, capsuleLandscape];
const backgroundPortrait = [vehiclePortrait, portPortrait, capsulePortrait];

const useStyles = makeStyles((theme) => ({
   introContainer: {
      marginRight: "auto",
      marginBottom: theme.spacing(8),
      marginLeft: theme.spacing(10),
      [theme.breakpoints.up("lg")]: {
         marginLeft: "auto",
      },
   },
   contentContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "space-between",
   },
   numText: {
      color: alpha(theme.palette.text.secondary, 0.65),
      display: "inline-block",
      marginRight: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
         marginRight: theme.spacing(2),
      },
   },
   infoText: {
      color: theme.palette.text.primary,
      textAlign: "left",
      [theme.breakpoints.down("sm")]: {
         fontSize: "18px",
      },
   },
   bodyText: {
      color: theme.palette.text.secondary,
      textAlign: "center",
      maxWidth: "72vw",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
         maxWidth: "none",
         marginLeft: 0,
         marginRight: 0,
      },
   },
   img: {
      display: "none",
      [theme.breakpoints.up("lg")]: {
         height: "100%",
         display: "flex",
         boxShadow: theme.shadows[12],
         justifyContent: "flex-end",
      },
   },
   imgMobile: {
      display: "flex",
      height: "auto",
      width: "100%",
      boxShadow: theme.shadows[12],
      [theme.breakpoints.up("lg")]: {
         display: "none",
      },
   },

   desktopImg: {
      height: "100%",
      width: "100%",
   },
   mobileImg: {
      height: "100%",
      width: "100%",
   },

   whiteText: {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(4),
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
         marginLeft: 0,
         marginRight: 0,
      },
      [theme.breakpoints.down("sm")]: {
         fontSize: "32px",
      },
   },
   termText: {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(2),
      textAlign: "center",
      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
      },
   },
   numDiv: {
      width: "40px",
      height: "40px",
      [theme.breakpoints.up("sm")]: {
         width: "60px",
         height: "60px",
      },
      [theme.breakpoints.up("lg")]: {
         width: "80px",
         height: "80px",
      },
      borderRadius: "50%",
      border: "1px solid #fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "28px",
      letterSpacing: 4.75,
      "&:hover": {
         backgroundColor: theme.palette.text.primary,
         color: "#0b0d17",
      },
      [theme.breakpoints.down("sm")]: {
         fontSize: "18px",
      },
   },
   activeTab0: {
      color: (currentVehicle) =>
         currentVehicle === 0 ? "#0b0d17" : theme.palette.text.primary,
      backgroundColor: (currentVehicle) =>
         currentVehicle === 0 ? "#fff" : "transparent",
   },
   activeTab1: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),

      [theme.breakpoints.up("sm")]: {
         marginLeft: theme.spacing(2),
         marginRight: theme.spacing(2),
      },
      [theme.breakpoints.up("lg")]: {
         marginBottom: theme.spacing(4),
         marginTop: theme.spacing(4),
         marginLeft: 0,
         marginRight: 0,
      },
      color: (currentVehicle) =>
         currentVehicle === 1 ? "#0b0d17" : theme.palette.text.primary,
      backgroundColor: (currentVehicle) =>
         currentVehicle === 1 ? "#fff" : "transparent",
   },
   activeTab2: {
      color: (currentVehicle) =>
         currentVehicle === 2 ? "#0b0d17" : theme.palette.text.primary,
      backgroundColor: (currentVehicle) =>
         currentVehicle === 2 ? "#fff" : "transparent",
   },
   align: {
      [theme.breakpoints.up("lg")]: {
         alignItems: "center",
      },
   },
   justify: {
      display: "flex",
      justifyContent: "center",
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      [theme.breakpoints.up("sm")]: {
         marginBottom: theme.spacing(8),
         marginTop: theme.spacing(8),
      },
      [theme.breakpoints.up("lg")]: {
         display: "block",
      },
   },
}));

const TechBody = (props) => {
   const { technology } = data;
   const [currentVehicle, setCurrentVehicle] = useState(0);
   const currentData = technology[currentVehicle];

   const landscapeImg = backgroundLandscape[currentVehicle];
   const portraitImg = backgroundPortrait[currentVehicle];

   const classes = useStyles(currentVehicle);
   const clickHandler0 = () => {
      setCurrentVehicle(0);
   };
   const clickHandler1 = () => {
      setCurrentVehicle(1);
   };
   const clickHandler2 = () => {
      setCurrentVehicle(2);
   };

   useEffect(() => {
      const selectTab = setInterval(() => {
         if (currentVehicle < 2) {
            setCurrentVehicle((currentTab) => currentTab + 1);
         }
         if (currentVehicle === 2) {
            setCurrentVehicle(0);
         }
      }, 10000);
      return () => clearInterval(selectTab);
   }, [currentVehicle]);

   return (
      <>
         <Grid item xs={12} className={classes.introContainer}>
            <Typography variant="h5" className={classes.infoText}>
               <span className={classes.numText}>03</span>
               SPACE LAUNCH 101
            </Typography>
         </Grid>
         <Grid item xs={12} className={classes.imgMobile}>
            <img src={landscapeImg} className={classes.mobileImg} alt="" />
         </Grid>
         <Grid item container xs={12} className={classes.contentContainer}>
            <Grid item container xs={12} lg={8} className={classes.align}>
               <Grid item xs={12} lg={2} className={classes.justify}>
                  <div
                     className={classNames(classes.numDiv, classes.activeTab0)}
                     onClick={clickHandler0}
                  >
                     1
                  </div>
                  <div
                     className={classNames(classes.numDiv, classes.activeTab1)}
                     onClick={clickHandler1}
                  >
                     2
                  </div>
                  <div
                     className={classNames(classes.numDiv, classes.activeTab2)}
                     onClick={clickHandler2}
                  >
                     3
                  </div>
               </Grid>
               <Grid item xs={12} lg={8}>
                  <Typography className={classes.termText} variant="subtitle2">
                     THE TERMINOLOGY...
                  </Typography>
                  <Typography variant="h3" className={classes.whiteText}>
                     {currentData.name.toUpperCase()}
                  </Typography>

                  <Typography
                     variant="body1"
                     color="initial"
                     className={classes.bodyText}
                  >
                     {currentData.description}
                  </Typography>
               </Grid>
            </Grid>
            <Grid item lg={4} className={classes.img}>
               <img src={portraitImg} className={classes.desktopImg} alt="" />
            </Grid>
         </Grid>
      </>
   );
};

export default TechBody;
