let dict = [
        {
            name: "Umamusume - Cinderella Gray",
            imagePath: "images/movie-img/umamusume.jpg",
            year: 2026,
            description: 'Tokyo is the home of national-level horse girls and the next generation of running prodigies. Jou Kitahara, a rookie trainer with big dreams and modest expectations, does not expect to find talent in the quiet town of Kasamatsu—until he meets an ash-gray-haired girl with a wild, unconventional stride. As a child with bad knees, Oguri Cap spent much of her early life in pain, struggling to stand. But through relentless perseverance, she overcame her limits and found liberation in the very thing that once seemed impossible: running. While the other horse girls at Kasamatsu chase victory and fame, Oguri runs without ambition, driven only by the joy of movement. Fujimasa March, a rising regional star, commands attention with her discipline, talent, and tenacity. For her, running is a matter of pride. But when a school-organized race brings her face-to-face with Oguris raw, unpolished stride, Marchs confidence begins to waver. In turn, something in Oguri shifts after racing March. For the first time, a spark of ambition ignites within her—a desire to win that will take her beyond the confines of her hometown to the grand stages waiting on the horizon.',
            director: "Super Creek",
            movieId: 1,
            cast: ['Oguri Cap', 'Maruzensky', 'Tamamo Cross', 'Super Creek', 'T.M. Opera O', 'Gold City', 'Symboli Rudolf']
        },
        {   
            name: "Amphoreus",
            imagePath: "images/movie-img/Amphoreus.png",
            year: 2026,
            description: 'Amphoreus, also known as The Eternal Land, was an isolated sandbox world created by Scepter δ-me13 under the administration of Lygus, in a project known as The Amphoreus Experiment. The world was constructed using memoria and data, but following the events of Trailblaze Mission chapter As Tomorrow Became Yesterday, the Scepter was destroyed and Amphoreus is in the process of being remade within the remaining Memory Zone.',
            director: "The Trailblazer",
            movieId: 2,
            cast: ['Aglea', 'Tribbie', 'Trailblazer', 'Cyrene', 'Evernight', 'Phainon']
        },
];

function addMovie() {
    //
    const bGrid = document.getElementById('browse-grid');
    const cardContainer = document.createElement('div');
    const paragraph = document.createElement('p');
    const cardImage = document.createElement('div');
    const imageContent = document.createElement('img');
    const anchor = document.createElement('a');
    let randomContent = randomizeContent();

    // 
    anchor.setAttribute('href', 'movie.html');
    anchor.className = 'browse-card';
    imageContent.setAttribute('src', randomContent.imagePath);
    cardContainer.setAttribute('data-movie-id', randomContent.movieId);
    cardContainer.setAttribute('onclick', 'clickedMovieData(this)');
    cardImage.className = "browse-image-placeholder";
    paragraph.textContent = randomContent.name;
    imageContent.className = "movie-image-img";

    // Append child to element node to DOM
    cardImage.appendChild(imageContent);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(paragraph);
    anchor.appendChild(cardContainer);   
    bGrid.appendChild(anchor);   
}

function removeMovie() {
    const bGrid = document.getElementById('browse-grid');
    const bCard = document.getElementsByClassName('browse-card');
    if (bCard.length == 0) {
        console.log("No movies to remove");
        return;
    } else {
        console.log("Removing movie at index " + (bCard.length - 1));
        bGrid.removeChild(bCard[bCard.length - 1]);
    }   
}

function randomizeContent() {
    return dict[Math.floor(Math.random() * dict.length)];
}

// LOADS DATA
function loadMovieData() {
    let movieData = JSON.parse(localStorage.getItem('movie-data'));
    if (movieData === null) {
        console.log("No movie data to load...");
        return;
    } else {
        console.log("Loading movie data...");
        let header = document.getElementById('movie-header');
        let description = document.getElementById('movie-description');
        let director = document.getElementById('movie-director');
        let cast = document.getElementById('movie-cast');
        
        header.textContent = `${movieData.name} - ${movieData.year}`;
        description.textContent = `${movieData.description}`;
        director.textContent = `${movieData.director}`;
        cast.innerHTML = '';
        for (let i = 0; i < movieData.cast.length; i++) {
            const list = document.createElement('li');
            list.textContent = movieData.cast[i];
            cast.appendChild(list);
        }     
    }
}

// SAVE DATA
function clickedMovieData(element) {
    let movieId = element.getAttribute('data-movie-id');
    console.log("Saving movie data: " + JSON.stringify(dict[movieId - 1]));
    localStorage.setItem('movie-data', JSON.stringify(dict[movieId - 1]));
}