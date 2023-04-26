import './App.css';
import MyComponent from './components/myComponent/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS no componente */}
      <p>Este paragrafo não é do componente</p>
      <MyComponent />
      <p>Este componente é do App.js</p>
      {/* Inline CSS */}
      <p
        style={{
          color: "white",
          padding: "25px",
          borderTop: "2px solid red"
        }}
      >
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
