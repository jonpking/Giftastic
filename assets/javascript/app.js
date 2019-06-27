
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

// ajax call
function getApiInfo() {
    const comic = $(this).attr("data-name");
    const queryURL = "http://api.giphy.com/v1/gifs/search?api_key=W5rOVNC5OWIuMkDJ3o5vDoDBxFuqcCv7&limit=10&q=" + comic;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        for (let i = 0; i < response.data.length; i++){
        const comicDiv = $("<div class='comic'>");
        const gifImage = response.data[i].images.fixed_height_still.url;
        const itemOne = $("<img>").attr("src", gifImage);
        comicDiv.append(itemOne);
        const rating = response.data[i].images.rating;
        const itemTwo = $("<p>").text("Rating: " + rating);
        comicDiv.append(itemTwo);

        $("#gifArea").prepend(comicDiv);
        }
    });
}

// click button to grab 10 static, non-animated gifs from api and place them on page

// click a gif and it animates, click again and it stops

// under each gif, display rating

// input box to add new buttons to topics array and remakes the buttons on the page

$(document).on("click", ".topicButton", getApiInfo); 
createButtons();