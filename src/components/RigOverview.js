import React, { useState, useEffect } from 'react';
import './Styling.css';

const output = document.querySelector('.output');
const url = 'https://docs.google.com/spreadsheets/d/';
const ssid = '1ikr2pmfjKL7vgJe71OXn7SCbvUU7QCtjLLdA_dubQ8g';
const gid = '/edit#gid=922581844';
const query1 = `/gviz/tq?`;

const q2 = 'tqx=out:json';


const endpoint = `${url}${ssid}${query1}`;

//const endpoint2 = `${url}${ssid}${query1}&${q2}&${sheet}`;

export default function RigOverview(props) {

    const endpoint2 = `${url}${ssid}${query1}&${q2}&${props.sheet}`;

    const [rigs, setRigs] = useState([[]]);

    useEffect(() => {
        getRows();
    }, []);

    let ri =  [[]]; 
    const getRows = async () => {
        fetch(endpoint2)
            .then(response => response.text())
            .then(data => {
                const temp = data.substr(47).slice(0, -2);
                const json = JSON.parse(temp);
                const rows = json.table.rows;
                for (let index = 0; index < json.table.rows.length; index++) {

                  
                    if(!(json.table.rows[index].c[11])){
                        // do nothing                       
                    }
                    
                    else if(!(json.table.rows[index].c[0])){
                      ri.push([json.table.rows[index].c[3].v, "N/A", json.table.rows[index].c[11].v]);
                    }
                    
                    else{
                        ri.push([json.table.rows[index].c[3].v, json.table.rows[index].c[0].v, json.table.rows[index].c[11].v]);
                    }
                }
                console.log("json: ", json.table.rows);
                setRigs(ri.filter(null_errors => null_errors != null));
            }); 
    };

    return(
    <div>
        <h1>{props.title}</h1>
        <div className="floatMiddle">
        <h3>Error track list</h3>
        <table>
          <thead>
            <tr>
                <th>Rig IP</th>
                <th>Rig Mac Address</th>
                <th>Rig Error</th>
            </tr>
          </thead>
          <tbody>
            {rigs.slice(1, rigs.length).map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </div>
    </div>
        
    )
}
