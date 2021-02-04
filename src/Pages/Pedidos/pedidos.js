import './pedidos.css';
import {useState} from 'react';

export default function Pedidos(){
    const [form, setForm] = useState({
        nome: "",
        endereco: "",
        telefone: "",
        produto: "",
        preco: "",
        quantidade: "",
        total: ""
    });

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        const preco_final = parseFloat(form.preco) * parseFloat(form.quantidade);
        document.getElementById("total").value = `R$ ${preco_final}`;

        setForm({
            ...form,
            preco_final: preco_final
        })

        const json = JSON.stringify(form);
        const opcoes = {
            crossDomain: true,
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        }
        const resposta = await fetch("http://localhost/API/cadastro-pedido.php", opcoes);
        const dados = await resposta.json()
        console.log(dados);
    }

    return(
        <form onSubmit={controleEnvio}>
            <h2 className="titulo-pedido">Faça sua compra</h2>
            <div className="form-group">
                <label className="text-white" for="nome">Nome</label>
                <input type="text" className="form-control bg-transparent" name="nome" id="nome"  onChange={controleMudanca} value={form.nome}/>
            </div>

            <div className="form-group">
                <label className="text-white" for="endereco">Endereço</label>
                <input type="text" className="form-control bg-transparent" name="endereco" id="endereco"  onChange={controleMudanca} value={form.endereco}/>
            </div>

            <div className="form-group">
                <label className="text-white" for="telefone">Telefone</label>
                <input type="text" className="form-control bg-transparent" name="telefone" id="telefone"  onChange={controleMudanca} value={form.telefone}/>
            </div>
            <div className="form-group">
                <label for="produto" className="text-white">Produto</label>
                <input type="text" className="form-control bg-transparent" name="produto" id="produto"  onChange={controleMudanca} value={form.produto}/>
            </div>

            <div className="form-group">
                <label className="text-white" for="preco">Preço R$</label>
                <input type="text" className="form-control bg-transparent" name="preco" id="preco"  onChange={controleMudanca} value={form.preco}/>
            </div>

            <div className="form-group">
                <label className="text-white" for="quantidade">Quantidade</label>
                <input type="text" className="form-control bg-transparent" name="quantidade" id="quantidade"  onChange={controleMudanca} value={form.quantidade}/>
            </div>

            <div className="form-group">
                <label className="text-white" for="total">Valor Total</label>
                <input type="text" className="form-control bg-transparent" name="total" id="total"  value={form.total}/>
            </div>

            <button className="btn btn-primary" name="enviar" type="submit">Enviar</button>
            <a href="/produtos" className="btn btn-danger">Cancelar</a>
        </form>
    )
}