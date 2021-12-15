import './App.css';
import React, { Component, Fragment } from "react";
import GlobalRigOverview from './components/GlobalRigOverview';
import RigOverview from './components/RigOverview';
import RigTestTracker from './components/RigTestTracker';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar.js';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";


//const sheet = 'sheet=C01';
function App() {
  return (
        <Router>
          <div className="App">
            <Navbar />
          <div className="content">
            <Routes>
              <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home/>} />
              <Route path="/global" element={ <GlobalRigOverview key="global"/> } />
              <Route path="/test" element={ <RigTestTracker key="test"/> } />
              <Route path="/c01" element={ <RigOverview sheet="sheet=C01" title="Container 1" key="c01"/> } />
              <Route path="/c02" element={ <RigOverview sheet="sheet=C02" title="Container 2" key="c02"/> } />
              <Route path="/c03" element={ <RigOverview sheet="sheet=C03" title="Container 3" key="c03"/> } />
              <Route path="/c04" element={ <RigOverview sheet="sheet=C04" title="Container 4" key="c04"/> } />
              <Route path="/c08" element={ <RigOverview sheet="sheet=C08" title="Container 8" key="c08"/> } />
              <Route path="/c09" element={ <RigOverview sheet="sheet=C09" title="Container 9" key="c09"/> } />
              <Route path="/c10" element={ <RigOverview sheet="sheet=C10" title="Container 10" key="c10"/> } />
              <Route path="/c11" element={ <RigOverview sheet="sheet=C11" title="Container 11" key="c11"/> } />
              <Route path="/c12" element={ <RigOverview sheet="sheet=C12" title="Container 12" key="c12"/> } />
              <Route path="/c13" element={ <RigOverview sheet="sheet=C13" title="Container 13" key="c13"/> } />
              <Route path="/c14" element={ <RigOverview sheet="sheet=C14" title="Container 14" key="c14"/> } />
              <Route path="/c15" element={ <RigOverview sheet="sheet=C15" title="Container 15" key="c15"/> } />
              <Route path="/c16" element={ <RigOverview sheet="sheet=C16" title="Container 16" key="c16"/> } />
              <Route path="/c18" element={ <RigOverview sheet="sheet=C18" title="Container 18" key="c18"/> } />
              <Route path="/c19" element={ <RigOverview sheet="sheet=C19" title="Container 19" key="c19"/> } />
              <Route path="/c20" element={ <RigOverview sheet="sheet=C20" title="Container 20" key="c20"/> } />
              <Route path="/c21" element={ <RigOverview sheet="sheet=C21" title="Container 21" key="c21"/> } />
              <Route path="/c22" element={ <RigOverview sheet="sheet=C22" title="Container 22" key="c22"/> } />
              <Route path="/c23" element={ <RigOverview sheet="sheet=C23" title="Container 23" key="c23"/> } />
              <Route path="/c24" element={ <RigOverview sheet="sheet=C24" title="Container 24" key="c24"/> } />
              <Route path="/c25" element={ <RigOverview sheet="sheet=C25" title="Container 25" key="c25"/> } />
            </Routes>
          </div>
          </div>
        </Router>
  );
}

export default App;