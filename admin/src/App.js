
import { useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import axios from "axios";

import Content from './components/Content';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [rawData, setRawData] = useState({
    projectName: "",
    tokenAddress: "",
    unclaimedToken: "",
    claimedToken: "",
    claim: ""
  });
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!data) {
      handleFetchData();
    }
  }, [data]);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleFetchData = async() => {
    const response = await axios.get('/read');
    setData(response.data.data)
  }
  const saveData = async() => {
    const response = await axios.post('/save', rawData);
    if (response.data.status === 200) {
      handleModal();
      data.tableData.push(rawData)
      alert('saved data successfully');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <div className='col-md-9'>
            <p className='logo-text'>Admin Panel</p>
          </div>
          <div className='col-md-1 network-name text-right'>
          </div>
          <div className='col-md-2'>
            <button type="button" className="btn btn-success wallet-connect" onClick={handleModal}>Add New</button>
            <Modal show={isOpen} onHide={handleModal}>
              <Modal.Header>
                <Modal.Title>Add new item</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className='form-group row'>
                    <label htmlFor="projectName" className="col-sm-4 control-label">Project Name</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder="Project Name" onChange={ (event) => setRawData({...rawData, projectName: event.target.value}) }/>
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label htmlFor="tokenAddress" className="col-sm-4 control-label">Token Address</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder="Token Address" onChange={ (event) => setRawData({...rawData, tokenAddress: event.target.value}) }/>
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label htmlFor="unclaimedToken" className="col-sm-4 control-label">Unclaimed Token</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder="Unclaimed Token" onChange={ (event) => setRawData({...rawData, unclaimedToken: event.target.value}) }/>
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label htmlFor="claimedToken" className="col-sm-4 control-label">Claimed Token</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder="Claimed Token" onChange={ (event) => setRawData({...rawData, claimedToken: event.target.value}) }/>
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label htmlFor="claim" className="col-sm-4 control-label">Claim</label>
                    <div className="col-sm-8">
                      <input type="text" className="form-control" placeholder="Claim" onChange={ (event) => setRawData({...rawData, claim: event.target.value}) }/>
                    </div>
                  </div>
              </Modal.Body>
              <Modal.Footer>
                <button className='btn btn-danger' onClick={handleModal}>Cancel</button>
                <button className='btn btn-primary' onClick={saveData}>Save</button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </header>
      <div className='App-body'>
        <Content data={data}/>
      </div>
    </div>
  );
}

export default App;
