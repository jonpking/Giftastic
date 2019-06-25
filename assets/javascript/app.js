
// array of search strings
const topics = ["batman", "spider-man", "x-men"];

// creates a button on the page for each item in the topics array
function createButtons() {

    $("buttonArea").empty();
    for (let i = 0; i < topics.length; i++) {
        const a = $("<button>");
        a.text(topics[i]);
        $("#buttonArea").append(a);
    }
};

// click button to grab 10 static, non-animated gifs from api and place them on page

// click a gif and it animates, click again and it stops

// under each gif, display rating

// input box to add new buttons to topics array and remakes the buttons on the page