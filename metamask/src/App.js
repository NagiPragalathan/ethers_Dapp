import logo from './logo.svg';
import './App.css';
import { ethers } from 'ethers';
import {useEffect} from "react";
import json from "./contract_abi.json";
import React, { useState } from 'react';

function App() {
  const [value, SetValue] = useState('');
  const provider = new ethers.providers.JsonRpcProvider(
    'https://polygon-mumbai.g.alchemy.com/v2/K59YdNGK95akCLJrA1m9nYPZ7JYNa8Me'
  );
  const walletAddress = "0x482c5E6AF1a42018f6E314f2599882dE9e0Ee1C0"

  const write_contrcat = async()=>{
      const id=document.getElementById("inp").value
      const providers = new ethers.providers.Web3Provider(window.ethereum);
      await providers.send("eth_requestAccounts",[]);
      const signer = providers.getSigner();
      const contract_=new ethers.Contract(walletAddress,json,signer);
      await contract_.setValue(Number.parseInt(id));
      console.log("Value Are Updated.... !")
  }
  const provider_ = new ethers.Contract(walletAddress,json,provider)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await provider_.getValue();
        const formattedValue = result.toString();
        SetValue(formattedValue);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
        <h1 id="view">Current Value is : {value}</h1>
        <input type="text" id="inp"/>
        <button onClick={write_contrcat}>Update</button><br/>

    </div>
  );
}

export default App;
