<?php 

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "produtos";


// Cria a conexão
$conn = new mysql($servername, $username, $password, $dbname);

// verifica a conexão
if ($conn->connect_error) {
    die("conexão falhou: " .$conn->connect-error);
}

// verifica ação e executa conforme necessario
$action = $_GET["action"];
?>