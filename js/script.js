const userData = [
    {
        username: "test",
        password: "test123"
    }
];

/* STORE USERNAME FIRST */
function storeUsername() {
    let username = document.getElementById('username');
    localStorage.setItem('username', username.value);
}

/* SHOW AND HIDE THE DATA AS NEEDED */
function loadProfile() {
    let divId = document.getElementById('profile');
    let profileUser = localStorage.getItem('username');
    if (profileUser === null) {
        divId.innerHTML = "<h1>No Profile yet.</h1>"
    } else {
        divId.innerHTML = `<h1>${profileUser}</h1>`
    }
}

function saveUserData() {
    localStorage.setItem('userData', JSON.stringify(userData));
}

function loadUserData() {
    let userData = JSON.parse(JSON.parse(localStorage.getItem('userData')));
}

/*              */
