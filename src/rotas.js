import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/Home/homepage.js';
import Produtos from './Pages/PageProdutos/pageprodutos.js';
import Pedidos from './Pages/Pedidos/pedidos.js';
import MeusPedidos from './Pages/Meus_Pedidos/meus_pedidos.js';
import Lojas from './Pages/PageLojas/lojas.js';
import FaleConosco from './Pages/PageFaleConosco/faleconsco.js';

function Rotas(){
    return(
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/meuspedidos" component={MeusPedidos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/faleconosco" component={FaleConosco} />
        </Switch>
    )
}

export default Rotas;