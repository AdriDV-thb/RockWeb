<?php
$conn = mysqli_connect("localhost", "root", "", "rockweb");
if($conn -> connect_error) {
    die("Error de conexion");
}
?>