
const topics = ["batman", "spider-man", "x-men"];

for (let i = 0; i < topics.length; i++) {
    const a = $("<button>");
    a.text(topics[i]);
    $("#gifArea").append(a);
}