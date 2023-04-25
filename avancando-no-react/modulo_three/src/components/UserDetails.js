const UserDetails = ({idade, nome, profissao}) => {
    return (
        <div>
            <h1>{nome}</h1>
            <p>Idade: {idade} anos</p>
            <p>Profissão: {profissao}</p>
            {idade >= 18 ? (<p>Hapto para ober CNH.</p>) : (<p>Não hapto para obter CNH.</p>)}
        </div>
    )
}

export default UserDetails