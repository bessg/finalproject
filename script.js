let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function submitForm(event) {
    event.preventDefault();
    
    const artistName = document.getElementById('artistName').value;
    const artType = document.getElementById('artType').value;
    const email = document.getElementById('email').value;

    // Send form data to the server or perform other actions
    console.log("Form submitted!");
    console.log("Artist Name:", artistName);
    console.log("Art Type:", artType);
    console.log("Email:", email);
}

function searchArtist() {
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById("artist-list").getElementsByTagName('ul')[0];
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function showArtistList() {
    var artistList = document.getElementById('artist-list');
    artistList.style.display = "block"; // Show the list when the button is clicked
}