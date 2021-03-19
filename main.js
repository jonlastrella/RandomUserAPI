var url = "https://randomuser.me/api/?results=20"

$(document).ready(function(){
    $.get(url, function(res){
        console.log(res);
        var name = "";
        var age = "";
        var email = "";
        var address = "";
        for (var i = 0; i <= 20; i++){
            $(".table").append("<tr>" + "<td>" + res.results[i].name.first + " " + res.results[i].name.last  + "</th>" + "<td>" + res.results[i].dob.age + "</th>" + "<td>" + res.results[i].email + "</th>" + "<td>" + res.results[i].location.street.name + " " + res.results[0].location.city + "," + " " + res.results[i].location.state + " " + res.results[0].location.postcode + "</th>")
        }
        // age += res.results[0].dob.age
        // email += res.results[0].email
        // address += res.results[0].location.street.number
        // address += " " + res.results[0].location.street.name
        // address += " " + res.results[0].location.city + ","
        // address += " " + res.results[0].location.state
        // address += " " + res.results[0].location.postcode
        // $(".name").html(name);
        // $(".age").html(age);
        // $(".email").html(email);
        // $(".address").html(address);
    }, "json");
})