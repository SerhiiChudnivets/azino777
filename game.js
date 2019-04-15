function  showMore(){
    $("#text_block").toggleClass('open');
}

function toggleMenu() {
    $(".collapse__menu").toggleClass("open-menu");
}
$('body').on('click', function () {
    let elem= event.target.closest(".menu__item");
    if (elem){
        $(elem).find(".drop__menu").addClass("dropdown");
    }
    else{
        $(".drop__menu").removeClass("dropdown");
    }
} );