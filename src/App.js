import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Attendance from "./Attendance";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/attendance">
            <Attendance />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
