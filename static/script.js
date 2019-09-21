const hours = [[13, 19],[15, 19],[15, 19],[],[],[15, 19],[15, 19]];

$(document).ready(function() {

    setInterval(function() {
        var date = new Date();
        if(hours[date.getDay()] != "" && date.getHours() >= hours[date.getDay()][0] && date.getHours() < hours[date.getDay()][1]) {
            $(".open").css("visibility", "visible");
        }
        else {
            $(".open").css("visibility", "hidden");
        }
    }, 1000);
});
