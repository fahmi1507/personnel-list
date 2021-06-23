import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    home: {
      justifyContent: "center",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      fontSize: 30,
    },
  };
});

export default function Beranda() {
  const classes = useStyles();
  return <div className={classes.home}>Not Available</div>;
}
