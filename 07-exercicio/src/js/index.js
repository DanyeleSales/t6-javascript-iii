// aqui.
import '../styles/main.scss'
import credentials from './credentials'
import google_image_search from './resources/google'
import musicbrainz_artists_search from './resources/musicbrainz';



// manipulação do dom
const input = document.querySelector("input");
const div = document.querySelector("content");
const form = document.querySelector("form");
const img = document.getElementById("bg");

form.addEventListener("submit", function(e){
    e.preventDefault();
   google_image_search(input.value, img)
       
    
})


