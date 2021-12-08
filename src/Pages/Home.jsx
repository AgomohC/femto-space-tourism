import React from "react";
import desktopImg from "../assets/home/background-home-desktop.jpg";
import tabletImg from "../assets/home/background-home-tablet.jpg";
import mobileImg from "../assets/home/background-home-mobile.jpg";
import { makeStyles, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   background: {
      height: "100vh",
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
   },
}));

const Home = (props) => {
   const classes = useStyles();
   return <Box className={classes.background}></Box>;
};

export default Home;
