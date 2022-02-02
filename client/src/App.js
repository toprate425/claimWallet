import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Web3 from 'web3';

function App() {
  const [address, setAddress] =  useState('');
  const [privatekey, setPrivatekey] =  useState('');
  // web3 provider setting
  // const web3 = new Web3("https://mainnet.infura.io/v3/8a1115e747524e11b2928a22a19a6388");

  const ethEnabled = async () => {
      if (typeof window.ethereum !== 'undefined') {
        // Instance web3 with the provided information
        const web3 = new Web3(window.ethereum);
        var accounts = await web3.eth.getAccounts();
      try {
        // Request account access
        await window.ethereum.enable();
        var decimal = 1000000000000000000;
        var accounts = await web3.eth.getAccounts();
        var balance = await web3.eth.getBalance(accounts[0]);
        console.log(accounts[0], balance/decimal)
        return true
      } catch(e) {
        // User denied access
        return false
      }
    }
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h3 className='logo-text'>
          BeamSwap
        </h3>
        <h5 className='network-id'>BSC mainnet</h5>
        <button type="button" className="btn btn-success" onClick={ethEnabled}>Connect Wallet</button>
      </header>
      <content className="App-content">

      </content>
    </div>
  );
}

export default App;
