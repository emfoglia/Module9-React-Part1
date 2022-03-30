import './App.css';

function App() {

  const onButtonClick = () => {
    alert('hello');
  }
  return (
    <div className="App">
      <h1>Welcome to Pittsburgh</h1>
      <button onClick={onButtonClick}>Submit</button>
    </div>
  );
}

export default App;
