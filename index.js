let blocStart = document.querySelector(".blocStart");
let blocRap = document.querySelector("#infosRap");
const rechercheArtiste=()=>{
    blocStart.classList.add("hidden");
    blocStart.removeAttribute("id");
    blocRap.classList.remove("hidden");
    blocRap.classList.add("infos");
}

const goHome=()=>{
    blocStart.classList.remove("hidden");
    blocStart.setAttribute("id","startInt");
    blocRap.classList.add("hidden");
    blocRap.classList.remove("infos");
    document.querySelector("#searchText").value = "";
}
document.querySelector("#searchText").addEventListener("change", rechercheArtiste);
document.querySelector("#homeimg").addEventListener("click", goHome);