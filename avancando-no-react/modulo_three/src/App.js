import './App.css';
import ManageData from './components/ManageData';

import piramide from './assets/foto.jpg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import DestructuringInProps from './components/DestructuringInProps';

function App() {

  const name = 'Real Madri'

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
      <ShowUserName nome='Alexandro' />
      <ShowUserName nome={name} />
      <DestructuringInProps titulo='Desestruturação em props' nome='Arthur' idade={25} profissao={'Desenvolvedor'} />
      {/* Reutilização de componente DestructuringInProps */}
      <DestructuringInProps titulo='Reutilização de Componentes' nome='júlia' idade={12} profissao='Estudante' />
      <DestructuringInProps nome='Brown' idade={55} profissao='Escritor' />


    </div>
  );
}

export default App;
