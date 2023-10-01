<?php
class ContactoModelo {


    private $id;
    private $nombres;
    private $apellidos;
    private $cedula;
    private $email;
    private $usuario;
    private $observaciones;

    public function __construct($nombres, $apellidos, $cedula, $email, $usuario, $observaciones )
    {
        $this->nombres = $nombres;
        $this->apellidos = $apellidos;
        $this->cedula = $cedula;
        $this->email = $email;
        $this->usuario = $usuario;
        $this->observaciones = $observaciones;
    }

    public function setID($id)
    {
        $this->id = $id;
    }
   
    public function toArray()
    {
        return [
            "id" => $this->id,
            "nombres" => $this->nombres,
            "apellidos" => $this->apellidos,
            "cedula"=> $this->cedula,
            "email" => $this->email,
            "usuario"=> $this->usuario,
            "observaciones"=> $this->observaciones,
        ]; 
    }
}