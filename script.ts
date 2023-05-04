const jokeContainer = document.querySelector(".card-title")!;
const btn = document.querySelector(".btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single";


let getJoke = ()=>{
    fetch(url)
    .then(data=>data.json())
    .then(item=>{
        if (jokeContainer !== null) {
            jokeContainer.textContent = `${item.joke}`;
        }        
    });
}

btn?.addEventListener("click",getJoke);