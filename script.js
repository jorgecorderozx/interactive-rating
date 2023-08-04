let submitButton = document.getElementById("submitButton");
let ratingButtons = document.querySelectorAll(".ratingButton");
let ratingOutput = document.getElementById("ratingOutput");
let mainSection = document.getElementById("mainSection");
let thankYouSection = document.getElementById("thankYouSection");
let body = document.querySelector("body");
let rateAgain = document.getElementById("rateAgain");

submitButton.addEventListener("click", function (e) {
    e.stopPropagation();
    if (ratingOutput.innerHTML == "") {
        alert("You must select a rate before submitting");
    }
    else {
        mainSection.style.display = "none";
        thankYouSection.style.display = "flex";
    }

})

ratingButtons.forEach(function (rate) {
    rate.addEventListener("click", function (e) {
        e.stopPropagation();
        ratingOutput.innerHTML = rate.innerHTML;
    })
})

body.addEventListener("click", function(){
    if(thankYouSection.style.display == "none"){
        ratingOutput.innerHTML = ""
    }
    
})

rateAgain.addEventListener("click", function(e){
    e.stopPropagation();
    thankYouSection.style.display = "none";
    mainSection.style.display = "flex"
})

