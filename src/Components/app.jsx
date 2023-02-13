import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { Actors, MovieInformation, Navbar, Profile, Movies } from "./index";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <Routes>
            <Route exact path="/" element={<Movies />} />
            <Route
              exact
              path="/movies/:movieid"
              element={<MovieInformation />}
            />
            <Route exact path="/actors/:actorid" element={<Actors />} />
            <Route exact path="/profile/:userid" element={<Profile />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default App;
