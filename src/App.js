import './App.css';
import React, { Component, Fragment } from "react";
import GlobalRigOverview from './components/GlobalRigOverview';
import RigOverview from './components/RigOverview';
import RigPanel from './components/RigPanel';
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
              <Route exact path={process.env.PUBLIC_URL + '/global'} element={ <GlobalRigOverview/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c01'} element={ <RigOverview sheet="sheet=C01" title="Container 1" key="c01"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c02'} element={ <RigOverview sheet="sheet=C02" title="Container 2" key="c02"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c03'} element={ <RigOverview sheet="sheet=C03" title="Container 3" key="c03"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c04'} element={ <RigOverview sheet="sheet=C04" title="Container 4" key="c04"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c08'} element={ <RigOverview sheet="sheet=C08" title="Container 8" key="c08"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c09'} element={ <RigOverview sheet="sheet=C09" title="Container 9" key="c09"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c10'} element={ <RigOverview sheet="sheet=C10" title="Container 10" key="c10"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c11'} element={ <RigOverview sheet="sheet=C11" title="Container 11" key="c11"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c12'} element={ <RigOverview sheet="sheet=C12" title="Container 12" key="c12"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c13'} element={ <RigOverview sheet="sheet=C13" title="Container 13" key="c13"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c14'} element={ <RigOverview sheet="sheet=C14" title="Container 14" key="c14"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c15'} element={ <RigOverview sheet="sheet=C15" title="Container 15" key="c15"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c16'} element={ <RigOverview sheet="sheet=C16" title="Container 16" key="c16"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c18'} element={ <RigOverview sheet="sheet=C18" title="Container 18" key="c18"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c19'} element={ <RigOverview sheet="sheet=C19" title="Container 19" key="c19"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c20'} element={ <RigOverview sheet="sheet=C20" title="Container 20" key="c20"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c21'} element={ <RigOverview sheet="sheet=C21" title="Container 21" key="c21"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c22'} element={ <RigOverview sheet="sheet=C22" title="Container 22" key="c22"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c23'} element={ <RigOverview sheet="sheet=C23" title="Container 23" key="c23"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c24'} element={ <RigOverview sheet="sheet=C24" title="Container 24" key="c24"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c25'} element={ <RigOverview sheet="sheet=C25" title="Container 25" key="c25"/> } />
            </Routes>
          </div>
          </div>
        </Router>
  );
}

export default App;