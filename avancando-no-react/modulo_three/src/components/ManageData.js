import { useState } from 'react'

const ManageData = () => {

    const [valor, setValor] = useState(13)
    const [qtdProdutos, setQtdProdutos] = useState(0)

    return (
        <div>
            <h1>Manage Data</h1>

            <p>valor: {valor}</p>
            <button onClick={() => setValor(novoValor => ++novoValor)}>Mudar valor</button>
            <h4>Quantidade: {qtdProdutos}</h4>

            <button className='mais' onClick={() => setQtdProdutos(somaProdutos => ++somaProdutos)}>
                +
            </button>
            <button
                className='mais'
                onClick={() => setQtdProdutos(novoValor => --novoValor)}
            >
                -
            </button>
        </div>
    )
}

export default ManageData