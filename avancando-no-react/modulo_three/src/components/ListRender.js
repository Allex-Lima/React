import { useState } from "react"

const ListRender = () => {

    const nomes = [
        { id: 1, nome: 'Alex', idade: 35 },
        { id: 27667, nome: 'lex', idade: 45 },
        {id: 324324, nome: 'Ale', idade: 33}
    ]

    const [users, setUsers] = useState([
        { id: 1, name: 'Alex', idade: 45 },
        { id: 2, name: 'lex', idade: 25 },
        { id: 3, name: 'Ale', idade: 15 },
        
    ])
    
    const randomNumber = Math.floor(Math.random() * 4)

    const deleteRandom = () => {
        setUsers((prevUsers) => {
            console.log(randomNumber)
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }

    return (
        <div>
            <ul>
                {nomes.map(({nome, id}) => (
                    <li key={id}>{ nome }</li>
                ))}
            </ul>

            <h1>Deletar usuário</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.idade}
                    </li>
                ))}
            </ul>
            
            <button onClick={deleteRandom}>deletar</button>
        </div>
    )
}

export default ListRender