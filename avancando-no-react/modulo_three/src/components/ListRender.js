
const ListRender = () => {

    const nomes = ['Alex', 'Kátia', 'Bárbara', 'João']

    return (
        <div>
            <ul>
                {nomes.map((nome, indice) => (
                    <li key={indice}>{ nome }</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender