import React, { useState } from 'react';
import Button from './Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <h1>Button Component Demo</h1>
      
      <div className="button-demo">
        <h2>Variants</h2>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
      </div>

      <div className="button-demo">
        <h2>Sizes</h2>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      <div className="button-demo">
        <h2>States</h2>
        <Button disabled>Disabled</Button>
        <Button onClick={() => setCount(count + 1)}>
          Clicked {count} times
        </Button>
      </div>

      <div className="button-demo">
        <h2>Form Button</h2>
        <Button type="submit">Submit Form</Button>
      </div>
    </div>
  );
}

export default App;