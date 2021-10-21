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
spotifyApi.setAccessToken('BQA_0NPdfL0djtLs_klGsRqHYVcwXtEo25uzWzZHFZv6S3hFALvI7hi313R3rCw_uyi3LDfcX-NJFnm5bkwnkIKJcUqa5rlt8Niu04gnhFpoN_FdVIoV05hkgw8ebG1ih-en82oYjUSwe6YbrViy2wtbs5eCggG2v_ZemwmNyUCc');


const getArtistAlbums = (id) => {

    console.log(id)
    spotifyApi.getArtistAlbums(
        id,
        function (err, data) {
            console.log(data);
            parentRap.innerHTML = "";
            data.items.forEach(function (element) {
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
    );
}


let recherche = document.querySelector("#searchText");
const chercheArtiste = () => {
    spotifyApi.searchArtists(recherche.value).then(
        function (data) {
            console.log(data);
            parentRap.innerHTML = "";
            data.artists.items.forEach(function (element) {
                console.log(element.name)
                let ajoutLigne = document.createElement('div');
                ajoutLigne.textContent = element.name;
                ajoutLigne.addEventListener("click", () => getArtistAlbums(element.id))
                //ajoutLigne.setAttribute('href',getArtistAlbums(element.id));
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
    console.log("marche")

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

    /*recognition.addEventListener("start", startSpeechRecognition = (event) => {
        console.log(event)
    })
    recognition.addEventListener("end", endSpeechRecognition = (event) => {
        console.log(event)
    })*/
    recognition.addEventListener("result", resultOfSpeechRecognition = (event) => {
        mic = "false";
        const transcript = event.results[0][0].transcript;
        recherche.value = transcript + " ";
        rechercheArtiste();
        chercheArtiste();

    })
} else {
    console.log("marche pas")
}

