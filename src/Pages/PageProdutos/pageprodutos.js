import { useState, useEffect} from 'react'
import Categorias from '../../components/Categorias/categorias.js';
import './pageprodutos.css';
import { lazy, Suspense } from 'react'
import LazyProdutos from '../../components/Produtos/lazyprodutos/index'


const Produtos = lazy(() => import('../../components/Produtos/index.js'))

export default function PageProdutos(){
    const [ produtos, setProdutos ] = useState([]);
    useEffect(async () => {
        const resposta = await fetch("http://localhost:3001/");
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);

    return(
        <div className="container container-principal">
            <Categorias />
            <div className="container container-product">
                {produtos && produtos.map(item => <Suspense fallback={<LazyProdutos />}><Produtos categoria={item.categoria} imagem={item.nomeimagem} descricao={item.descricao} preco={item.preco} precovenda={item.precovenda} /></Suspense>)}
            </div>
            <div className="clear"></div>
        </div>
    )
}

