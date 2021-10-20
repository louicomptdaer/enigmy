let blocStart = document.querySelector("#startInt");
const addHidden=()=>{
    blocStart.classList.add("hidden");
    blocStart.removeAttribute("id");
}
document.querySelector("#searchText").addEventListener("change", addHidden);