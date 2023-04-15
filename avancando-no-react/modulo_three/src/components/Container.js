const Container = ({children, propsChildren}) => {
    return (
        <>
            <hr></hr>
            <h1>Título 1: Children Props</h1>
            {propsChildren}
            {children}
        </>
    )
}

export default Container