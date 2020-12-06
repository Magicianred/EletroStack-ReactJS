export default function MeusPedidos(props){
    return(
        <table className="table table-dark table-striped table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Produto</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Quantidade</th>
                    <th scope="col">Valor Total</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>{props.nome}</td>
                    <td>{props.endereco}</td>
                    <td>{props.telefone}</td>
                    <td>{props.produto}</td>
                    <td>{props.valor}</td>
                    <td>{props.quantidade}</td>
                    <td>{props.valortotal}</td>
                </tr>
            </tbody>
        </table>
    )
}