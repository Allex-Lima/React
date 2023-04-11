const DestructuringInProps = ({ nome, idade, profissao, titulo = 'Titulo Padrão'}) => {
    return (
        <div>
            <h1>{ titulo }</h1>
            <h5>
                <ul>
                    <li>Nome: { nome }</li>
                    <li>Idade: { idade }</li>
                    <li>Profissão: { profissao }</li>
                </ul>
            </h5>

        </div>
    )
}

export default DestructuringInProps