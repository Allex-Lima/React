import { useState } from "react"

const ConditionalRender = () => {

const [x, setX] = useState(true)

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim</p>}

            <h1>Adicionando um else</h1>
            <p>Operador ternário</p>
            {x === true ? (<p>TRUE</p>) : (<p>FALSE</p>)} 
            <button onClick={() => setX(!x)}>{x === true ? (<p>TRUE</p>) : (<p>FALSE</p>)}</button>
        </div>
    )
}

export default ConditionalRender