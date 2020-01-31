$(document).ready(function(){

    // City select for current weather
    $("#submit").on("click", function() {

        var input = $("#city").val();

        var api ='http://api.openweathermap.org/data/2.5/weather?q=' + input;

        var apiKey= '&APPID=7095ec8e31a74b95b15835701569f969';

        $.ajax({

            url: "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&units=imperial" + apiKey,
            type:"GET",
            dataType:"jsonp",
            success: function(data){
                var widget = show(data);

                $("#forecast").html(widget);

                $("#city").val('');
            }

        });

        
    });

    //Stores input in Local Storage
    let data = {
        input: "#cityId"
    };


    localStorage.setItem("data", data);
    console.log(localStorage);

});

function show(data){
    return "<h2>Current Weather for " + data.name + ", " + data.sys.country +"</h2>" +
           "<h3>Description: <img src='http://openweathermap.org/img/w/"+ data.weather[0].icon+".png'> "+ data.weather[0].description +"</h3>" +
           "<h3>Weather:"+ data.weather[0].main +"</h3>" +
           "<h3>Temperature (F):"+ data.main.temp +"&deg;F</h3>" +
           "<h3>Humidity:"+ data.main.humidity +"%</h3>" +
           "<h3>Wind Speed:"+ data.wind.speed +"MPH</h3>";

}