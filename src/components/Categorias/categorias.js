import './categorias.css';

function exibirCategorias(categorias) {
    let elements = document.getElementsByClassName("product");
    let i = 0;
    while(i < elements.length){
        i++;
        console.log(elements[i]);
        if(categorias === elements[i].id){
            elements[i].style = "visibility: visible;";
        }else{
            elements[i].style = "display: none;";
        }
    }
}

function exibirTodos() {
    let elements = document.getElementsByClassName("product");
    let i = 0;
    while(i < elements.length){
        i ++;
        elements[i].style = "display: none;";
        console.log("Funcionando");
    }
}

function teste(){
    console.log("funcao funcionando");
}

function Categorias(){

    return(
        <div className="category">
        <h2>Categorias</h2>
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={exibirTodos}>
                Todos
                <span className="badge badge-primary badge-pill">13</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={exibirCategorias.celular}>
                Celular
                <span className="badge badge-primary badge-pill">4</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={exibirCategorias('notebook')}>
                Notebook
                <span className="badge badge-primary badge-pill">3</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={exibirCategorias('console')}>
                Consoles
                <span className="badge badge-primary badge-pill">3</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center bg-transparent" onClick={exibirCategorias('televisao')}>
                Televisões
                <span className="badge badge-primary badge-pill">3</span>
            </li>
        </ul>
    </div>
    )
}

export default Categorias;