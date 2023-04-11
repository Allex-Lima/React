import './App.css';
import ManageData from './components/ManageData';

import piramide from './assets/foto.jpg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import DestructuringInProps from './components/DestructuringInProps';

function App() {

  const name = 'Real Madri'

  const pessoas = [
    { titulo: 'Reutilização com Loop', nome: 'Bárbara', idade: 34 ,profissao: 'recepcionista' },
    { titulo: 'Reutilização com Loop', nome: 'Kátia',   idade: 21 ,profissao: 'assistente social' },
    { titulo: 'Reutilização com Loop', nome: 'Bianca',  idade: 26 ,profissao:  'ti' },
    { titulo: 'Reutilização com Loop', nome: 'Paula',   idade: 33 ,profissao:  'professora' },
  ]

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

      {pessoas.map((pessoa => (
        <DestructuringInProps
          titulo={pessoa.titulo}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      )))}


    </div>
  );
}

export default App;
