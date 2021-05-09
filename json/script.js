// dari object ke json
const mahasiswa = {
    nama : "Nova Ariyanto",
    nrp : "A111710263",
    email: "novaari20@gmail.com"
}

console.log(JSON.stringify(mahasiswa));

// dari json ke object dengan ajax (vanilla javascript)
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

// xhr.open('GET','coba.json',true); //secara asyncronus tambahkan true
// xhr.send();

// menggunakan jquery
$.getJSON('coba.json', function(data){
    console.log(data);
})