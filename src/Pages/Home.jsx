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
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 1,
   },
}));

const Home = () => {
   const classes = useStyles();

   return (
      <Box className={classes.background}>
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ipsum
         porro veniam quibusdam dolor officiis at nesciunt a ea quasi.lorem200
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil est
         blanditiis ea magnam. Atque, consequuntur reiciendis minus et cumque
         commodi non! Laudantium, dignissimos officia sint praesentium fugit at
         eum quis eius ipsam est voluptatem neque ea itaque quae in minima iure
         aliquam nesciunt maxime possimus odit quibusdam illum illo doloribus.
         Error obcaecati a iure ipsum eos repudiandae mollitia nostrum dolore
         eveniet officia iusto temporibus, culpa impedit voluptate. Incidunt
         repellendus ex perferendis minus possimus, natus aliquam fugiat.
         Consectetur provident nostrum tempora aspernatur magni nemo rem ab,
         neque numquam eveniet iure impedit similique tempore accusamus, placeat
         quos dolores delectus non! Delectus aliquid nobis ab eligendi et
         veritatis impedit esse animi amet optio nisi harum omnis nesciunt minus
         tempora dicta, quod deleniti sed quos consequuntur vitae! Quidem
         aliquam temporibus eos ipsum cupiditate quisquam! Commodi, voluptates.
         Sapiente maiores quos repellendus quisquam nisi explicabo cupiditate
         hic eius maxime blanditiis non ex magni quam corporis esse vitae ab
         assumenda id nostrum modi, at enim ullam commodi! Odit sunt numquam
         corporis dicta debitis architecto officia quis quia ex eaque maiores
         saepe nemo molestias provident illum eos alias, facilis, rem accusamus.
         Quo dolore esse dolor corrupti, voluptatum iusto debitis, cumque quis
         non vitae harum similique beatae iste quasi.
      </Box>
   );
};

export default Home;
