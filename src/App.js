import './App.css';
import React, {useState,useEffect, Component, Fragment} from 'react';
import GlobalRigOverview from './components/GlobalRigOverview';
import RigOverview from './components/RigOverview';
import PanelRigOverview from './components/PanelRigTracker';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar.js';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';


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
              <Route exact path={process.env.PUBLIC_URL + '/c01s'} element={ <RigOverview sheet="sheet=C01" title="Container 1 Spreadsheet" key="c01s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c02s'} element={ <RigOverview sheet="sheet=C02" title="Container 2 Spreadsheet" key="c02s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c03s'} element={ <RigOverview sheet="sheet=C03" title="Container 3 Spreadsheet" key="c03s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c04s'} element={ <RigOverview sheet="sheet=C04" title="Container 4 Spreadsheet" key="c04s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c08s'} element={ <RigOverview sheet="sheet=C08" title="Container 8 Spreadsheet" key="c08s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c09s'} element={ <RigOverview sheet="sheet=C09" title="Container 9 Spreadsheet" key="c09s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c10s'} element={ <RigOverview sheet="sheet=C10" title="Container 10 Spreadsheet" key="c10s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c11s'} element={ <RigOverview sheet="sheet=C11" title="Container 11 Spreadsheet" key="c11s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c12s'} element={ <RigOverview sheet="sheet=C12" title="Container 12 Spreadsheet" key="c12s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c13s'} element={ <RigOverview sheet="sheet=C13" title="Container 13 Spreadsheet" key="c13s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c14s'} element={ <RigOverview sheet="sheet=C14" title="Container 14 Spreadsheet" key="c14s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c15s'} element={ <RigOverview sheet="sheet=C15" title="Container 15 Spreadsheet" key="c15s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c16s'} element={ <RigOverview sheet="sheet=C16" title="Container 16 Spreadsheet" key="c16s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c18s'} element={ <RigOverview sheet="sheet=C18" title="Container 18 Spreadsheet" key="c18s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c19s'} element={ <RigOverview sheet="sheet=C19" title="Container 19 Spreadsheet" key="c19s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c20s'} element={ <RigOverview sheet="sheet=C20" title="Container 20 Spreadsheet" key="c20s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c21s'} element={ <RigOverview sheet="sheet=C21" title="Container 21 Spreadsheet" key="c21s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c22s'} element={ <RigOverview sheet="sheet=C22" title="Container 22 Spreadsheet" key="c22s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c23s'} element={ <RigOverview sheet="sheet=C23" title="Container 23 Spreadsheet" key="c23s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c24s'} element={ <RigOverview sheet="sheet=C24" title="Container 24 Spreadsheet" key="c24s"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c25s'} element={ <RigOverview sheet="sheet=C25" title="Container 25 Spreadsheet" key="c25s"/> } />

              <Route exact path={process.env.PUBLIC_URL + '/c01p'} element={ <PanelRigOverview label="viul01" text="IpAddresses1.txt" title="Container 1 Panel" key="c01p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c02p'} element={ <PanelRigOverview label="viul02" text="IpAddresses1.txt" title="Container 2 Panel" key="c02p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c03p'} element={ <PanelRigOverview label="viul03" text="IpAddresses1.txt" title="Container 3 Panel" key="c03p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c04p'} element={ <PanelRigOverview label="viul04" text="IpAddresses1.txt" title="Container 4 Panel" key="c04p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c08p'} element={ <PanelRigOverview label="viul08" text="IpAddresses1.txt" title="Container 8 Panel" key="c08p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c09p'} element={ <PanelRigOverview label="viul09" text="IpAddresses2.txt" title="Container 9 Panel" key="c09p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c10p'} element={ <PanelRigOverview label="viul10" text="IpAddresses2.txt" title="Container 10 Panel" key="c10p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c11p'} element={ <PanelRigOverview label="viul11" text="IpAddresses2.txt" title="Container 11 Panel" key="c11p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c12p'} element={ <PanelRigOverview label="viul12" text="IpAddresses2.txt" title="Container 12 Panel" key="c12p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c13p'} element={ <PanelRigOverview label="viul13" text="IpAddresses2.txt" title="Container 13 Panel" key="c13p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c14p'} element={ <PanelRigOverview label="viul14" text="IpAddresses2.txt" title="Container 14 Panel" key="c14p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c15p'} element={ <PanelRigOverview label="viul15" text="IpAddresses2.txt" title="Container 15 Panel" key="c15p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c16p'} element={ <PanelRigOverview label="viul16" text="IpAddresses2.txt" title="Container 16 Panel" key="c16p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c18p'} element={ <PanelRigOverview label="viul18" text="IpAddresses2.txt" title="Container 18 Panel" key="c18p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c19p'} element={ <PanelRigOverview label="viul19" text="IpAddresses2.txt" title="Container 19 Panel" key="c19p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c20p'} element={ <PanelRigOverview label="viul20" text="IpAddresses2.txt" title="Container 20 Panel" key="c20p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c21p'} element={ <PanelRigOverview label="viul21" text="IpAddresses2.txt" title="Container 21 Panel" key="c21p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c22p'} element={ <PanelRigOverview label="viul22" text="IpAddresses2.txt" title="Container 22 Panel" key="c22p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c23p'} element={ <PanelRigOverview label="viul23" text="IpAddresses2.txt" title="Container 23 Panel" key="c23p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c24p'} element={ <PanelRigOverview label="viul24" text="IpAddresses2.txt" title="Container 24 Panel" key="c24p"/> } />
              <Route exact path={process.env.PUBLIC_URL + '/c25p'} element={ <PanelRigOverview label="viul25" text="IpAddresses2.txt" title="Container 25 Panel" key="c25p"/> } />

            </Routes>
          </div>
          </div>
        </Router>
  );
}

export default App;