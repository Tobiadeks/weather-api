var category = $("#category").val()
$(document).ready(function () {
    var a = Math.random()*10
    $("#quotebutton").click(()=>{
        var url = `https://zenquotes.io/api/random `
        fetch(url,{method:"GET",headers:{'Content-Type':'application/json'}})
        .then((response)=>response.json())
        .then((response)=>{console.log(response)})
        .catch((err)=>console.log(err))
        
     
     })
})