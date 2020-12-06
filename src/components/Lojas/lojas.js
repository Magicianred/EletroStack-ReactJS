import './lojas.css';

export default function Lojas(){
    return(
        <section className="stores">
            <div className="center">
                <div className="locations">
                    <h3>Rio de Janeiro</h3>
                    <p>Avenida Presidente Vargas, 5000</p>
                    <p>10&ordm; andar</p>
                    <p>Centro</p>
                    <p>(21) 3333 3333</p>
                </div>

                <div className="locations">
                    <h3>São Paulo</h3>
                    <p>Avenida Paulista, 895</p>
                    <p>3&ordm; andar</p>
                    <p>Jardins</p>
                    <p>(11) 4444 4444</p>
                </div>

                <div className="locations">
                    <h3>Santa Catarina</h3>
                    <p>Rua Major &Aacute;vila, 370</p>
                    <p>Vila Mariana</p>
                    <p>(41) 5555 5555</p>
                </div>
            </div>
        </section>
    )
}