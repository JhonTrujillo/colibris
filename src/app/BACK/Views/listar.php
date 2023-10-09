<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Listado de contactos</h1>
    <table border="1">
        <thead>
            <tr>
                <td>id</td>
                <td>nombres</td>
                <td>apellidos</td>
                <td>cedula</td>
                <td>email</td>
                <td>usuario</td>
                <td>observaciones</td>
                <td>acciones<td>
            </tr>
        </thead>
        <tbody>
        <?php 
        $cnx = mysqli_connect("localhost","root","","colibris");
        $sql = "SELECT id, nombres, apellidos, cedula, email, usuario, observaciones  FROM contactenos";
        $rta = mysqli_query($cnx, $sql);
        while($mostrar = mysqli_fetch_row($rta)){
            ?>
            <tr>
            <td><?php echo $mostrar['0']?></td>
            <td><?php echo $mostrar['1']?></td>
            <td><?php echo $mostrar['2']?></td>
            <td><?php echo $mostrar['3']?></td>
            <td><?php echo $mostrar['4']?></td>
            <td><?php echo $mostrar['5']?></td>
            <td><?php echo $mostrar['6']?></td>
            <td>
                <a href="">Editar</a>
                <a href="">Eliminar</a>
            </td>
        </tr>
        <?php
        }
        ?>           
        </tbody>
    </table>
</body>
</html>