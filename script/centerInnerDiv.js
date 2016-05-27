$(document).ready(function() {
/*Set Header height to full Screen height*/
    setHeaderHeight();
});

/* Resize Event Code */
window.onresize=function(event){
    setHeaderHeight();
}

function setHeaderHeight(){
    var headerHeight=$(window).height();
    $(".main-content").css('height',headerHeight);
    $(".jumbotron").css('position','absolute');
    $(".jumbotron").css('top',headerHeight/2);
}