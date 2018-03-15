var codeKey = 'bcdzrsb2sy4nfdpb3w9g2fk7f5kqre04c2k';

$(document).ready(function () {
    var request = {
        url: 'https://arma3-servers.net/api/?object=servers&element=detail&key={CODE}'.replace('{CODE}', codeKey),
        type: 'GET',
        success: onDataReceived,
        error: onDataError,
        timeout: 1500
    };

    $.ajax(request);

});

function onDataReceived(data) {
    var server = JSON.parse(data);

    $('#alirServerQueryLoading').attr('hidden',true);
    $('#alirServerQuerySuccess').removeAttr('hidden');

    //console.log(data);

    $('#aliraddress').text(server.address);
    $('#alirport').text(server.port);

    if(server.is_online === '1'){
        $('#server_on').removeAttr('disabled');
        $('#server_off').attr('disabled',true);
    }else{
        $('#server_off').removeAttr('disabled');
        $('#server_on').attr('disabled',true);
    }
    $('#alirplayeron').text(server.players);
    $('#alirmaxplayer').text(server.maxplayers);
    $('#alirurlarmaservernet').text(server.url);
}

function onDataError() {
    $('#alirServerQueryLoading').attr('hidden',true);
    $('#alirServerQuerySuccess').attr('hidden',true);
    $('#alirServerQueryError').removeAttr('hidden');
}
