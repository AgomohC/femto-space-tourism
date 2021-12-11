import React from "react";
import DestinationBody from "../Components/DestinationBody";
import desktopImg from "../assets/destination/background-destination-desktop.jpg";
import tabletImg from "../assets/destination/background-destination-tablet.jpg";
import mobileImg from "../assets/destination/background-destination-mobile.jpg";
import { makeStyles, Grid } from "@material-ui/core";

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
      paddingBottom: theme.spacing(10),
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
   },
}));

const Destination = () => {
   const classes = useStyles();
   return (
      <Grid container className={classes.background}>
         <Grid item container xs={10} className={classes.container}>
            <DestinationBody />
         </Grid>
      </Grid>
   );
};

export default Destination;
