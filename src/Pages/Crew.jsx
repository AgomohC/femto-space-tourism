import React from "react";
import CrewBody from "../Components/CrewBody";
import { Grid, makeStyles } from "@material-ui/core";
import desktopImg from "../assets/crew/background-crew-desktop.jpg";
import tabletImg from "../assets/crew/background-crew-tablet.jpg";
import mobileImg from "../assets/crew/background-crew-mobile.jpg";

const useStyles = makeStyles((theme) => ({
   background: {
      height: "auto",
      minHeight: "100%",
      width: "100%",
      backgroundImage: `url(${mobileImg})`,
      [theme.breakpoints.up("sm")]: {
         backgroundImage: `url(${tabletImg})`,
      },
      [theme.breakpoints.up("lg")]: {
         backgroundImage: `url(${desktopImg})`,
      },
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
   },
   container: {
      marginLeft: "auto",
      marginRight: "auto",
      // marginTop: "120px",
      // [theme.breakpoints.up("sm")]: {
      //    marginTop: "180px",
      // },
      // [theme.breakpoints.up("lg")]: {
      //    marginTop: "240px",
      // },
      // paddingBottom: theme.spacing(9),
   },
}));

const Crew = () => {
   const classes = useStyles();
   return (
      <Grid container className={classes.background}>
         <Grid item container xs={10} className={classes.container}>
            <CrewBody />
         </Grid>
      </Grid>
   );
};

export default Crew;
