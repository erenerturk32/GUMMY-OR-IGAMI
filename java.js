const modalBtnG = document.getElementById("modalG-ac");
const modalG = document.querySelector(".modalG");
const modalKptG = document.getElementById("modalG-kapat");
const modalBtnK = document.getElementById("modalK-ac");
const modalK = document.querySelector(".modalK");
const modalKptK = document.getElementById("modalK-kapat");

modalBtnG.addEventListener("click", () => {
    modalG.style.display = "flex";
});

modalKptG.addEventListener("click", () => {
    modalG.style.display = "none";
});

modalBtnK.addEventListener("click", () => {
    modalK.style.display = "flex";
});

modalKptK.addEventListener("click", () => {
    modalK.style.display = "none";
});
