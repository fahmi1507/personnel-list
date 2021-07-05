import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "./Drawer";
import { AccountCircle } from "@material-ui/icons";

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      marginBottom: 10,
    },

    title: {
      flexGrow: 1,
    },

    subtitle: {
      color: "#40e0d0",
    },

    greetings: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="primary" className={classes.appBar}>
        <Toolbar>
          <Drawer />
          <Typography variant="h6" color="secondary" className={classes.title}>
            LOGO
          </Typography>
          <Typography className={classes.greetings}>
            Hello, <span className={classes.subtitle}>Mario! </span>{" "}
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
