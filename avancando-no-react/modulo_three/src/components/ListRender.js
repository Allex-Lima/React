
const ListRender = () => {

    const nomes = [
        { id: 1234, nome: 'Alex', idade: 35 },
        { id: 563453, nome: 'lex', idade: 45 },
        {id: 4, nome: 'Ale', idade: 33}
    ]

    return (
        <div>
            <ul>
                {nomes.map(({nome, id}) => (
                    <li key={id}>{ nome }</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender