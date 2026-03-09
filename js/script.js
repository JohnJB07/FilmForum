function loadData() {
    let movieData = localStorage.getItem('moviedat');
    if (movieData === null) {
        console.log("Movie data is null");
        return;
    }
    console.log(JSON.parse(movieData.movie_list));
    console.log(document.querySelectorAll('.browse-card').length);
}

function runfunc() {
    let x = document.getElementById('movie-name');
    let movie_data = {
        list: [
            {
                
            }
        ]
    }
    console.log('saving movie...')
    localStorage.setItem('moviedat', JSON.stringify(movie_data));
};

/* 
    This monstrosity of a code just adds a movie container element

*/
function addMovie() {
    //
    const bGrid = document.getElementById('browse-grid');
    const cardContainer = document.createElement('div');
    const paragraph = document.createElement('p');
    const cardImage = document.createElement('div');
    const imageContent = document.createElement('img');
    let randomContent = randomizeContent();

    // 
    imageContent.setAttribute('src', randomContent.imagePath);
    cardContainer.className = "browse-card";
    cardImage.className = "browse-image-placeholder";
    paragraph.textContent = randomContent.name;
    imageContent.className = "movie-image-img";

    // Append the children...
    cardImage.appendChild(imageContent);
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(paragraph);
    bGrid.appendChild(cardContainer);   
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

console.log(window.outerWidth);

function randomizeContent() {
    let dict = [
        {
            name: "Umamusume - Cinderella Gray",
            imagePath: "images/movie-img/umamusume.jpg"
        },
        {   
            name: "Amphoreus",
            imagePath: "images/movie-img/Amphoreus.jpg"
        }
    ];

    return dict[Math.floor(Math.random() * dict.length)];
}

document.addEventListener('DOMContentLoaded', (event) => {
    
    const addButton = document.getElementById('add-movie-btn');
    const container = document.getElementById('browse-grid');
    const templateItem = document.getElementById('browse-card');

    addButton.addEventListener('click', function() {

        const newItem = templateItem.cloneNode(true);
        
        newItem.removeAttribute('id');

        container.appendChild(newItenm);

    });
    
    
});