import './App.css';
import ManageData from './components/ManageData';

import piramide from './assets/foto.jpg'

function App() {
  return (
    <div className="App">
      {/* imagem no diretório public */}
      <p>Imagem no diretório public</p>
      <img src='/foto1.jpg' alt='foto1' />
      <p>Imagem no diretório assets</p>
      <img src={piramide} alt="piramide" />
      <ManageData />
    </div>
  );
}

export default App;
