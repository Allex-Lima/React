import './App.css';
import ManageData from './components/ManageData';

import piramide from './assets/foto.jpg'
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import DestructuringInProps from './components/DestructuringInProps';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExcuteFunction from './components/ExeucteFunction';

function App() {

  const name = 'Real Madri'

  const pessoas = [
    { id: 1, titulo: 'Reutilização com Loop', nome: 'Bárbara', idade: 34 ,profissao: 'recepcionista' },
    { id: 2, titulo: 'Reutilização com Loop', nome: 'Kátia',   idade: 21 ,profissao: 'assistente social' },
    { id: 3, titulo: 'Reutilização com Loop', nome: 'Bianca',  idade: 26 ,profissao:  'ti' },
    { id: 4, titulo: 'Reutilização com Loop', nome: 'Paula',   idade: 33 ,profissao:  'professora' },
  ]

  const showMessage = () => {
    console.log('Executa função via Props.')
  }

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
          key={pessoa.id}
          titulo={pessoa.titulo}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissao}
        />
      )))}

      <Fragment FragmentProps='Terceiro Título passado por props' />
      <Container>
        <p>Agora isso e impresso</p>
        <p>Massa, gostei...</p>
      </Container>

      <Container propsChildren='Título passado por props'>
        <p>Conteúdo do segundo Container.</p>
      </Container>

      <ExcuteFunction myFunction={ showMessage } />



    </div>
  );
}

export default App;
