// CHILDREN PROP OR REACT CHILDREN

// This project was about parsing props from a parent component to a child component in React.
// The parent component (App.jsx) manages the state and passes props to the child component (Child.jsx).
// The child component receives the props and displays them.
// The code below is the complete implementation of the App component.

import React, { useState } from 'react';
import Child from './Child';
import Card from './Card';

function ChildRender() {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleChange = () => {
    setSubmittedText(inputText);
    setInputText('');
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-full max-w-6xl mx-auto">
      {/* Left Card: Child */}
      <div className="border border-black w-full lg:w-1/2 bg-green-300 shadow-md rounded-lg p-6 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4"> Card 1</h2>

        <input
          type="text"
          placeholder="Enter text to display"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full p-2 border border-gray-900 rounded mb-4"
        />

        <button
          onClick={handleChange}
          className="border border-black bg-green-500 text-white px-6 py-2 rounded hover:bg-green-800 transition mx-auto"
        >
          Click me
        </button>

        <Child text={submittedText} />
      </div>

      {/* Right Card: Card with children */}
      <div className="w-full lg:w-1/2">
        <Card>
          <h2 className="text-xl font-bold">This is second prop</h2>
          <p>To be passed as children</p>
          <p>This only shows after clicking button</p>
          <p>Re-clicking button makes this text disappear</p>
        </Card>
      </div>
    </div>
  );
}

export default ChildRender;


