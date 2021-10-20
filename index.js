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
spotifyApi.setAccessToken('BQDFXGNjAI8DeyK-ofCZFbvHdmjTM1WxRv-hbrVXhjWAg62k5CHtBhzzt9m9UbaMU-svpPzagVyV59ll3dGKEAonwWFkkAMewJ76yKFiXlisUpQlfvqjlTlgkxVgxVEEVQn52hHAcdumgRAfoaf9C9Gb2Gf6-1wzwMENin3tAczz');

spotifyApi.getArtistAlbums(
    '43ZHCT0cAZBISjO8DG9PnE',
    { limit: 10, offset: 20 },
    function (err, data) {
        if (err) console.error(err);
        else console.log('Artist albums', data);
    }
);