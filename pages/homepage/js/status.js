// auth
var requestUser = "alirgoggles";
var requestPass = "apritisesamo";
var authLogin = "Basic " + btoa(requestUser + ":" + requestPass);

$.ajax({
    url: "http://37.59.102.107:8000/server/data",
    type: 'GET',
    dataType: "json",
    timeout: 5000,
    success: serverStatusReceived,
    error: serverStatusError,
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", authLogin);
    }
});

function serverStatusReceived(data) {

    var address = data.address;
    var comments = data.comments;
    var favorited = data.favorited;
    var hostname = data.hostname;
    var is_online = data.is_online;
    var last_check = data.last_check;
    var last_online = data.last_online;
    var location = data.location;
    var map = data.map;
    var maxplayers = data.maxplayers;
    var name = data.name;
    var password = data.password;
    var platform = data.platform;
    var players = data.players;
    var port = data.port;
    var private = data.private;
    var rank = data.rank;
    var score = data.score;
    var uptime = data.uptime;
    var url = data.url;
    var version = data.version;
    var votes = data.votes;

    if (is_online === '1') {

        // Assegnazioni in pagina
        $('.aliruser').text(players);
        $('.alirmaxuser').text(maxplayers);
        $('.aliraddress').text(address);
        $('.alirport').text(port);

        // Assegnazioni modale
        $('#alirservername').text(name);
        $('#alirlastcheck').text(last_check);


    }

    console.log(data);
}

function serverStatusError() {


}
