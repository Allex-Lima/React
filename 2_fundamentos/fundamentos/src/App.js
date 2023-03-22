import './App.css';
import FirstComponent from './components/FirstComponents';
import MyComponent from './components/MyComponent';
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events';

// Abaixo importar o desafio
import Challenge from './components/Challenge'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos Reactjs</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />

      <Challenge />
    </div>
  );
}

export default App;
