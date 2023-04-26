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
    </div>
  );
}

export default App;
