$(document).ready(function () {
    $("#quotebutton").click(()=>{
        var url = `https://zenquotes.io/api/quotes/[your_key]`
        fetch(url, {method:"GET"})
        .then((response)=>response.json())
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err))
        
     
     })
})