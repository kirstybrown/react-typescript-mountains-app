import React, { useState } from 'react';
import List from './components/List';

import './App.css';
import AddToList from './components/AddToList';

export interface IState {
  mountains: {
    name: string
    url: string
    height: number
    location: string
    description?: string
  }[]
}

function App() {

  const [mountains, setMountains] = useState<IState["mountains"]>([
    {
      name: "Trevenque",
      url: "https://live.staticflickr.com/7119/6904342024_125296a4fe_b.jpg",
      height: 2000,
      location: "La Zubia",
      description: "The best mountain!"
    }
  ]);

  return (
    <div className="App">
      <h1>Mountains in Granada</h1>
      <List mountains={mountains}/>
      <AddToList mountains={mountains} setMountains={setMountains}/>
    </div>
  );
}

export default App;
