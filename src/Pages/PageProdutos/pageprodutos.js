import Categorias from '../../components/Categorias/categorias.js';
import Produtos from '../../components/Produtos/produtos.js';
import './pageprodutos.css';

export default function PageProdutos(){
    return(
        <div className="container container-principal">
            <Categorias />
            <Produtos />
            <div className="clear"></div>
        </div>
    )
}