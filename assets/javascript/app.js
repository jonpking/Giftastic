
// array of search strings
const topics = ["batman", "spider-man", "x-men"];

// creates a button on the page for each item in the topics array
function createButtons() {
    $("buttonArea").empty();
    for (let i = 0; i < topics.length; i++) {
        const a = $("<button>");
        a.text(topics[i]);
        a.attr("data-name", topics[i]);
        a.addClass("topicButton");
        $("#buttonArea").append(a);
    }
};

// uses ajax call to pull gifs from giphy api and displays them, along with their ratings, to the page
function getApiInfo() {
    const comic = $(this).attr("data-name");
    const queryURL = "http://api.giphy.com/v1/gifs/search?api_key=W5rOVNC5OWIuMkDJ3o5vDoDBxFuqcCv7&limit=10&q=" + comic;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
            const comicDiv = $("<div class='comic'>");
            const gifStill = response.data[i].images.fixed_height_still.url;
            const gifAnimate = response.data[i].images.fixed_height.url;
            const gifImage = $("<img>").attr("src", gifStill).attr("class", "gif").attr("data-state", "still").attr("data-still", gifStill).attr("data-animate", gifAnimate);
            comicDiv.append(gifImage);
            const rating = response.data[i].images.rating;
            const ratingText = $("<p>").text("Rating: " + rating);
            comicDiv.append(ratingText);
            $("#gifArea").prepend(comicDiv);
        }
    });
}

// click a gif and it animates, click again and it stops
function animateGif() {
    const state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
};

// input box to add new buttons to topics array and remakes the buttons on the page

$(document).on("click", ".gif", animateGif);
$(document).on("click", ".topicButton", getApiInfo);
createButtons();