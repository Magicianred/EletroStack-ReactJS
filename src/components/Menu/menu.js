import './menu.css';
import logo from './logo2.png';
import { Link, withRouter } from 'react-router-dom';

function BaseMenu(props){
    const { location } = props;

    return(
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
            <a className="navbar-brand" href="/"><img src={logo} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul activeKey={location.pathname} className="navbar-nav ml-auto">
                <li className="nav-item"><a as={Link} className="nav-link" href="/" to="/">Home</a></li>
                <li className="nav-item"><a as={Link} className="nav-link" href="/produtos" to="/produtos">Produtos</a></li>
                <li className="nav-item"><a as={Link} className="nav-link" href="/meuspedidos" to="/meuspedidos">Meus Pedidos</a></li>
                <li className="nav-item"><a as={Link} className="nav-link" href="/lojas" to="/lojas">Lojas</a></li>
                <li className="nav-item"><a as={Link} className="nav-link" href="/faleconosco" to="/faleconosco">Fale Conosco</a></li>
                </ul>
            </div>
        </nav>
    )
}

const Menu = withRouter(BaseMenu);

export default Menu;