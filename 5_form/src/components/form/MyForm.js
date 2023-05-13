import './MyForm.css'

const MyForm = () => {
    return (
        <div>
            <h2>Formulário</h2>
            {/* criação de form */}
            <form>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" placeholder="Digite seu nome"/>
                </div>
                {/* label envolvendo o input */}
                <label>
                    <span>E-mail: </span>
                    <input type="email" name="email" placeholder="Digite seu e-mail"/>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default MyForm