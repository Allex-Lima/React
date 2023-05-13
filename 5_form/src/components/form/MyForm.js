import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

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
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
            <p>Name: {name}</p>
            <p>E-mail: {email}</p>
        </div>
    )
}

export default MyForm