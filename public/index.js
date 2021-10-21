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
spotifyApi.setAccessToken('BQCSAeZMTvIpYdAw50jEoNZPe0wy3m2xNZGIEBMoGwoDKH5XGPPkIAjGT2r9Da3LtX-Dl50opyd9Wc-0hgnTc4JPp55cq7SHWsfa8WzU0Sismisl5eZOAcODRzbZYuBITSy7xlqbH4N4CJOF1H6u5dQ0y1ZbXNddqASCUU0ueqwN');

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

const micBtn = document.querySelector("button");
const micIcon = micBtn.querySelector("i");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();
    let mic = "false"
    micBtn.addEventListener("click", micBtnClick = () => {
        if (mic == "false") {
            recognition.start();
            mic = "true";
        } else {
            recognition.stop();
            mic = "false";
        }
    });

    recognition.addEventListener("result", resultOfSpeechRecognition = (event) => {
        mic = "false";
        const transcript = event.results[0][0].transcript;
        recherche.value = transcript + " ";
        rechercheArtiste();
        chercheArtiste();

    })
} else {
    console.error("marche pas")
}

