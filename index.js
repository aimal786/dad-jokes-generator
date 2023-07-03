const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "piuzLw4I6TN9ct9JBkw4wA==8nCvbiPJrZoJCIsY";

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
async function getJoke(){
    try {
        jokeEl.innerText = "Updating . . .";
        btnEl.ariaDisabled = true;
        btnEl.innerText = "Loading. ....";
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerText = data[0].joke;
    }
    catch(error){
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        jokeEl.innerText = "An error happened, Try again later";
        console.log(error);
    }
}

 btnEl.addEventListener("click", getJoke);



 