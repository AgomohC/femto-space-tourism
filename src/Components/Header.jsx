import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import logo from "../assets/shared/logo.svg";
import {
   AppBar,
   Box,
   Typography,
   Toolbar,
   IconButton,
   makeStyles,
   alpha,
   Fade,
} from "@material-ui/core";
import { Link } from "react-router-dom";

// TODO: style link bottom on the desktop replace appbar after filter with backdrop filter

const useStyles = makeStyles((theme) => ({
   desktopNav: {
      display: "none",
      position: "relative",
      top: "0",
      left: "0",
      boxShadow: "none",
      overflow: "hidden",
      [theme.breakpoints.up("sm")]: {
         display: "flex",
         position: "absolute",
         width: "95%",
         height: 96,
         left: "5%",
         top: 40,
         background: "transparent",
      },
      [theme.breakpoints.up("md")]: {
         display: "flex",
         position: "absolute",
         width: "95%",
         height: 96,
         left: "5%",
         top: 40,
      },
      [theme.breakpoints.up("lg")]: {
         display: "flex",
         position: "absolute",
         width: "96%",
         height: 96,
         left: "4%",
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
      zIndex: 2,
      position: "relative",
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
      display: "none",
      [theme.breakpoints.up("lg")]: {
         display: "block",
         position: "relative",
         backgroundColor: alpha("#0b0d17", 0.45),
         height: 2,
         "&::after": {
            content: "''",
            position: "absolute",
            filter: "blur(1px)",
            backgroundColor: alpha("#edd", 0.15),
            width: 473,
            height: 2,
            top: 0,
            left: 0,
         },
      },
   },
   navLinks: {
      backgroundColor: alpha("#0b0d17", 0.45),
      height: "100%",
      position: "relative",
      display: "none",

      [theme.breakpoints.up("sm")]: {
         display: "block",
         "&::before": {
            content: "''",
            position: "absolute",
            filter: "blur(1px)",
            width: "100%",
            height: 96,
            background: alpha("#edd", 0.15),
            top: 0,
            left: 0,
         },
      },
      minWidth: "70%",
      [theme.breakpoints.up("lg")]: {
         minWidth: "50%",
      },
   },
   navLinksMobile: {
      zIndex: 99999,
      position: "relative",
      marginTop: theme.spacing(10),
   },
   linksDiv: {
      height: "100%",
      backgroundColor: "transparent",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      position: "relative",
      zIndex: 99999,
   },
   link: {
      textDecoration: "none",
      color: "#fff",
      position: "relative",
      "&:hover": {
         borderBottom: "2px solid #fff",
      },
   },
   linkMobile: {
      marginBottom: theme.spacing(4),
   },
   linkSpan: {
      fontWeight: "bold",
      marginRight: theme.spacing(1),
      display: "none",
      transition: "all 1s ease-in",
      [theme.breakpoints.up("lg")]: {
         display: "inline-block",
      },
   },
   linkSpanMobile: {
      fontWeight: "bold",
      marginRight: theme.spacing(1),
      display: "inline-block",
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
      backgroundColor: alpha("#0b0d17", 0.95),
      [theme.breakpoints.up("sm")]: {
         display: "none",
      },
      position: "fixed",
      top: "0",
      right: "0",
      minWidth: "254px",
      width: "68%",
      padding: "24px",
      zIndex: 99999,
      "&::after": {
         content: "''",
         position: "absolute",
         filter: "blur(1px)",
         width: "100%",
         height: "100vh",
         background: alpha("#edd", 0.15),
         top: 0,
         left: 0,
         zIndex: 1,
      },
   },
   closeButton: {
      position: "absolute",
      top: "24px",
      right: "24px",
      color: "#fff",
      zIndex: 99999,
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
               <div className={classes.line} />
               <Box className={classes.navLinks}>
                  <div className={classes.linksDiv}>
                     <Link to="/" className={classes.link}>
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.linkSpan}>00</span>
                           HOME
                        </Typography>
                     </Link>
                     <Link to="/destination" className={classes.link}>
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.linkSpan}>01</span>
                           DESTINATION
                        </Typography>
                     </Link>
                     <Link to="/crew" className={classes.link}>
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.linkSpan}>02</span>
                           CREW
                        </Typography>
                     </Link>
                     <Link to="/technology" className={classes.link}>
                        <Typography variant="subtitle2" color="initial">
                           <span className={classes.linkSpan}>03</span>
                           TECHNOLOGY
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
            {showAside ? (
               ""
            ) : (
               <IconButton
                  className={classes.menuButton}
                  disableRipple
                  disableFocusRipple
                  color="inherit"
                  onClick={() => setShowAside(true)}
               >
                  <MenuIcon />
               </IconButton>
            )}
         </header>
         {showAside && (
            <Fade in={showAside}>
               <div component="aside" className={classes.mobileMenu}>
                  <IconButton
                     disableRipple
                     disableFocusRipple
                     onClick={() => setShowAside(false)}
                     className={classes.closeButton}
                  >
                     <CloseIcon />
                  </IconButton>
                  <Box className={classes.navLinksMobile}>
                     <div>
                        <Link
                           to="/"
                           onClick={() => setShowAside(false)}
                           className={classes.link}
                        >
                           <Typography
                              variant="subtitle2"
                              className={classes.linkMobile}
                           >
                              <span className={classes.linkSpanMobile}>00</span>
                              HOME
                           </Typography>
                        </Link>
                        <Link
                           to="/destination"
                           onClick={() => setShowAside(false)}
                           className={classes.link}
                        >
                           <Typography
                              variant="subtitle2"
                              className={classes.linkMobile}
                           >
                              <span className={classes.linkSpanMobile}>01</span>
                              DESTINATION
                           </Typography>
                        </Link>
                        <Link
                           to="/crew"
                           onClick={() => setShowAside(false)}
                           className={classes.link}
                        >
                           <Typography
                              variant="subtitle2"
                              className={classes.linkMobile}
                           >
                              <span className={classes.linkSpanMobile}>02</span>
                              CREW
                           </Typography>
                        </Link>
                        <Link
                           to="/technology"
                           onClick={() => setShowAside(false)}
                           className={classes.link}
                        >
                           <Typography
                              variant="subtitle2"
                              className={classes.linkMobile}
                           >
                              <span className={classes.linkSpanMobile}>03</span>
                              TECHNOLOGY
                           </Typography>
                        </Link>
                     </div>
                  </Box>
               </div>
            </Fade>
         )}
      </>
   );
};

export default Header;
