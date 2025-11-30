// -------------------- MOVIES --------------------
let movieTasks = JSON.parse(localStorage.getItem("movieTasks")) || [];

function displayMovies() {
  const taskList = document.getElementById("movie-list");
  taskList.innerHTML = "";

  movieTasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task}</span>`;
    taskList.appendChild(li);
  });
}

document.getElementById("movie-button").addEventListener("click", function () {
  const movieInput = document.getElementById("movie-input-box");

  if (movieInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  movieTasks.push(movieInput.value);
  localStorage.setItem("movieTasks", JSON.stringify(movieTasks));

  movieInput.value = "";
  displayMovies();
});


// -------------------- SERIES --------------------
let seriesTasks = JSON.parse(localStorage.getItem("seriesTasks")) || [];

function displaySeries() {
  const taskList = document.getElementById("series-list");
  taskList.innerHTML = "";

  seriesTasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${task}</span>`;
    taskList.appendChild(li);
  });
}

document.getElementById("series-button").addEventListener("click", function () {
  const seriesInput = document.getElementById("series-input-box");

  if (seriesInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  seriesTasks.push(seriesInput.value);
  localStorage.setItem("seriesTasks", JSON.stringify(seriesTasks));

  seriesInput.value = "";
  displaySeries();
});


// Load saved tasks on page open
displayMovies();
displaySeries();
