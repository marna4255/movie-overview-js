class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    (this.title = title),
      (this.director = director),
      (this.genre = genre),
      (this.releaseYear = releaseYear),
      (this.rating = rating);
  }
  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director}, was released in ${this.releaseYear}. It received a rating of ${this.rating}.`;
  }
}

//Create movie instances
const movies = [
  new Movie(
    "Inception",
    "Christopher Nolan",
    "Science Fiction, Action",
    2010,
    "8.8/10"
  ),
  new Movie(
    "The Grand Budapest Hotel",
    "Wes Anderson",
    "Comedy, Drama",
    2014,
    "8.1/10"
  ),
  new Movie("Parasite", "Bong Joon-ho", "Thriller, Drama", 2019, "8.5/10"),
];

// Get the container element using querySelector
const movieContainer = document.querySelector("#movie-container");

movies.forEach((movie) => {
  const paragraph = document.createElement("p"); //Create a new paragraph
  paragraph.textContent = movie.getOverview(); //Set the text content
  movieContainer.appendChild(paragraph); //Append the paragraph to the container
});
