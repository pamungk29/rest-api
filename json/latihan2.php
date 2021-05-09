<?php

// mengambil data json

$data = file_get_contents('coba.json');
// jika ingin merubah menjadi array tambahkan true di parameter kedua
$mahasiswa = json_decode($data,true);

var_dump($mahasiswa);

echo $mahasiswa[0]["pembimbing"]["pembimbing1"];