import React from 'react';
import sayHello from './ExcelToAzure';

export default function Home() {
    return(
    <div>
        <h1>Home</h1>
        <button onClick={sayHello}>Push c01 spreadsheet to Azure DB</button>
    </div>
    )
}