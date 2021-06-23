import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PersonnelList from "./pages/PersonnelList";
import Beranda from "./pages/Beranda";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";
import Layout from "./components/Layout";
import Attendance from "./pages/Attendance";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#40e0d0",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Beranda />
            </Route>
            <Route path="/personnel">
              <PersonnelList />
            </Route>
            <Route path="/attendance">
              <Attendance />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
