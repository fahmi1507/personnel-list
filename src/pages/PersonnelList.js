import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { makeStyles } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import ScaleLoader from "react-spinners/ScaleLoader";
import { notRefresh } from "../helpers/notRefresh";

const useStyles = makeStyles((theme) => {
  return {
    paginationBtn: {
      justifyContent: "center",
      display: "flex",
      paddingTop: 10,
    },

    upper: {
      [theme.breakpoints.up("md")]: {
        display: "flex",
        justifyContent: "space-between",
      },
      padding: 10,
      backgroundColor: "white",
      marginBottom: 10,
    },

    title: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: 10,
    },

    form: {
      alignItems: "center",
      display: "flex",
    },

    input: {
      margin: theme.spacing(1),
      height: 40,
      width: 200,
    },

    loading: {
      justifyContent: "center",
      minHeight: "80vh",
      display: "flex",
      alignItems: "center",
    },
  };
});

const maxPersonnelPerPage = 4;

export default function PersonnelList() {
  const [currentPage, setCurrentPage] = useState(1);
  const classes = useStyles();
  const [personnel, setPersonnel] = useState([]);
  const [loading, setLoading] = useState(false);
  const [color] = useState("#40e0d0");

  useEffect(() => {
    if (notRefresh()) {
      setPersonnel(JSON.parse(localStorage.getItem("userAPI")));
    } else {
      setLoading(true);
      fetch("https://randomuser.me/api/?results=28")
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("userAPI", JSON.stringify(data.results));
          setPersonnel(data.results);
          setLoading(false);
        });
    }
  }, []);

  function changePage(direction) {
    if (direction == "back") {
      setCurrentPage(currentPage - 1);
    } else if (direction == "next") {
      setCurrentPage(currentPage + 1);
    }
  }

  if (loading) {
    return (
      <Container className={classes.loading}>
        <ScaleLoader color={color} loading={loading} size={70} />
      </Container>
    );
  }

  const data = personnel.slice(currentPage * maxPersonnelPerPage - maxPersonnelPerPage, currentPage * maxPersonnelPerPage);

  return (
    <Container>
      <div className={classes.upper}>
        <div className={classes.title}>
          <Typography role="pageTitle" variant="h4" color="secondary">
            PERSONNEL LIST
          </Typography>
          <Typography>List of all personnels</Typography>
        </div>
        <div className={classes.form}>
          <form>
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="secondary" />
                  </InputAdornment>
                ),
              }}
              size="small"
              label="Find Personnel"
              variant="outlined"
              className={classes.input}
            />
            <Button role="addButton" disableElevation className={classes.input} variant="contained" color="secondary" endIcon={<AddIcon />}>
              Add Personnel
            </Button>
          </form>
        </div>
      </div>

      <Grid container spacing={3}>
        {data.map((e, i) => (
          <Grid key={i} item xs={12} sm={6} md={6} lg={3}>
            <NoteCard data={e} />
          </Grid>
        ))}
      </Grid>

      <Container className={classes.paginationBtn}>
        {currentPage > 1 ? (
          <Button startIcon={<ArrowBackIosIcon />} onClick={() => changePage("back")}>
            PREVIOUS
          </Button>
        ) : (
          <Button startIcon={<ArrowBackIosIcon />} disabled>
            PREVIOUS
          </Button>
        )}

        {personnel.length - 1 > currentPage * maxPersonnelPerPage ? (
          <Button role="next" endIcon={<ArrowForwardIosIcon />} onClick={() => changePage("next")}>
            NEXT
          </Button>
        ) : (
          <Button endIcon={<ArrowForwardIosIcon />} disabled>
            NEXT
          </Button>
        )}
      </Container>
    </Container>
  );
}
