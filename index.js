let blocStart = document.querySelector(".blocStart");
let blocRap = document.querySelector("#infosRap");
let parentRap = document.querySelector("#infosRap");
let navRap = document.querySelector(".navRap");

const rechercheArtiste = () => {
    blocStart.classList.add("hidden");
    blocStart.removeAttribute("id");
    blocRap.classList.remove("hidden");
    blocRap.classList.add("infos");

    
}

const goHome = () => {
    blocStart.classList.remove("hidden");
    blocStart.setAttribute("id", "startInt");
    blocRap.classList.add("hidden");
    blocRap.classList.remove("infos");
    document.querySelector("#searchText").value = "";
    parentRap.innerHTML="";
}



const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQBPh4RQBsMAb4k1MnW5wyqRM2tpO9ZSRUJGlgSb206eATZFFSPThhG4sxOFcEGLlR65mZOezi4Ep6-_1ZoW1Tso2ieAIgNTTIzmkirBKo1YjqkEpdSze6wAztvieDLskA-5g2OKPEBVzl-h4C_a0stDCZVXSbOvZS9q_ZDDcStV');


const getArtistAlbums=(id)=>{
    
        console.log(id)
    spotifyApi.getArtistAlbums(
    id,
    function (err, data) {
        console.log(data);
        parentRap.innerHTML="";
        data.items.forEach(function (element){
            console.log(element.name)
            let ajoutLigne = document.createElement('div');
            ajoutLigne.textContent = element.name;
            //ajoutLigne.setAttribute('href',getArtistAlbums(element.id));
            ajoutLigne.classList.add('line_album');
            parentRap.append(ajoutLigne);
            
          })
      },
      function (err) {
        console.error(err);
      }
    );}


let recherche = document.querySelector("#searchText");
const chercheArtiste=()=>{
    spotifyApi.searchArtists(recherche.value).then(
    function (data) {
      console.log(data);
      parentRap.innerHTML="";
      data.artists.items.forEach(function (element){
          console.log(element.name)
          let ajoutLigne = document.createElement('div');
          ajoutLigne.textContent = element.name;
          ajoutLigne.addEventListener("click", ()=>getArtistAlbums(element.id))
          //ajoutLigne.setAttribute('href',getArtistAlbums(element.id));
          ajoutLigne.classList.add('line_rapeur');
          parentRap.append(ajoutLigne);
          
        })
    },
    function (err) {
      console.error(err);
    }
  );}

document.querySelector("#searchText").addEventListener("change", rechercheArtiste);
document.querySelector("#homeimg").addEventListener("click", goHome);
recherche.addEventListener("change",chercheArtiste);

