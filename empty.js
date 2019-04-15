function toggleMenu() {
    console.log(event.target.closest(".hamburger"))
    $(".collapse__menu").toggleClass("open-menu");

}

function  showMore(){
    $("#text_block").toggleClass('open');
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