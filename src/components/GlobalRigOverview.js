import React, { useState, useEffect } from 'react';
import './Styling.css';

const output = document.querySelector('.output');
const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1ikr2pmfjKL7vgJe71OXn7SCbvUU7QCtjLLdA_dubQ8g';
const gid = '/edit#gid=922581844';
const query1 = `/gviz/tq?`;
const sheet = "sheet=Global rig tracker"

const q2 = 'tqx=out:json';


const endpoint = `${url}${ssid}${query1}`;

//const endpoint2 = `${url}${ssid}${query1}&${q2}&${sheet}`;

export default function GlobalRigOverview() {

    const excelEndpoints = `${url}${ssid}${query1}&${q2}&${sheet}`;
    const ethosEndpoints = [
    'http://viul01.ethosdistro.com/?json=yes', 
    'http://viul02.ethosdistro.com/?json=yes',
    'http://viul03.ethosdistro.com/?json=yes',
    'http://viul04.ethosdistro.com/?json=yes',
    'http://viul08.ethosdistro.com/?json=yes',
    'http://viul09.ethosdistro.com/?json=yes',
    'http://viul10.ethosdistro.com/?json=yes',
    'http://viul11.ethosdistro.com/?json=yes',
    'http://viul12.ethosdistro.com/?json=yes',
    'http://viul13.ethosdistro.com/?json=yes',
    'http://viul14.ethosdistro.com/?json=yes',
    'http://viul15.ethosdistro.com/?json=yes',
    'http://viul16.ethosdistro.com/?json=yes',
    'http://viul18.ethosdistro.com/?json=yes',
    'http://viul19.ethosdistro.com/?json=yes',
    'http://viul20.ethosdistro.com/?json=yes',
    'http://viul21.ethosdistro.com/?json=yes',
    'http://viul22.ethosdistro.com/?json=yes',
    'http://viul23.ethosdistro.com/?json=yes',
    'http://viul24.ethosdistro.com/?json=yes',
    'http://viul25.ethosdistro.com/?json=yes'
    ];

    var conditionMap = new Map();
    var gpuMap = new Map();
    //var uptimeMap = new Map();

    const greenCheck = '\u{1F7E2}';
    const yellowCheck = '\u{1F7E1}';
    const redCheck = '\u{1F534}';

    const [rigs, setRigs] = useState([[]]);

    useEffect(() => {
        getRows();
    }, []);

    let ri =  [[]]; 

    const getRows = async () => {

      for( var i = 0, len = ethosEndpoints.length; i < len; i++ ) {
        fetch(ethosEndpoints[i])
        .then(response => response.json())
        .then(data => {                  
          console.log("data rigs: ", data.rigs)
          for (var key in data.rigs) {
  
            conditionMap.set(key, data.rigs[key]["condition"]);
            gpuMap.set(key, data.rigs[key]["miner_instance"]);
            //uptimeMap.set(key, (data.rigs[key]["uptime"]/60/60/24).toFixed(2));

          }
        });
      }
      await fetch(excelEndpoints)
          .then(response => response.text())
          .then(data => {
              const temp = data.substr(47).slice(0, -2);
              const json = JSON.parse(temp);
              const rows = json.table.rows;
              for (let index = 2; index < json.table.rows.length; index++) {

                  if(!(json.table.rows[index].c[0])){
                      // do nothing                       
                  }
                  
                  else if(!(json.table.rows[index].c[1])){
                    // do nothing 
                  }

                  else if(!(json.table.rows[index].c[2])){
                    // do nothing 
                  }

                  else if(!(json.table.rows[index].c[3])){
                    // do nothing 
                  }
                  
                  else{
                      //const MACadd = (json.table.rows[index].c[2].v).replace(':', '').replace(':', '').replace(':', '').replace(':', '').replace(':', '');
                      //const rigName = MACadd.slice(6);



                    if(conditionMap.has(json.table.rows[index].c[0].v)){

                      if((gpuMap.get(json.table.rows[index].c[0].v)) > 0 && (gpuMap.get(json.table.rows[index].c[0].v)) <= 4){
                        ri.push([
                          json.table.rows[index].c[1].v, 
                          json.table.rows[index].c[0].v, 
                          json.table.rows[index].c[2].v, 
                          json.table.rows[index].c[3].v, 
                          conditionMap.get(json.table.rows[index].c[0].v),
                          //uptimeMap.get(json.table.rows[index].c[0].v),
                          gpuMap.get(json.table.rows[index].c[0].v),
                          yellowCheck
                        ]);
                      }

                      else if((gpuMap.get(json.table.rows[index].c[0].v)) > 4){
                        ri.push([
                          json.table.rows[index].c[1].v, 
                          json.table.rows[index].c[0].v, 
                          json.table.rows[index].c[2].v, 
                          json.table.rows[index].c[3].v, 
                          conditionMap.get(json.table.rows[index].c[0].v),
                          //uptimeMap.get(json.table.rows[index].c[0].v),
                          gpuMap.get(json.table.rows[index].c[0].v),
                          greenCheck
                        ]);
                      }

                      else if((gpuMap.get(json.table.rows[index].c[0].v)) < 1){
                        ri.push([
                          json.table.rows[index].c[1].v, 
                          json.table.rows[index].c[0].v, 
                          json.table.rows[index].c[2].v, 
                          json.table.rows[index].c[3].v, 
                          conditionMap.get(json.table.rows[index].c[0].v),
                          //uptimeMap.get(json.table.rows[index].c[0].v),
                          gpuMap.get(json.table.rows[index].c[0].v),
                          redCheck
                        ]);
                      }


                    }
                    else{
                      ri.push([
                        json.table.rows[index].c[1].v, 
                        json.table.rows[index].c[0].v, 
                        json.table.rows[index].c[2].v, 
                        json.table.rows[index].c[3].v, 
                        "N/A",
                        //"N/A",
                        "N/A",
                        redCheck
                      ]);
                    }
                  }
              }



              setRigs(ri.filter(null_errors => null_errors != null));
          }); 
    };

    return(
    <div>
        <h1>Global Rig Tracker</h1>
        <div className="floatMiddle">
        <table>
          <thead>
            <tr>
                <th>Container ID</th>
                <th>Rig ID</th>
                <th>Rig IP</th>
                <th>Rig MAC Address</th>
                <th>Rig Condition</th>
                <th>Rig GPU Count</th>
                <th>Rig Status</th>
            </tr>
          </thead>
          <tbody>
            {rigs.slice(1, rigs.length).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>{item[4]}</td>
                  <td>{item[5]}</td>
                  <td>{item[6]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
    </div>





    )
}