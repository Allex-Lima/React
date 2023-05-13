import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 3 - gerenciamento de dados
    // 5 - controlled do input
    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")

    // textarea
    const [bio, setBio] = useState("")

    // select
    const [role, setRole] = useState("")

    const handleName = (e) => {
        e.preventDefault()
        setName(e.target.value);
    }
    // console.log(name);
    // console.log(email);

    // 4 - envio de form através do onSubmit
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("enviando formulário...");
        console.log(name);
        console.log(email);
        console.log(bio);
        console.log(role);

        // 6 - limpando form
        setEmail("")
        setName("")
        setBio("")

    }

    return (
        <div>
            <h2>Formulário</h2>
            {/* 1 - criação de form */}
            {/* 4 - envio de form através do onSubmit */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Digite seu nome"
                        onChange={handleName}
                        value={name}
                    />
                </div>
                {/* 2 - label envolvendo o input */}
                <label>
                    <span>E-mail: </span>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
                        // 4 - alteração de state em inline
                        onChange={(e) => (setEmail(e.target.value))}
                        value={email}
                    />
                </label>
                <label>
                    <span>Biografia</span>
                    <textarea
                        name="bio"
                        placeholder='Descrição do usuário'
                        onChange={(event) => (setBio(event.target.value))}
                        value={bio}
                    >

                    </textarea>
                </label>

                {/* select */}
                <label>
                    <span>Função no sistema</span>
                    <select
                        name="role"
                        onChange={(e) => (setRole(e.target.value))}
                    >
                        <option value="usuário">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="administrador">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
            <p>Name: {name}</p>
            <p>E-mail: {email}</p>
        </div>
    )
}

export default MyForm