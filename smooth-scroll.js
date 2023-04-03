//event pada saat link di klik 
$('.page-scroll').on('click', function(e){

    // ambil isi href
    var tujuan = $(this).attr('href');
    // console.log(href);
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
    // console.log(elementTujuan);

    // pindahkan scroll
    $('html').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1050 , 'easeInOutExpo');

    e.preventDefault();
});