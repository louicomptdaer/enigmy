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
    parentRap.innerHTML = "";
}

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken('BQA09ww0o4hGQ1p1twdtqwun-sOf6D9vuhBdExGJJbApRGDe_A8BxB7Khd7wX9sfVperU0B9qVEfT55sf7Lmks8nHdPOKhXaiuMj57lT7wNc4L4VczvbQvp6GVDuFzNkGIugFOqXJVxMMnhUp270gOtD_aMcN2H1easS13g1fUxe');

const getArtistAlbums = (id) => {

    spotifyApi.getArtistAlbums(
        id,
        function (err, data) {

            parentRap.innerHTML = "";
            data.items.forEach(function (element) {

                let ajoutLigne = document.createElement('div');
                ajoutLigne.textContent = element.name;
                ajoutLigne.classList.add('line_album');
                parentRap.append(ajoutLigne);

            })
        },
        function (err) {
            console.error(err);
        }
    );
}

let recherche = document.querySelector("#searchText");
const chercheArtiste = () => {
    spotifyApi.searchArtists(recherche.value).then(
        function (data) {

            parentRap.innerHTML = "";
            data.artists.items.forEach(function (element) {

                let ajoutLigne = document.createElement('div');
                ajoutLigne.textContent = element.name;
                ajoutLigne.addEventListener("click", () => getArtistAlbums(element.id))
                ajoutLigne.classList.add('line_rapeur');
                parentRap.append(ajoutLigne);

            })
        },
        function (err) {
            console.error(err);
        }
    );
}

document.querySelector("#searchText").addEventListener("change", rechercheArtiste);
document.querySelector("#homeimg").addEventListener("click", goHome);
recherche.addEventListener("change", chercheArtiste);

