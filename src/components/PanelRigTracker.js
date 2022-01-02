import React, { useState, useEffect } from 'react';
import './Styling.css';
//import "./IpAdresses.txt";

const output = document.querySelector('.output');
const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1ikr2pmfjKL7vgJe71OXn7SCbvUU7QCtjLLdA_dubQ8g';
const gid = '/edit#gid=922581844';
const query1 = `/gviz/tq?`;
const sheet = "sheet=Global rig tracker"

const http = "http://"
const ethos = ".ethosdistro.com/?json=yes"

const q2 = 'tqx=out:json';


const endpoint = `${url}${ssid}${query1}`;

//const endpoint2 = `${url}${ssid}${query1}&${q2}&${sheet}`;

export default function PanelRigOverview(props) {

    const excelEndpoints = `${url}${ssid}${query1}&${q2}&${sheet}`;
    const ethosEndpoints = `${http}${props.label}${ethos}`;

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
    let IpArray = [];

    const getRows = async () => {


      await fetch(ethosEndpoints)
      .then(response => response.json())
      .then(data => {                    
        console.log("data rigs: ", data.rigs)
        for (var key in data.rigs) {
          //console.log("key:", data.rigs[key]["ip"])
          conditionMap.set(data.rigs[key]["ip"], data.rigs[key]["condition"]);
          gpuMap.set(data.rigs[key]["ip"], data.rigs[key]["miner_instance"]);
          //uptimeMap.set(key, (data.rigs[key]["uptime"]/60/60/24).toFixed(2));

        }
      });

      await fetch(props.text)
      .then(response => response.text())
      .then(data => {
        IpArray = data.split('\n');
        //console.log("ipa:", IpArray)
        for (let index = 0; index < IpArray.length; index++) {
          // console.log("cndmap:", IpArray[1])
          // if(gpuMap.get("10.1.1.12") == 6){
          //   console.log("1231nfh23h2873")
          // }
          if(gpuMap.has(IpArray[index].replace("\r","")) && conditionMap.has(IpArray[index].replace("\r",""))){
            if(gpuMap.get(IpArray[index].replace("\r","")) > 4){
              ri.push([
                IpArray[index],
                gpuMap.get(IpArray[index].replace("\r","")),
                conditionMap.get(IpArray[index].replace("\r","")),
                greenCheck
              ]);
            }
            else if(gpuMap.get(IpArray[index].replace("\r","")) <= 4 && gpuMap.get(IpArray[index].replace("\r","")) > 0 ){
              ri.push([
                IpArray[index],
                gpuMap.get(IpArray[index].replace("\r","")),
                conditionMap.get(IpArray[index].replace("\r","")),
                yellowCheck
              ]);
            }
            else {
              ri.push([
                IpArray[index],
                gpuMap.get(IpArray[index].replace("\r","")),
                conditionMap.get(IpArray[index].replace("\r","")),
                redCheck
              ]);
            }
          }

          else if(gpuMap.has(IpArray[index]) && !(conditionMap.has(IpArray[index]))){
            console.log("2")
            ri.push([
              IpArray[index],
              gpuMap.get(IpArray[index].replace("\r","")),
              "N/A",
            ]);
          }

          else if(!(gpuMap.has(IpArray[index])) && conditionMap.has(IpArray[index])){
            console.log("3")

            ri.push([
              IpArray[index],
              "N/A",
              conditionMap.get(IpArray[index].replace("\r","")),
            ]);
          }

          else if(!(gpuMap.has(IpArray[index])) && !(conditionMap.has(IpArray[index]))){
            console.log("4")

            ri.push([
              IpArray[index],
              "N/A",
              "N/A",
              redCheck
            ]);
          }
          //console.log("cndmap:", gpuMap.get(IpArray[index]))
        }
      });


      setRigs(ri.filter(null_errors => null_errors != null));
    };



    return(
    <div>
        <h1>{props.title}</h1>
        <div className="floatMiddle">
        <table>
          <thead>
            <tr>
                <th>Rig IP</th>
                <th>GPU Count</th>
                <th>Rig Condition</th>
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
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
    </div>
    )
}