import './Produto.css';
import { Link } from 'react-router-dom';

export default function Produto(props){
    return(
        <div className="product card card-body" id={props.categoria}>
            <div className="container img-product"><img className="card-img-top" src={require(`../${props.imagem}`).default} alt="Galaxy S10" title="Galaxy S10" /></div>

            <div className="title-product">
                <p className="card-text"> {props.descricao} </p>
            </div>

            <div className="price-product">
                <h3 className="canceled">R$ {props.preco} </h3>
                <h2>R$ {props.precovenda} </h2>
            </div>

            <div className="button-buy">
                <a className="buy btn btn-block text-white" as={Link} href="/pedidos" to="/pedidos">Comprar</a>
            </div>
        </div>
    )
}