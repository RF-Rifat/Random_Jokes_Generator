var jokeContainer = document.querySelector(".card-title");
var btn = document.querySelector(".btn");
var url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single";
var getJoke = function () {
    fetch(url)
        .then(function (data) { return data.json(); })
        .then(function (item) {
        if (jokeContainer !== null) {
            jokeContainer.textContent = "".concat(item.joke);
        }
    });
};
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", getJoke);
