<?php
session_start();
$defaultLang = 'fr';
//NO VALID LANG FROM URL
if(!isset($_GET['lang']) || !in_array($_GET['lang'], array('fr','en'))){
    if(isset($_SESSION['lang'])){
        $reloadLang = $_SESSION['lang'];
    }elseif(isset($_COOKIE['lang'])){
        $reloadLang = $_COOKIE['lang'];
    }else{
        $reloadLang = $defaultLang;
    }
    //RELOAD to a VALID url
    $url = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '') . '://' . "{$_SERVER['HTTP_HOST']}";///{$_SERVER['REQUEST_URI']}
    header("Location: $url/$reloadLang");
    exit;
//VALID LANG FROM URL
}else{
    $lang = $_GET['lang'];
    //you could set a cookie here too if req'd
    $_SESSION['lang'] = $lang;
}
//LOAD THE CORRECT LANGUAGE FILE
include("langs/lang.$lang.php");
//echo $lang;
include_once("home.html");
?>
