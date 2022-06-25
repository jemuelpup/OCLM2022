import './App.css';
import OCLMM from "./Pages/OCLMM/OCLMM"
import OCLMM2 from "./Pages/OCLMM2/OCLMM2"
import Badges from "./Pages/Badges/Badges"
import Home from "./Pages/Home/Home";
import MonthlySchedule from "./Pages/MonthlySchedule/MonthlySchedule";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Fragment } from 'react';

function App() {
  const a = {
    n1:1,
    n2:2,
    n3:3
  }
  return <Router>
    <div className="App">
      <div className="app-wrapper-container">
        <h1 className="no-print">Galas Assignment management system</h1>
        <nav className="navigation-links no-print">
          <ul>
            {/* <li>
              <Link to="/home">Home</Link>
            </li> */}
            <li>
              <Link to="/MonthlySchedule">Monthly Schedule</Link>
            </li>
            <li>
              <Link to="/OCLMM2">OCLMM 2022</Link>
            </li>
            <li>
              <Link to="/OCLMM">OCLMM 2021</Link>
            </li>
            <li>
              <Link to="/badges">Badges</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Fragment>
              {/* <MonthlyScheduleTable/> */}
              <MonthlySchedule />
            </Fragment>
          </Route>
          {/* <Route exact path="/home">
            <Home />
          </Route> */}
          <Route exact path="/MonthlySchedule">
            <Fragment>
              {/* <MonthlyScheduleTable/> */}
              <MonthlySchedule />
            </Fragment>
          </Route>
          <Route exact path="/OCLMM">
            <OCLMM />
          </Route>
          <Route exact path="/OCLMM2">
            <OCLMM2 />
          </Route>
          <Route exact path="/badges">
            <Badges />
          </Route>
        </Switch>
      </div>
    </div>
  </Router>
  
}

export default App;
