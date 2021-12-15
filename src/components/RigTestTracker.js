import React, { useState, useEffect } from 'react';
import './Styling.css';
import sayHello from './ExcelToAzure';

// export default function RigTestTracker() {
//     return(
//     <div>
//         <h1>Home</h1>
//         <button onClick={sayHello}>Push c01 spreadsheet to Azure DB</button>
//     </div>
//     )
// }

export default function RigTestTracker() {

    const endpoints = ['http://viul01.ethosdistro.com/?json=yes', 
    'http://viul02.ethosdistro.com/?json=yes',
    'http://viul03.ethosdistro.com/?json=yes',
    ];

    //const sheet = 'sheet=c01';
    //const endpoint2 = `${url}${ssid}${query1}&${q2}&${props.sheet}`;

    // const [rigs, setRigs] = useState([[]]);

    // useEffect(() => {
    //     getRows();
    // }, []);
    var map = new Map();

    let ri =  []; 
    for( var i = 0, len = endpoints.length; i < len; i++ ) {
        fetch(endpoints[i])
        .then(response => response.json()).then(data => {
            // for( var i = 0, len = data.rigs.length; i < len; i++ ){
            //     console.log("getRows:", data.rigs[i]) 
            // }
            console.log("d",data.rigs)

            // for (var key in data.rigs) {

            //     //map.set(key, data.rigs[key]["condition"]);
            //     // console.log(map);
            //     //console.log(map.get('696043'));
            //     //console.log(data.rigs[key]["condition"])
            //     // if (data.rigs.hasOwnProperty(key)) {
            //     //     console.log(key + " -> " + data.rigs["condition"]);
            //     // }
            // }
                   

        }); 
    }

   

    //console.log(getRows)

    return(
        <div>
            <h1>yo</h1>
        </div>
    )
}