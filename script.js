let submitButton = document.getElementById("submitButton");
let ratingButtons = document.querySelectorAll(".ratingButton");
let ratingOutput = document.getElementById("ratingOutput");
let mainSection = document.getElementById("mainSection");
let thankYouSection = document.getElementById("thankYouSection");

submitButton.addEventListener("click", function () {
    if (ratingOutput.innerHTML == "") {
        alert("You must select a rate before submitting");
    }
    else {
        mainSection.style.display = "none";
        thankYouSection.style.display = "flex";
    }

})

ratingButtons.forEach(function (rate) {
    rate.addEventListener("click", function () {
        ratingOutput.innerHTML = rate.innerHTML;
    })
})

