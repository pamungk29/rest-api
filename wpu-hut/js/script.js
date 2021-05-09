function tampilMenu(){
    $.getJSON('data/pizza.json', function(data){
        // untuk menghilangkan key menu
        let menu = data.menu;
        // perulangan di jquery, looping terhadap object
        $.each(menu, function(i, data){
            $('#menu').append('<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/'+ data.gambar +'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}

tampilMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategories = $(this).html();
    // console.log(kategories);
    $('h1').html(kategories);

    if (kategories == 'All Menu'){
        tampilMenu();
        return;
    }

    $.getJSON('data/pizza.json', function(data){
        let menus = data.menu;
        // console.log(menus)
        let content = '';

        $.each(menus, function(i, data){
            if (data.kategori == kategories.toLowerCase()){
                content = content + tampilMenu();
                // console.log(content);
            }
        });
        $('#menu').html(content);
    });
});