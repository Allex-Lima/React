const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);

        console.log('Ativou o evento');
    }

    const hendleSomething = (x) => {
        if (x) {
            return 'Renderiza isso: true'
        } else {
            return 'Rendesiza aquilo: false'
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click aqui!!!</button>

                
            </div>

            <div>
            <button onClick={() => {
                    console.log('Clicou!!!');
                }}>
                    Click qui também
                </button>
            </div>

            {hendleSomething(true)}
            {hendleSomething(false)}
        </div>
    )
}

export default Events