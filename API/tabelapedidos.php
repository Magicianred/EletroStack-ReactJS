<?php

require_once("db-connectapi.php");

$result = query("select * from cliente inner join pedidos on cliente.id_cliente = pedidos.id_cliente;");
$pedidos = [];

while($row = mysqli_fetch_assoc($result)){
    $pedidos[] = $row;
}

header("Access-Control-Allow-Origin:*");
echo json_encode($pedidos);

?>