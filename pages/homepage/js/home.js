console.log("Avvio ALIRHome, utilizzare la console solo per scopi di sviluppo, non trasmettere i propri dati personali o bancari!");

// Abilito i tooltip ovunque
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
// scroll body to 0px on click
$('#backtop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

moment.locale('it');

function generateNews() {

    var serverKey = "10f9dfa58c23a1ab511fc2478672ebef";

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://alir.eu/api/forums/topics?key=" + serverKey + "&forums=40,116,153&sortDir=desc&hidden=0",
        type: 'GET',
        dataType: "json",
        timeout: 5000
    }).done(function (data) {

        var result = data.results;
        var cutData = result.slice(0, 14);
        appendArticles(cutData);

    });

}

function appendArticles(data) {

    for (var i = 0; i < data.length; i++) {

        var forum = data[i].forum.name;
        var topicTitle = data[i].title;
        var post = data[i].posts;
        var topicUrl = data[i].url;
        var views = data[i].views;
        var author = data[i].firstPost.author.name;
        var authorProfileUrl = data[i].firstPost.author.profileUrl;
        var content = data[i].firstPost.content;
        var firstDate = data[i].firstPost.date;

        var date = moment(firstDate).fromNow();

        var element = "<div class='col-md-6' style='overflow: hidden;'>" +
            "<div class='card flex-md-row mb-4 box-shadow h-md-250' style='overflow: hidden;'> " +
            "<div class='card-body d-flex flex-column align-items-start' style='overflow: hidden;'> " +
            "<strong class='d-inline-block mb-2 text-primary' style='font-size: small'>" + forum + "</strong> " +
            "<h3 style='font-size: x-large; white-space: nowrap; overflow: hidden; width: 370px; text-overflow: ellipsis;' class='mb-0' title='Continua a leggere...'> <a href='" + topicUrl + "' class='wstitle'>" + topicTitle + "</a></h3> " +
            "<div class='mb-1 text-muted'>Scritto " + date + " da <a title='Visualizza il profilo utente' href='" + authorProfileUrl + "'>" + author + "</a></div> " +
            "<div class='mb-1'><i title='Visualizzazioni' class='fas fa-eye'></i> " + views + " <i title='Risposte' class='fas fa-comments '></i> " + post + " </div></div> " +
            "</div>" +
            "</div>";

        $('#appendResultHere').append(element);

        // Parse context to string
        //var contentToText = content.replace(/<[^>]*>/g, '');
        //var contentParsed = contentToText.substring(0,200);

    }

    $('#loadPost').attr('hidden',true);

}

$(document).ready(function () {
    generateNews();
});

// https://alir.eu/api/forums/topics?key=a0d79d24019ae8e0c12af0c34e6ce57f&forums=112&sortBy=date&sortDir=desc
// Ottengo gli annunci pubblicati dal più recente

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://alir.eu/api/forums/topics?key=a0d79d24019ae8e0c12af0c34e6ce57f&forums=112&sortBy=date&sortDir=desc",
    type: 'GET',
    dataType: "json",
    timeout: 5000
}).done(function (data) {
    //console.log(data)
});

// https://alir.eu/api/forums/topics?key=10f9dfa58c23a1ab511fc2478672ebef&forums=40,116,153&sortDir=desc&hidden=0

// https://alir.eu/api/forums/topics?key=10f9dfa58c23a1ab511fc2478672ebef&sortBy=date

// Tentativo all topic by date
// Ingloba post di sezioni archiviate e admin vanno selezionate le sezioni per pulire le aree

//10f9dfa58c23a1ab511fc2478672ebef
