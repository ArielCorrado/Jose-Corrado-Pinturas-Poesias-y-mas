
<?php 
    
    $to = "jarielc2012@yahoo.com.ar, josecorrado@hotmail.com, ariel.corrado27@gmail.com";
    $name = utf8_decode($_POST["name"]);
    $msg = utf8_decode($_POST["msg"]);
    $email = $_POST["email"];
    
    
    $cabecera = "From: " . $name . " <$email>";
    // igual a poner $cabecera = "From: nombre <email@example.com>";
    
        
    $mail = mail($to, $name . " dejo un mensaje en josecorrado.com.ar", $msg, $cabecera);

    if ($mail) {
        //echo "<h4> Mensaje enviado </h4>";
        header("Location: enviado.html");
    }

    

?>



