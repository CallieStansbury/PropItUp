import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard FirstName="Sally" LastName="Bruno" Age={86} HairColor="Gray"/>
      <PersonCard FirstName="Debbie" LastName="Jones" Age={68} HairColor="Brown"/>
      <PersonCard FirstName="Benjamin" LastName="Williams" Age={27} HairColor="Brown"/>
      <PersonCard FirstName="Scott" LastName="Kerrigan" Age={34} HairColor="Blonde"/>
    </div>
  );
}

export default App;
