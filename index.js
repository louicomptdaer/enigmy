let blocStart = document.querySelector(".blocStart");
let blocRap = document.querySelector("#infosRap");
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
}
document.querySelector("#searchText").addEventListener("change", rechercheArtiste);
document.querySelector("#homeimg").addEventListener("click", goHome);

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQBPh4RQBsMAb4k1MnW5wyqRM2tpO9ZSRUJGlgSb206eATZFFSPThhG4sxOFcEGLlR65mZOezi4Ep6-_1ZoW1Tso2ieAIgNTTIzmkirBKo1YjqkEpdSze6wAztvieDLskA-5g2OKPEBVzl-h4C_a0stDCZVXSbOvZS9q_ZDDcStV');

spotifyApi.getArtistAlbums(
    '43ZHCT0cAZBISjO8DG9PnE',
    { limit: 10, offset: 20 },
    function (err, data) {
        if (err) console.error(err);
        else console.log('Artist albums', data);
    }
);