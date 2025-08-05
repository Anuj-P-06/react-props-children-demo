 // CHILDREN PROP OR REACT CHILDREN


// This project was about parsing props from a parent component to a child component in React.
// The parent component (App.jsx) manages the state and passes props to the child component (Child.jsx).
// The child component receives the props and displays them.
// The code below is the complete implementation of the App component.

import './App.css';
import React from 'react';
import ChildRender from './components/ChildRender';

function App() {
  return (
    <div className="min-h-screen bg-emerald-900 flex justify-center items-center ">
      
      <ChildRender />
    </div>
  );
}

export default App;
