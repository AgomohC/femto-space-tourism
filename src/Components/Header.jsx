import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../assets/shared/logo.svg";
import {
   AppBar,
   Box,
   Typography,
   Toolbar,
   IconButton,
   makeStyles,
   alpha,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
   desktopNav: {
      display: "none",
      position: "relative",
      top: "0",
      left: "0",
      [theme.breakpoints.up("sm")]: {
         display: "flex",
         position: "absolute",
         width: "96vw",
         height: 96,
         left: "4vw",
         top: 40,
         background: "transparent",
      },
      [theme.breakpoints.up("md")]: {
         display: "flex",
         position: "absolute",
         width: "95vw",
         height: 96,
         left: "5vw",
         top: 40,
      },
      [theme.breakpoints.up("lg")]: {
         display: "flex",
         position: "absolute",
         width: "96vw",
         height: 96,
         left: "4vw",
         top: 40,
      },
   },
   mobileNav: {
      display: "flex",
      [theme.breakpoints.up("sm")]: {
         display: "none",
      },
      backgroundColor: "transparent",
      padding: theme.spacing(3),
   },
   toolbar: {
      height: "100%",
      paddingRight: 0,
   },
   logoDiv: {
      flexGrow: 1,
      height: "40px",
      width: "40px",
      [theme.breakpoints.up("sm")]: {
         height: "48px",
         width: "48px",
      },
   },
   logo: {
      height: "auto",
      width: "auto",
   },
   line: {
      width: 473,
      marginRight: "-24px",
      color: alpha("#0b0d17", 0.15),
      display: "none",
      [theme.breakpoints.up("lg")]: {
         display: "block",
      },
   },
   navLinks: {
      backgroundColor: alpha("#0b0d17", 0.15),
      height: "100%",
      display: "none",
      [theme.breakpoints.up("sm")]: {
         display: "block",
      },
      minWidth: "70%",
      [theme.breakpoints.up("lg")]: {
         minWidth: "50%",
      },
   },
   linksDiv: {
      height: "100%",
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      position: "relative",
   },
   link: {
      textDecoration: "none",
      color: "inherit",
      "&:hover": {
         borderBottom: "2px solid #fff",
      },
   },
   linkSpan: {
      fontWeight: "bold",
      marginRight: theme.spacing(1),
      display: "none",
      [theme.breakpoints.up("lg")]: {
         display: "inline-block",
      },
   },
   select: {
      position: "absolute",
      height: "2px",
      width: "34px",
   },
   menuButton: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
         display: "none",
      },
      color: theme.palette.text.primary,
   },
   mobileMenu: {
      height: "100vh",
   },
}));

const Header = () => {
   const classes = useStyles();
   const [showAside, setShowAside] = useState(false);
   return (
      <>
         <AppBar className={classes.desktopNav}>
            <Toolbar className={classes.toolbar}>
               <div className={classes.logoDiv}>
                  <Link to="/">
                     <img src={logo} alt="logo svg" className={classes.logo} />
                  </Link>
               </div>
               <IconButton
                  className={classes.menuButton}
                  disableRipple
                  disableFocusRipple
                  color="inherit"
               >
                  <MenuIcon />
               </IconButton>
               <hr className={classes.line} />

               <Box className={classes.navLinks}>
                  <div className={classes.linksDiv}>
                     <Link to="/" className={classes.link}>
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.linkSpan}>00</span>
                           Home
                        </Typography>
                     </Link>
                     <Link to="/crew" className={classes.link}>
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.linkSpan}>01</span>
                           Crew
                        </Typography>
                     </Link>
                     <Link to="/destination" className={classes.link}>
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.linkSpan}>02</span>
                           Destination
                        </Typography>
                     </Link>
                     <Link to="/technology" className={classes.link}>
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.linkSpan}>03</span>
                           Technology
                        </Typography>
                     </Link>
                  </div>
               </Box>
            </Toolbar>
         </AppBar>
         <header className={classes.mobileNav}>
            <div className={classes.logoDiv}>
               <Link to="/">
                  <img src={logo} alt="logo svg" className={classes.logo} />
               </Link>
            </div>
            <IconButton
               className={classes.menuButton}
               disableRipple
               disableFocusRipple
               color="inherit"
               onClick={() => setShowAside(!showAside)}
            >
               <MenuIcon color="white" />
            </IconButton>
         </header>
         {showAside && (
            <Box component="aside" className={classes.mobileMenu}></Box>
         )}
      </>
   );
};

export default Header;
