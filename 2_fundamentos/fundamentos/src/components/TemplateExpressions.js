import MyComponent from "./MyComponent"


const TemplateExpressions = () => {

    const name = 'Alex'
    return (
        <div>
            <p>Olá {name} tudo bem?</p>
            <MyComponent />
        </div>
    )
}

export default TemplateExpressions