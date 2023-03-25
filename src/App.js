import Form from './component/Form';
import './App.css';
import drug1 from "./drug1.json";
import drug2 from "./drug2.json";
import { useState } from 'react';

function App() {
  const [selectedDrug, setSelectedDrug] = useState({ fields: [] });

  const handleSelect = (drug) => {
    setSelectedDrug(drug)
  }
  return (
    <div className="App">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", height: "20vh" }}>
        <button onClick={() => handleSelect(drug1)}>Drug1</button>
        <button onClick={() => handleSelect(drug2)}>Drug2</button>
      </div>
      <Form selectedDrug={selectedDrug} />
    </div>
  );
}

export default App;
