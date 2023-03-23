import { useState } from 'react'

const ManageData = () => {

    let valor = 10

    console.log(valor);

    const [number, setNumber] = useState(0)
    console.log(number);

    return (
        <div>
            <div>
                <h3>valor: { valor }</h3>
            </div>
            <button onClick={() => (valor = 15)}>mudar variável</button>
            <div>
                <h3>Novo valor: {number}</h3>
                <button onClick={() => setNumber(novoNumber => ++novoNumber)}>Novo Valor</button>
            </div>
        </div>

    )
}

export default ManageData