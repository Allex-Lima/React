import './App.css';
import MyComponent from './components/myComponent/MyComponent';
import { useState } from 'react'

function App() {

  let n = 16

  const [nome] = useState("Alex")

  const redTitle = true

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
      {/* CSS Inline Dinâmico */}
      <h2
        style={n> 10 ? {color: "purple"} : {color: "pink"}}
      >
        CSS Dinâmico
      </h2>
      <h2
        style={nome === "A" ?
          { color: "white", backgroundColor: "blueviolet" }
          : { color: "green" }}
      >
        CSS Dinâmico
      </h2>
      {/* CSS Classe Dinâmica */}
      <h2 className={redTitle ? "redTitle" : 'title'}>
        Este titulo vai ter CSS Classe Dinâmica.
      </h2>
    </div>
  );
}

export default App;
