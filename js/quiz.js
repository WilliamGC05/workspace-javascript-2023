// Generate Numbers 
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var M = randInt(300, 600);
var N = randInt(100, M);
var K = randInt(1, 10);
console.log(M, N, K);

// Random Into HTML
document.getElementById("s1").textContent = M.toString();
document.getElementById("s2").textContent = N.toString();
document.getElementById("s3").textContent = K.toString();

// Generate Correct Answer
var T = N + K;
var S = N - K;

document.querySelector('[value="1"]').nextSibling.nodeValue = M.toString() + "-" + N.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue = M.toString() + "-" + S;
document.querySelector('[value="3"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + "-" + K.toString();
document.querySelector('[value="4"]').nextSibling.nodeValue = M.toString() + "-" + N.toString() + "+" + K.toString();

// Change Style
function changeStyle(e) {
    console.log("Click");
    e.preventDefault();

    // Get Style
    var classname = this.getAttribute("class");

    if (classname == "answer") {
        this.setAttribute("class", "answer selected")
    } else if (classname == "answer selected") {
        this.setAttribute("class", "answer");
    }

    this.animate([{transofrm:'rotate(0deg)'},{transform:'rotate(0deg)'}],{duration:3000,fill:"forwards"});
}

// Event Listener 
for (var i = 0; i < 4; i++) {
    document.getElementsByClassName("answer")[i].addEventListener("click", changeStyle, false);
}