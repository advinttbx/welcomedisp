var initial

$(document).ready(function() {
    initial = true;
    setInterval(function() {
        invert();
        
    }, 3600000); //change this value to change how often the colors invert
});

function invert() {
    $('*').each(function() {
        if(initial) {
            $(this).css("filter", "invert(100%)");
        }
        else {
            $(this).css("filter", "invert(0%)");
        }
    });
    if (initial) {
        $("body").css("background","black");
    }
    else {
        $("body").css("background","white");
    }
    initial = !initial;
}

