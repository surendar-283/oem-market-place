// App.js
import React, { useState } from 'react';
import './App.css';
import SupplyChain from './Supplychain';

function App() {
  const [activeTab, setActiveTab] = useState('supplyChain');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'supplyChain':
        return <SupplyChain />;
      case 'home':
        return <div className="tab-content">Home Page Content</div>;
      case 'marketplace':
        return <div className="tab-content">Marketplace Page Content</div>;
      case 'transaction':
        return <div className="tab-content">Transaction Page Content</div>;
      default:
        return <div className="tab-content">Select a tab</div>;
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>OEM Marketplace</h1>
      </header>
      
      <div className="tabs">
        <button 
          className={activeTab === 'home' ? 'active' : ''} 
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button 
          className={activeTab === 'supplyChain' ? 'active' : ''} 
          onClick={() => setActiveTab('supplyChain')}
        >
          Supply Chain
        </button>
        <button 
          className={activeTab === 'marketplace' ? 'active' : ''} 
          onClick={() => setActiveTab('marketplace')}
        >
          Marketplace
        </button>
        <button 
          className={activeTab === 'transaction' ? 'active' : ''} 
          onClick={() => setActiveTab('transaction')}
        >
          Transaction
        </button>
      </div>
      
      <main>
        {renderTabContent()}
      </main>
      
      <footer>
        <p>© 2025 OEM Marketplace</p>
      </footer>
    </div>
  );
}

export default App;