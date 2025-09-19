const Produtos = () => {
    // Objeto com a lista de pizzas
    const pizzas = [
        'Pizza de Muçarela',
        'Pizza de Calabresa',
        'Pizza Baiana',
        'Pizza de Portuguesa'
    ]
    // Interação da listas de pizza 
    const listaPizzas = pizzas.map (pizza=><li>{pizza}</li>)
    return (
        <div>
            <ul>
                {listaPizzas}
            </ul>
        </div>
    )
}
export default Produtos