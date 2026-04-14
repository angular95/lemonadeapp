import React, { useEffect, useState } from 'react';
import './App.css';
import LemonadeTable from './Lemonade';
import OrderTable from './OrderTable';

function App() {
  

  return (
    <div className='container'>
      <h1 style={{ width: "100%" }}>Lemonade Stand</h1>
      <div className='tableContainer'>
      <div style={{ width: "70%", textAlign: "center", paddingLeft : "10%" }}>
          <LemonadeTable />
      </div>
      <div style={{ width: "30%", textAlign: "center" }}>
          <OrderTable />
      </div>
      </div>
    </div>
  );
}

export default App;