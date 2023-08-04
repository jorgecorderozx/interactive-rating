let submitButton = document.getElementById("submitButton");
let ratingButtons = document.querySelectorAll(".ratingButton");
let ratingOutput = document.getElementById("ratingOutput");
let mainSection = document.getElementById("mainSection");
let thankYouSection = document.getElementById("thankYouSection");
let body = document.querySelector("body");
let rateAgain = document.getElementById("rateAgain");
let number;

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
        number = ratingOutput.innerHTML;;
        ratingColor();
    })
})

body.addEventListener("click", function () {
    if (thankYouSection.style.display == "none") {
        ratingOutput.innerHTML = ""
    }
    for (i = 0; i < ratingButtons.length; i++) {
        ratingButtons[i].style.backgroundColor = "#262f38"
        ratingButtons[i].style.color = "hsl(217, 12%, 63%)"
    }

})

rateAgain.addEventListener("click", function (e) {
    e.stopPropagation();
    thankYouSection.style.display = "none";
    mainSection.style.display = "flex"
})

function ratingColor() {
    parseInt(number);
    for (i = 0; i < ratingButtons.length; i++) {
        if (i < number) {
            ratingButtons[i].style.backgroundColor = "hsl(217, 12%, 63%)"
            ratingButtons[i].style.color = "hsl(0, 0%, 100%)"
        }

        else {
            ratingButtons[i].style.backgroundColor = "#262f38"
            ratingButtons[i].style.color = "hsl(217, 12%, 63%)"
        }
    }
}