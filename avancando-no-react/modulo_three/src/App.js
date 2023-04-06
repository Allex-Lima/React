import './App.css';
import ManageData from './components/ManageData';

import piramide from './assets/foto.jpg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <ListRender />
      {/* imagem no diretório public */}
      <p>Imagem no diretório public</p>
      <img src='/foto1.jpg' alt='foto1' />
      <p>Imagem no diretório assets</p>
      <img src={piramide} alt="piramide" />
      <ManageData />
      <ConditionalRender />




    </div>
  );
}

export default App;
