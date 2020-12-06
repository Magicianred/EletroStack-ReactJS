import { useState, useEffect } from 'react';
import Produto from '../../components/Produtos/Produto/index.js';
import './produtos.css';

export default function Produtos(){
    const [ produtos, setProdutos ] = useState([]);
    useEffect(async () => {
        const resposta = await fetch("http://localhost/API/produtosapi.php");
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);

    return(
        <div className="container container-product">
            {produtos && produtos.map(item => <Produto categoria={item.categoria} imagem={item.nomeimagem} descricao={item.descricao} preco={item.preco} precovenda={item.precovenda} /> ) }
        </div>
    )
}