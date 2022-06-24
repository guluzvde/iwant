const form = document.getElementById("signup-form");
const ad = document.getElementById("ad");
const soyAd = document.getElementById("soyad");
const email = document.getElementById("email");
const sifre = document.querySelector("[type='password']");



eventListeners();

function eventListeners() {
  form.addEventListener("submit",qeydiyyat)

}

function qeydiyyat(e){
    console.log(`${ad.value} uğurla qeydiyyatdan keçdi`)
    local();
   e.preventDefault();
}

function local(){
    localStorage.setItem(email.value,sifre.value)
}
   

