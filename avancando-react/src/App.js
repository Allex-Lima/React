import './App.css';

import Paisagem from './assets/praia_02.jpg'
import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/* imagem em public */}
      <h3>Imagem na diretorio public</h3>
      <img src="/praia_01.jpg" alt="Praia" />
      <div>
        {/* imagem em assets */}
        <h3>Imagem no diretorio assets</h3>
        <img src={ Paisagem } alt="paisagem" />
      </div>

      <ManageData />
    </div>
  );
}

export default App;
