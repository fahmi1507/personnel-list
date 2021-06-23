import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import { IconButton, makeStyles, SwipeableDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PeopleIcon from "@material-ui/icons/People";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles({
  active: {
    backgroundColor: "#40e0d0",
  },
});

const menuItems = [
  {
    text: "Beranda",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    text: "Personnel List",
    icon: <PeopleIcon />,
    path: "/personnel",
  },
  {
    text: "Daily Attendance",
    icon: <DateRangeIcon />,
    path: "/attendance",
  },
];
const Drawer = () => {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div>
      <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer anchor="left" open={open} onClose={() => setOpen(false)} onOpen={() => {}}>
        <div>
          <List>
            {menuItems.map((e, i) => {
              return (
                <ListItem button key={i} onClick={() => history.push(e.path)} className={location.pathname == e.path ? classes.active : ""}>
                  <ListItemIcon> {e.icon} </ListItemIcon>
                  <ListItemText primary={e.text} />
                </ListItem>
              );
            })}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
};

export default Drawer;
