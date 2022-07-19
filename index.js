function start() {

    // for image 1

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dive6.png

    var randomImageSource = "images/" + randomDiceImage; // images/dices1.png - images/dices6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    //for image 2

    var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dive6.png

    var randomImageSource2 = "images/" + randomDiceImage2; // images/dices1.png - images/dices6.png

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomImageSource2);


    //if player wins

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🎊 Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🎊";
    }

    else {
        document.querySelector("h1").innerHTML = "😲Draw !";
    }

}