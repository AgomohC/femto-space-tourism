import React from "react";
import TechBody from "../Components/TechBody";
import { Grid, makeStyles } from "@material-ui/core";
import desktopImg from "../assets/technology/background-technology-desktop.jpg";
import tabletImg from "../assets/technology/background-technology-tablet.jpg";
import mobileImg from "../assets/technology/background-technology-mobile.jpg";

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
         display: "flex",
         justifyContent: "flex-end",
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
      marginTop: "120px",
      [theme.breakpoints.up("sm")]: {
         marginTop: "180px",
      },
      [theme.breakpoints.up("lg")]: {
         marginTop: "240px",
      },
   },
}));

const Technology = () => {
   const classes = useStyles();
   return (
      <Grid container className={classes.background}>
         <Grid item container xs={12} lg={11} className={classes.container}>
            <TechBody />
         </Grid>
      </Grid>
   );
};

export default Technology;
