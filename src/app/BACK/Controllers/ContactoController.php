<?php
include "../Modelos/ContactoModelo.php";
class ContactoController {

    public function guardar(array $informacion)
    {

        //validacion
        if(empty($informacion["observaciones"])) {
             return $this->responderComoJSON(
                 [
                "mensaje_error" => "Hace falta su observacion"              
                 ]
                 ,400); 
         }
    

        $contactoModelo = new ContactoModelo(
            $informacion['nombres'],
            $informacion['apellidos'],
            $informacion['cedula'],
            $informacion['email'],
            $informacion['usuario'],
            $informacion['observaciones'],
        );

        $contactoModeloCreadoEnDB = $this->guardarEnDB($contactoModelo);
        
        return $this->responderComoJSON([
                "mensaje" => "El contacto fue guardado con exito",
                "contacto" => $contactoModeloCreadoEnDB->toArray()
        ]);
        
    }

    private function responderComoJSON(array $dataResponder, $statusCode = 200)
    {
        header('Content-Type: application/json');
        http_response_code($statusCode);
        echo json_encode($dataResponder);
    }

    private function guardarEnDB(ContactoModelo $contactoModelo)
    {
        $conexion = new PDO('mysql:host=127.0.0.1;dbname=colibris','root','');
        
        $queryIn = "INSERT INTO contactenos (nombres,apellidos,cedula,email,usuario,observaciones) VALUES (:nombres,:apellidos,:cedula,:email,:usuario,:observaciones)";

        $smt = $conexion->prepare($queryIn);

        $smt->bindParam(':nombres',$contactoModelo->nombres);
        $smt->bindParam(':apellidos',$contactoModelo->apellidos);
        $smt->bindParam(':cedula',$contactoModelo->cedula);
        $smt->bindParam(':email',$contactoModelo->email);
        $smt->bindParam(':usuario',$contactoModelo->usuario);
        $smt->bindParam(':observaciones',$contactoModelo->observaciones);
        $smt->execute();

        $idCreadoDB = $conexion->lastInsertId();
        $contactoModelo->setID($idCreadoDB);
        return $contactoModelo;

        // api sin base de datos
        // $id = random_int(1,1000);
        // $contactoModelo->setID($id);
        // $contactoArray = $contactoModelo->toArray();
        // $contactosJSON = json_encode($contactoArray);
        // file_put_contents("../db/db.json",$contactosJSON);        
        // return $contactoModelo;
    }
//     public function listar(){
//     $conexion = new PDO('mysql:host=127.0.0.1;dbname=colibris','root','');
//     $queryList = "SELECT * FROM contactenos";

//     $smt = $conexion->prepare($query);

//     $smt->execute();

//         $contactenos = $smt->fetchAll();
//         $contactenos = [];
//         foreach($contactenos as $contactenos){         
//              $contactenos = new contactenos();
//              $contactenos->SetId($contactenos['id']);
//              $contactenos->Setnombres($contactenos['nombres']);
//              $contactenos->Setapellidos($contactenos['apellidos']);
//              $contactenos->Setemail($contactenos['email']);
//              $contactenos->Setusuario($contactenos['usuario']);
//              $contactenos->Setobservaciones($contactenos['observaciones']);
//              $contactenos[] = $contactenos;
//     }
//    }

    // include __DIR__ . "/../Views/listar.php";
}
