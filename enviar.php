<?php
$captcha = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=6LfkACoTAAAAAO6agDJnA9IupsOG_dU6wc50XjmU&response='.$_POST['g-recaptcha-response'].'&remoteip='.$_SERVER['REMOTE_ADDR']),TRUE);
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$pais = $_POST['pais'];
$telefono = $_POST['telefono'];
$consulta = $_POST['consulta'];

if(!$nombre == '' && !$correo == '' && !$telefono == '' && !$pais == '' && !$provincia == ''  && !$consulta == '' && $captcha['success']=== true){
$correo_admin = "info@spyphonestore.com";
$correo_web = "webmaster@spyphonestore.com";
$titulo = 'Mensaje de : '.$nombre;
$mensaje = '<table width="230" border="0" cellpadding="0" cellspacing="0"><tr><td><div id="campo">Nombre: <strong>'.$nombre.'</strong></div></td></tr><tr><td><div id="campo">Telefono: <strong>'.$telefono.'</strong></div></td></tr><tr><td><div id="campo">pais: <b>'.$pais.'</b></div></td></tr><tr><tr><td><div id="campo">provincia: <b>'.$provincia.'</b></div></td></tr><tr><td><div id="campo">Correo: <b>'.$correo.'</b></div></td></tr><tr><td><div id="campox">Consulta: <b>'.$consulta.'</b></div></td></tr></table>';
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$cabeceras .= 'To: Informes <'.$correo_admin.'>' . "\r\n";
$cabeceras .= 'From: Spyphonestore Web <'.$correo_web.'>' . "\r\n";
$cabeceras .= 'Cc: celularespia@gmail.com' . "\r\n";
mail($correo_admin, $titulo, $mensaje, $cabeceras);
header("Location: indexok.html");
}else{
header("Location: indexbad.html");
exit();	
}
?>