import { makeStyles } from "@material-ui/core";
import React from "react";
import Header from "./AppBar";

const useStyles = makeStyles((theme) => {
  return {
    layout: {
      backgroundColor: "#f3f3f3",

      width: "100%",
      minHeight: "100vh",
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    // Drawer
    <div className={classes.layout}>
      <Header />

      <div>{children}</div>
    </div>
  );
};

export default Layout;
