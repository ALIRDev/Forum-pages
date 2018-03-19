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

// https://alir.eu/api/forums/topics?key=a0d79d24019ae8e0c12af0c34e6ce57f&forums=112&sortBy=date&sortDir=desc
// Ottengo gli annunci pubblicati dal più recente

$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://alir.eu/api/forums/topics?key=a0d79d24019ae8e0c12af0c34e6ce57f&forums=112&sortBy=date&sortDir=desc",
    type: 'GET',
    dataType: "json",
    timeout: 5000
}).done(function (data) {
    console.log(data)
});

// https://alir.eu/api/forums/topics?key=10f9dfa58c23a1ab511fc2478672ebef&sortBy=date

// Tentativo all topic by date
// Ingloba post di sezioni archiviate e admin vanno selezionate le sezioni per pulire le aree

// https://www.alir.eu/rss/3-annunci.xml/?member_id=3&key=0f5abb991d35355a3cc5b4f009c844e0
// https://www.alir.eu/rss/4-patch-development.xml/?member_id=3&key=0f5abb991d35355a3cc5b4f009c844e0

function createByFeedTopic() {

    $(document).ready(function () {
        //feed to parse
        var feed = "https://cors-anywhere.herokuapp.com/https://www.alir.eu/rss/4-patch-development.xml/?member_id=3&key=0f5abb991d35355a3cc5b4f009c844e0";

        $.ajax(feed, {
            accepts: {
                xml: "application/rss+xml"
            },
            dataType: "xml",
            success: function (data) {
                //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

                $(data).find("item").each(function () { // or "item" or whatever suits your feed
                    var el = $(this);
                    console.log("------------------------");
                    console.log("title      : " + el.find("title").text());
                    console.log("link       : " + el.find("link").text());
                    //console.log("description: " + el.find("description").text());
                });

                console.log($(data).find("item"));

            }
        });

    });

}

//createByFeedTopic();
//10f9dfa58c23a1ab511fc2478672ebef

// get /forums/topics?key=a0d79d24019ae8e0c12af0c34e6ce57f

function createFeedAnnunci() {

    $(document).ready(function () {
        //feed to parse
        var feed = "https://cors-anywhere.herokuapp.com/https://www.alir.eu/rss/3-annunci.xml/?member_id=3&key=0f5abb991d35355a3cc5b4f009c844e0";

        $.ajax(feed, {
            accepts: {
                xml: "application/rss+xml"
            },
            dataType: "xml",
            success: function (data) {
                //Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

                $(data).find("item").each(function () { // or "item" or whatever suits your feed
                    var el = $(this);
                    console.log("------------------------");
                    console.log("title      : " + el.find("title").text());
                    console.log("link       : " + el.find("link").text());
                    //console.log("description: " + el.find("description").text());
                });
            }
        });

    });

}

//createFeedAnnunci();
