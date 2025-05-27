<?php
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "rockWeb";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn -> connect_error) {
    die("Error de conexión");
}

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$banda_favorita = $_POST['banda-favorita'];
$cancion_favorita = $_POST['cancion-favorita'];
$genero = $_POST['genero'];
$comentarios = $_POST['comentarios'];

$sql = "INSERT INTO formulario
        (nombre, email, banda_favorita, cancion_favorita, genero, comentarios)
        VALUES ('$nombre', '$email', '$banda_favorita',
                '$cancion_favorita', '$genero', '$comentarios')";

$conn -> query($sql);  
$conn -> close();

header('Location: ../sub-pages/sobre-ti.html');
exit;
?>
