import React, { useState, useEffect } from "react";
import data from "../data";
import classNames from "classnames";
import { Typography, Grid, makeStyles, alpha } from "@material-ui/core";
import firstImg from "../assets/crew/image-douglas-hurley.png";
import secondImg from "../assets/crew/image-mark-shuttleworth.png";
import thirdImg from "../assets/crew/image-victor-glover.png";
import fourthImg from "../assets/crew/image-anousheh-ansari.png";

const imgArray = [firstImg, secondImg, thirdImg, fourthImg];
const useStyles = makeStyles((theme) => ({
   introContainer: {
      marginLeft: "auto",
      marginRight: "auto",
   },
   circleContainer: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
         marginLeft: 0,
         marginRight: 0,
         display: "block",
      },
   },
   introContainerImg: {
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      [theme.breakpoints.down("sm")]: {
         alignItems: "flex-end",
         alignSelf: "flex-end",
      },
      [theme.breakpoints.up("lg")]: {
         height: "72%",
         alignItems: "flex-end",
         alignSelf: "flex-end",
      },
   },
   introContainerBottom: {
      marginLeft: "auto",
      marginBottom: theme.spacing(10),
      marginRight: "auto",
   },
   contentContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "space-between",
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
   infoText: {
      color: theme.palette.text.primary,
      textAlign: "left",
      [theme.breakpoints.down("sm")]: {
         fontSize: "18px",
      },
   },
   bodyText: {
      color: theme.palette.text.secondary,
      marginBottom: "120px",
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
         marginLeft: 0,
         marginRight: 0,
      },
   },
   numText: {
      color: alpha(theme.palette.text.primary, 0.35),
      display: "inline-block",
      marginRight: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
         marginRight: theme.spacing(2),
      },
   },
   paleText: {
      color: alpha(theme.palette.text.primary, 0.35),
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.down("sm")]: {
         fontSize: "24px",
      },
      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
         marginLeft: 0,
         marginRight: 0,
      },
   },

   imgContainer: {
      width: "327px",
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("sm")]: {
         width: "456px",
      },
      [theme.breakpoints.up("lg")]: {
         width: "568.07px",
      },
   },
   img: {
      width: "100%",
      height: "auto",
   },
   circle: {
      cursor: "pointer",
      borderRadius: "50%",
      width: "15px",
      height: "15px",
      backgroundColor: alpha(theme.palette.text.primary, 0.15),
      "&:hover": {
         backgroundColor: alpha(theme.palette.text.primary, 0.65),
      },
      display: "inline-block",
      marginRight: theme.spacing(3),
   },
   activeCircle0: {
      backgroundColor: (currentTab) =>
         currentTab === 0
            ? theme.palette.text.primary
            : alpha(theme.palette.text.primary, 0.15),
   },
   activeCircle1: {
      backgroundColor: (currentTab) =>
         currentTab === 1
            ? theme.palette.text.primary
            : alpha(theme.palette.text.primary, 0.15),
   },
   activeCircle2: {
      backgroundColor: (currentTab) =>
         currentTab === 2
            ? theme.palette.text.primary
            : alpha(theme.palette.text.primary, 0.15),
   },
   activeCircle3: {
      backgroundColor: (currentTab) =>
         currentTab === 3
            ? theme.palette.text.primary
            : alpha(theme.palette.text.primary, 0.15),
   },
   container: {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "120px",
      [theme.breakpoints.up("sm")]: {
         marginTop: "180px",
      },
      [theme.breakpoints.up("lg")]: {
         marginTop: "240px",
      },
      paddingBottom: theme.spacing(9),
   },
}));

const CrewBody = (props) => {
   const { crew } = data;
   const [currentTab, setCurrentTab] = useState(0);
   const currentInfo = crew[currentTab];
   const classes = useStyles(currentTab);
   const img = imgArray[currentTab];

   useEffect(() => {
      const selectTab = setInterval(() => {
         if (currentTab < 3) {
            setCurrentTab((currentTab) => currentTab + 1);
         }
         if (currentTab === 3) {
            setCurrentTab(0);
         }
      }, 10000);
      return () => clearInterval(selectTab);
   }, [currentTab]);

   const clickHandler0 = () => {
      setCurrentTab(0);
   };
   const clickHandler1 = () => {
      setCurrentTab(1);
   };
   const clickHandler2 = () => {
      setCurrentTab(2);
   };
   const clickHandler3 = () => {
      setCurrentTab(3);
   };

   return (
      <>
         <Grid item container xs={12} className={classes.contentContainer}>
            <Grid item xs={10} lg={6} className={classes.container}>
               <Grid item xs={12} className={classes.introContainerBottom}>
                  <Typography
                     variant="h5"
                     component="h4"
                     color="secondary"
                     className={classes.infoText}
                  >
                     <span className={classes.numText}>02</span>
                     MEET YOUR CREW
                  </Typography>
               </Grid>
               <Typography variant="h4" className={classes.paleText}>
                  {currentInfo.role}
               </Typography>
               <Typography variant="h3" className={classes.whiteText}>
                  {currentInfo.name}
               </Typography>
               <Typography variant="body1" className={classes.bodyText}>
                  {currentInfo.bio}
               </Typography>
               <div className={classes.circleContainer}>
                  <div
                     className={classNames(
                        classes.circle,
                        classes.activeCircle0
                     )}
                     onClick={clickHandler0}
                  ></div>
                  <div
                     className={classNames(
                        classes.circle,
                        classes.activeCircle1
                     )}
                     onClick={clickHandler1}
                  ></div>
                  <div
                     className={classNames(
                        classes.circle,
                        classes.activeCircle2
                     )}
                     onClick={clickHandler2}
                  ></div>
                  <div
                     className={classNames(
                        classes.circle,
                        classes.activeCircle3
                     )}
                     onClick={clickHandler3}
                  ></div>
               </div>
            </Grid>
            <Grid item xs={10} lg={5} className={classes.introContainerImg}>
               <div className={classes.imgContainer}>
                  <img
                     className={classes.img}
                     alt={currentInfo.name}
                     src={img}
                  />
               </div>
            </Grid>
         </Grid>
      </>
   );
};

export default CrewBody;
