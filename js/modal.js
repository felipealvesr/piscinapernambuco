$(document).ready(function (e, d) {
    $('.btn_modal').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $('.box-modal-load').load("modal.html " + url);
        $('#modal').fadeIn(500);
    });
    
});
$('#modal, .fechar').click(function (e) {
    if (e.target !== this)
        return;
    $('#modal').fadeOut(500);
});

$(document).ready(function (e, d) {
    $('.btn_modal_icons').click(function (e) {
        e.preventDefault();
        var url = $(this).attr('href');
        $('.box-modal-load-icons').load("modal.html " + url);
        $('#modal-icons').fadeIn(500);
    });
});

$('#modal-icons, .fechar').click(function (e) {
    if (e.target !== this)
        return;
    $('#modal-icons').fadeOut(500);
});