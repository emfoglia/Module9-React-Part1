import React, { useState } from "react";
import './App.css';

const App = () => {
  const imageUrl = "https://mymodernmet.com/wp/wp-content/uploads/2021/08/frog-photos-ajar-setiadi-7.jpeg";
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  const [show, setShow] = useState(false);

  const decrement = () => {
    setCount(count - 1);
  }
  const increment = () => {
    setCount(count + 1);
  }
  const toggleDark = () => {
    setDark(!dark);
  }
  const showImage = () => {
    setShow(!show);
  }

  const blockStyles = {
    background: dark ? 'black' : 'white',
    width: '200px',
    height: '200px',
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: dark ? 'white' : 'black',
    fontsize: '30px'
  }
  const pictureStyles = {
    width: '400px',
    height: '400px',
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: dark ? 'white' : 'black',
    fontsize: '30px',
    display: show ? 'none' : 'flex',
    objectfit: 'cover'
  }
  const largeNum = {
    fontSize: '20px'
  };


  return (
    <div className="App">
      <button onClick={decrement}><p>Minus<div style={largeNum}>1</div></p></button>
      <button onClick={increment}><p>Add<div style={largeNum}>1</div></p></button>
      <button onClick={toggleDark}>Toggle Dark</button>
      <button onClick={showImage}>Toggle Image</button>
      <br></br>
      <span>Dark mode is {dark ? 'ON' : 'OFF'}</span>
      <div style={blockStyles}>Count is at {count}</div>
      <img style={pictureStyles} src={imageUrl} alt="frog" />
    </div>
  );
}

export default App;
