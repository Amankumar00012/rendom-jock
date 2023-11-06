const jokecontainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,explicit&type=single";

let getjoke = () => {
	fetch(url)
	.then(data => data.json())
	.then(item => {
		console.log(item.joke);
		jokecontainer.textContent = `${item.joke}`;
	});

}
btn.addEventListener("click",getjoke);
getjoke();

