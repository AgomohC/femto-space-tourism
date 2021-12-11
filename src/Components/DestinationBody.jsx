import React, { useState } from "react";
import data from "../data";
import {
   Grid,
   Typography,
   Tab,
   Tabs,
   makeStyles,
   withStyles,
   alpha,
} from "@material-ui/core";
import moonImg from "../assets/destination/image-moon.png";
import marsImg from "../assets/destination/image-mars.png";
import europaImg from "../assets/destination/image-europa.png";
import titanImg from "../assets/destination/image-titan.png";
const imgArray = [moonImg, marsImg, europaImg, titanImg];
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
   whiteText: {
      color: theme.palette.text.primary,
   },
   bigText: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(1),
      color: theme.palette.text.primary,
   },
   bodyText: {
      color: theme.palette.text.secondary,
   },
   numText: {
      color: alpha(theme.palette.text.secondary, 0.65),
      display: "inline-block",
      marginRight: theme.spacing(4),
   },
   imgContainer: {
      width: "170px",
      height: "170px",
      marginLeft: "auto",
      marginRight: "auto",
      boxShadow: theme.shadows[12],
      borderRadius: "50%",
      [theme.breakpoints.up("sm")]: {
         width: "300px",
         height: "300px",
      },
      [theme.breakpoints.up("lg")]: {
         width: "445px",
         height: "445px",
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

const TabEdit = withStyles((theme) => ({
   root: {
      fontSize: "16px",
      letterSpacing: 2.7,
      minWidth: theme.spacing(10),
      "&:hover": {
         color: "#fff",
      },
   },
}))((props) => <Tab disableRipple {...props} />);

const DestinationBody = () => {
   const [currentTab, setCurrentTab] = useState(0);
   const classes = useStyles();
   const { destinations } = data;
   const tabNames = destinations.map((item) => item.name);

   const currentInfo = destinations[currentTab];
   const img = imgArray[currentTab];

   const handleChange = (event, newValue) => {
      setCurrentTab(newValue);
   };
   return (
      <>
         <Grid item xs={12} className={classes.introContainer}>
            <Typography
               variant="h5"
               component="h4"
               color="secondary"
               className={classes.whiteText}
            >
               <span className={classes.numText}>01</span>
               PICK YOUR DESTINATION
            </Typography>
         </Grid>
         <Grid item container xs={12} className={classes.contentContainer}>
            <Grid item xs={10} lg={6}>
               <div className={classes.imgContainer}>
                  <img
                     className={classes.img}
                     alt={currentInfo.name}
                     src={img}
                  />
               </div>
            </Grid>
            <Grid item xs={10} lg={5}>
               <Tabs
                  value={currentTab}
                  onChange={handleChange}
                  textColor="secondary"
               >
                  {tabNames.map((tabName) => (
                     <TabEdit key={tabName} label={tabName} />
                  ))}
               </Tabs>
               <Typography variant="h2" className={classes.bigText}>
                  {currentInfo.name.toUpperCase()}
               </Typography>
               <Typography
                  variant="body1"
                  color="initial"
                  className={classes.bodyText}
               >
                  {currentInfo.description}
               </Typography>
               <hr className={classes.line} />
               <Grid item container xs={12} spacing={3}>
                  <Grid item xs={6}>
                     <Typography
                        variant="subtitle1"
                        className={classes.whiteText}
                     >
                        AVG. DISTANCE
                     </Typography>
                     <Typography variant="h6" className={classes.whiteText}>
                        {currentInfo.distance.toUpperCase()}
                     </Typography>
                  </Grid>
                  <Grid item xs={6}>
                     <Typography
                        variant="subtitle1"
                        className={classes.whiteText}
                     >
                        EST. TRAVEL TIME
                     </Typography>
                     <Typography variant="h6" className={classes.whiteText}>
                        {currentInfo.travel.toUpperCase()}
                     </Typography>
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </>
   );
};

export default DestinationBody;
