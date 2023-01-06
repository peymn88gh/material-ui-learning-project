import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import {createTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core";
import { purple } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ce93d8",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
