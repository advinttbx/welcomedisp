const hours = [[13, 19],[15, 19],[15, 19],[],[],[15, 19],[15, 19]];

$(document).ready(function() {

    setInterval(function() {
        const date = new Date();
        let isWithinOpenHours = false;
        if (hours[date.getDay()] != "") {
            isWithinOpenHours = 
                date.getHours() >= hours[date.getDay()][0] &&
                date.getHours() < hours[date.getDay()][1];
        }
        if (isWithinOpenHours) {
            $(".open").show();
            $(".closed").hide();
        }
        else {
            $(".open").hide();
            $(".closed").show();
        }
    }, 1000);
    

});
