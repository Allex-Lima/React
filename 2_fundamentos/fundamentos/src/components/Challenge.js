const Challenge = () => {

    const n1 = 6
    const n2 = 8
    let soma 
    const eventClick = () => {
        soma = n1 + n2
        console.log(soma);
        return soma
    }

    return (
        <div>
            <h1>Desafio da aula</h1>
            <p>Valor n1: {n1}</p>
            <p>Valor n2: {n2}</p>
            
            <button onClick = {eventClick}>Click aqui</button>
        </div>
    )
}

export default Challenge