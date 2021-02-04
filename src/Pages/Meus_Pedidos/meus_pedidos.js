import { useState, useEffect } from 'react';
import MeusPedidos from '../../components/Meus_Pedidos/meus_pedidos.js';
import './meus_pedidos.css';

export default function Meus_Pedidos(){
    const [ pedidos, setPedidos ] = useState([]);
    useEffect(async () => {
        const resposta = await fetch("http://localhost:3001/pedidos");
        const dados = await resposta.json()
        setPedidos(dados);
    }, []);

    return(
        <div className="container">
            {pedidos && pedidos.map(item => <MeusPedidos nome={item.nome} endereco={item.endereco} telefone={item.telefone} produto={item.produto} valor={item.valor} quantidade={item.quantidade} valortotal={item.valortotal} />)}
        </div>
    )
}