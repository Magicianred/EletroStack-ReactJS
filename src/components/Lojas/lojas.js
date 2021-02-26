import './lojas.css';

export default function Lojas(props){
    return(
        <div className="locations">
            <h3>{props.titulo}</h3>
            <p>{props.rua}</p>
            <p>{props.andar}</p>
            <p>{props.local}</p>
            <p>{props.telefone}</p>
        </div>
    )
}