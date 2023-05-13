import './App.css';
import MyForm from './components/form/MyForm';

function App() {
  return (
    <div className="App">
      <MyForm user={{name: "Bárbara", email: "barbara@gmail.com"}} />
    </div>
  );
}

export default App;
