import './faleconosco.css';

export default function FaleConosco(){
    return(
        <div className="container">
            <form method="POST" action="meuspedidos.php">
                <h2 className="titulo-pedido">Enviar mensagem</h2>
                <div className="form-group">
                    <label className="text-white" for="nome">Nome</label>
                    <input type="text" className="form-control bg-transparent" name="nome" id="nome" />
                </div>

                <div className="form-group">
                    <label className="text-white" for="nome">Mensagem</label>
                    <textarea type="text" className="form-control bg-transparent" name="nome" id="nome"></textarea>
                </div>

                <button className="btn btn-primary" name="enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}