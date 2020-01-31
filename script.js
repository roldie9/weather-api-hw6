$(document).ready(function(){

    var weather;
    var api ='http://api.openweathermap.org/data/2.5/weather?q=';
    var apiKey= '&APPID=7095ec8e31a74b95b15835701569f969';

    var input = $("#city").val();


    $.ajax({

        url: "http://api.openweathermap.org/data/2.5/weather?q=" + input + apiKey,
        type:"GET",
        dataType:"jsonp",
        success: function(data){
            console.log(data)
        }


    })

    function setup() {
        createCanvas(200,200);
        var button = select('#submit');
        button.mousePressed(weatherRequest);

        input = select('#city');
    }


    function weatherRequest() {
        var url = api + input.value() + apiKey;
        loadJSON('url, gotData');
    }

    function gotData(data) {
        //println(data);
        weather = data;
    }

    //Stores input in Local Storage
    let data = {
        temp: "67",
        humidity: "46%",
        uvi: "LOW"
    };



    localStorage.setItem("data", data);
    console.log(localStorage);

});