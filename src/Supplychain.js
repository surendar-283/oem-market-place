// SupplyChain.js
import React, { useState } from 'react';
import './Supplychain.css';

function SupplyChain() {
  const [componentId, setComponentId] = useState('');
  const [description, setDescription] = useState('');
  const [componentType, setComponentType] = useState('');
  const [address, setAddress] = useState('');
  const [searchId, setSearchId] = useState('');
  
  // Separate messages for each section
  const [registerMessage, setRegisterMessage] = useState('');
  const [transferMessage, setTransferMessage] = useState('');
  const [searchMessage, setSearchMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (!componentId || !description || !componentType) {
      setRegisterMessage('All fields are required for registration.');
      return;
    }
    
    // Here you would normally make an API call to register the component
    setRegisterMessage(`Component registered successfully: ID ${componentId}, Description: ${description}, Type: ${componentType}`);
    
    // Reset form
    setComponentId('');
    setDescription('');
    setComponentType('');
  };

  const handleTransfer = (e) => {
    e.preventDefault();
    if (!componentId || !address) {
      setTransferMessage('Both Component ID and Address are required for transfer.');
      return;
    }
    
    // Here you would normally make an API call to transfer the component
    setTransferMessage(`Component ${componentId} transferred to address: ${address}`);
    
    // Reset form
    setComponentId('');
    setAddress('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchId) {
      setSearchMessage('Component ID is required for search.');
      return;
    }
    
    // Here you would normally make an API call to search for the component
    setSearchMessage(`Searching for component with ID: ${searchId}`);
    
    // Reset form
    setSearchId('');
  };

  return (
    <div className="supply-chain-container">
      <h2>Supply Chain Management</h2>
      
      <div className="feature-section">
        <h3>Register Component</h3>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>Component ID</label>
            <input 
              type="number" 
              value={componentId} 
              onChange={(e) => setComponentId(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Type</label>
            <input 
              type="text" 
              value={componentType} 
              onChange={(e) => setComponentType(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="action-button">Register</button>
          
          {registerMessage && <div className="section-message">{registerMessage}</div>}
        </form>
      </div>
      
      <div className="feature-section">
        <h3>Transfer Component</h3>
        <form onSubmit={handleTransfer}>
          <div className="form-group">
            <label>Component ID</label>
            <input 
              type="number" 
              value={componentId} 
              onChange={(e) => setComponentId(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>Hedera Address</label>
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="0.0.12345"
            />
          </div>
          
          <button type="submit" className="action-button">Transfer</button>
          
          {transferMessage && <div className="section-message">{transferMessage}</div>}
        </form>
      </div>
      
      <div className="feature-section">
        <h3>Search Component</h3>
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>Component ID</label>
            <input 
              type="number" 
              value={searchId} 
              onChange={(e) => setSearchId(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="action-button">Search</button>
          
          {searchMessage && <div className="section-message">{searchMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default SupplyChain;