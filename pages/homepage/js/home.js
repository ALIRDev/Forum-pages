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

// https://www.alir.eu/rss/3-annunci.xml/?member_id=3&key=0f5abb991d35355a3cc5b4f009c844e0
// https://www.alir.eu/rss/4-patch-development.xml/?member_id=3&key=0f5abb991d35355a3cc5b4f009c844e0

function createByFeedTopic() {

    $(document).ready(function() {
        //feed to parse
        var feed = "https://cors-anywhere.herokuapp.com/https://www.alir.eu/rss/4-patch-development.xml/?member_id=3&key=0f5abb991d35355a3cc5b4f009c844e0";

        $.ajax(feed, {
            accepts:{
                xml:"application/rss+xml"
            },
            dataType:"xml",
            success:function(data) {
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

function createFeedAnnunci() {

    $(document).ready(function() {
        //feed to parse
        var feed = "https://cors-anywhere.herokuapp.com/https://www.alir.eu/rss/3-annunci.xml/?member_id=3&key=0f5abb991d35355a3cc5b4f009c844e0";

        $.ajax(feed, {
            accepts:{
                xml:"application/rss+xml"
            },
            dataType:"xml",
            success:function(data) {
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
createFeedAnnunci();
