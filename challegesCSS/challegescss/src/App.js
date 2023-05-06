import './App.css';
import MyCars from './component/myCars/MyCars';

function App() {
  const myCars = [
    { id: 1, marca: 'Fiat', cor: 'Azul', ano: 1994},
    { id: 2, marca: 'Gol', cor: 'Branco', ano: 2010},
    { id: 3, marca: 'Golf', cor: 'Prata', ano: 2009 },

  ]
  return (
    <div className="App">
      <h1>Desáfio</h1>
      <div className="car-contanier">
        {myCars.map((car) => (
          <MyCars
            key={car.id}
            car={car}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
