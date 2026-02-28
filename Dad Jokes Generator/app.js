const button = document.querySelector(".btn");
const joke = document.querySelector(".joke");

button.addEventListener("click", getJokes);

function getJokes() {
  const status = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", status)
    .then((response) => response.json())
    .then((res) => {
      joke.innerHTML = res.joke;
      console.log(res.joke);
    });
}
