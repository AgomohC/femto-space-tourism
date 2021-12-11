import React, { useState } from "react";
import data from "../data";
import {
   Grid,
   Typography,
   Tab,
   Tabs,
   makeStyles,
   withStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
   whiteText: {
      color: theme.palette.text.primary,
   },
   numText: {
      display: "inline-block",
      marginRight: theme.spacing(4),
   },
   imgContainer: {
      width: "445px",
      height: "445px",
   },
   img: { width: "100%", height: "auto" },
}));

const DestinationBody = () => {
   const [currentTab, setCurrentTab] = useState(0);
   const classes = useStyles();
   const { destinations } = data;
   const tabNames = destinations.map((item) => item.name);

   const currentInfo = destinations[currentTab];

   const handleChange = (event, newValue) => {
      setCurrentTab(newValue);
   };
   return (
      <>
         <Grid item xs={12}>
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
         <Grid item container xs={12}>
            <Grid item xs={10} lg={6}>
               <div className={classes.imgContainer}></div>
               <img
                  className={classes.img}
                  src={currentInfo.images.webp}
                  alt={currentInfo.name}
               />
            </Grid>
            <Grid item xs={10} lg={6}>
               <Tabs
                  value={currentTab}
                  onChange={handleChange}
                  textColor="secondary"
               >
                  {tabNames.map((tabName) => (
                     <Tab key={tabName} label={tabName} />
                  ))}
               </Tabs>
            </Grid>
         </Grid>
      </>
   );
};

export default DestinationBody;
