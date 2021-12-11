import React, { useState } from "react";
import data from "../data";
import {
   Typography,
   Grid,
   Tab,
   Tabs,
   makeStyles,
   withStyles,
   alpha,
} from "@material-ui/core";
import firstImg from "../assets/crew/image-douglas-hurley.png";
import secondImg from "../assets/crew/image-mark-shuttleworth.png";
import thirdImg from "../assets/crew/image-victor-glover.png";
import fourthImg from "../assets/crew/image-anousheh-ansari.png";

const imgArray = [firstImg, secondImg, thirdImg, fourthImg];
const useStyles = makeStyles((theme) => ({
   introContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: theme.spacing(8),
   },
   contentContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      justifyContent: "space-between",
   },
   infoContainer: {
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      textAlign: "center",
      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
      },
   },
   whiteText: {
      color: theme.palette.text.primary,
   },
   infoText: {
      color: theme.palette.text.primary,
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
         fontSize: "18px",
      },
      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
      },
   },
   bigText: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(1),
      color: theme.palette.text.primary,
      [theme.breakpoints.down("sm")]: {
         fontSize: "72px",
      },
   },
   bodyText: {
      color: theme.palette.text.secondary,
   },
   numText: {
      color: alpha(theme.palette.text.secondary, 0.65),
      display: "inline-block",
      marginRight: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
         marginRight: theme.spacing(2),
      },
   },
   imgWrapper: {
      marginLeft: "auto",
      marginRight: "auto",
   },
   imgContainer: {
      width: "327px",
      height: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: theme.spacing(10),
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
   line: {
      width: "100%",
      color: alpha("#fff", 0.25),
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(2),
   },
}));

const CrewBody = () => {
   const classes = useStyles();
   const { crew } = data;
   const [currentTab, setCurrentTab] = useState(0);
   const currentInfo = crew[currentTab];
   const img = imgArray[currentTab];
   return (
      <>
         <Grid item xs={12} className={classes.introContainer}>
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
         <Grid item container xs={12} className={classes.contentContainer}>
            <Grid item xs={12} lg={4} className={classes.introContainer}>
               <Typography variant="h4">{currentInfo.role}</Typography>
               <Typography variant="h3">{currentInfo.name}</Typography>
               <Typography variant="body1">{currentInfo.bio}</Typography>
            </Grid>
            <Grid item xs={10} lg={4} className={classes.introContainer}>
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
