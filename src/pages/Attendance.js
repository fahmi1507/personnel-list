import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    attendance: {
      justifyContent: "center",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
      fontSize: 30,
    },
  };
});

export default function Attendance() {
  const classes = useStyles();
  return <div className={classes.attendance}>Not Available</div>;
}
