<?php
// merubah array menjadi json
// $mahasiswa = [
//     "nama" => "Nova Ariyanto",
//     "nrp" => "A111710263",
//     "email" => "novaari20@gmail.com"
// ];

// $data = json_encode($mahasiswa);

// echo $data;

// mengambil data dari database dan dirubah menjadi json
$dbh = new PDO('mysql:host=localhost;dbname=phpmvc','root','');
$db = $dbh->prepare('select * from mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

$data = json_encode($mahasiswa);

echo $data;