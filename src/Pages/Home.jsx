import React from "react";
import desktopImg from "../assets/home/background-home-desktop.jpg";

import tabletImg from "../assets/home/background-home-tablet.jpg";
import mobileImg from "../assets/home/background-home-mobile.jpg";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
   background: {
      height: "100%",
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
      marginTop: "100px",

      [theme.breakpoints.up("sm")]: {
         justifyContent: "center",
         marginTop: "200px",
      },
      [theme.breakpoints.up("lg")]: {
         display: "flex",
         alignItems: "flex-end",
         justifyContent: "space-between",
      },
   },
   textContainer: {
      textAlign: "center",
      width: "80vw",
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("sm")]: {
         width: "450px",
      },

      [theme.breakpoints.up("lg")]: {
         textAlign: "left",
         marginLeft: 0,
         marginRight: 0,
      },
   },
   button: {
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      height: "150px",
      width: "150px",
      "&:hover": {
         cursor: "pointer",
         boxShadow: "0 0 0 64px rgba(255, 255, 255, 0.05)",
      },
      [theme.breakpoints.up("sm")]: {
         height: "242px",
         width: "242px",
      },
      [theme.breakpoints.up("lg")]: {
         height: "274px",
         width: "274px",
      },
   },
   bodyText: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(2),
      color: "#fff",
      fontSize: theme.spacing(8),
   },
   blue: {
      color: theme.palette.text.secondary,
   },
   end: {
      justifyContent: "center",
      display: "flex",
      marginTop: theme.spacing(10),
      marginLeft: "auto",
      marginRight: "auto",
      [theme.breakpoints.up("sm")]: { marginLeft: 0, marginRight: 0 },
      [theme.breakpoints.up("lg")]: {
         justifyContent: "flex-end",
         marginTop: 0,
      },
   },
   link: {
      textDecoration: "none",
   },
}));

const Home = () => {
   const classes = useStyles();

   return (
      <div className={classes.background}>
         <Grid container spacing={2} xs={10} className={classes.container}>
            <Grid item xs={10} lg={6} className={classes.center}>
               <div className={classes.textContainer}>
                  <Typography
                     variant="h5"
                     className={classes.blue}
                     color="secondary"
                  >
                     SO, YOU WANT TO TRAVEL TO
                  </Typography>
                  <Typography
                     variant="h1"
                     component="h5"
                     className={classes.bodyText}
                  >
                     SPACE
                  </Typography>

                  <Typography variant="subtitle1" className={classes.blue}>
                     Lets face it; if you want to go to space, you might as well
                     genuinely go to outer space and not hover kind of on the
                     edge of it. Well sit back, and relax because we'll give you
                     a truly out of this world experience!
                  </Typography>
               </div>
            </Grid>
            <Grid item xs={10} sm={6} className={classes.end}>
               <Link to="/destination" className={classes.link}>
                  <div className={classes.button}>
                     <Typography variant="h6" color="primary">
                        EXPLORE
                     </Typography>
                  </div>
               </Link>
            </Grid>
         </Grid>
      </div>
   );
};

export default Home;
