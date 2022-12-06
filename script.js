$(document).ready(function () {
    $("#button").click(() => {
        var country = $("#inputval").val()
        var Apikey = "7c072fc9c23d57ea065da64bc44af7f0"
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=7c072fc9c23d57ea065da64bc44af7f0`
        fetch(url, { method: "GET" })
            .then((response) => response.json())
            .then((response) => {
                $("#tempvalue").html(response.main.temp - 273),
                $("#country").html(response.name),
                $("#sunrise").text(new Date(response.sys.sunrise).toLocaleTimeString())
                $("#sunset").text(new Date(response.sys.sunset).toLocaleTimeString())
                $("#desc").text(response.weather[0].description)
            })
            .catch((err) => console.log(err))


    })
})
