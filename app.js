
$(document).ready(function(){
    $(".menubox").click(function(){
        $(".slide").toggleClass("move")
    })
}
)
$(document).ready(function(){
    $(".stickybutton").click(function(){
        $(".contactus").toggleClass("forms")
    })
}
)
function rotate(){
    $(".menuicon").toggleClass("rotating")
}