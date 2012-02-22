<?php
/**
 * Created by IntelliJ IDEA.
 * User: francho
 * Date: 16/02/12
 * Time: 12:42
 * To change this template use File | Settings | File Templates.
 */


$data = json_decode($_POST['articulos']);

// guardar y generar un id....
$data->id = rand(1,1000);

//

echo json_encode(array(
   "success" => true,
   'articulos' =>$data
));