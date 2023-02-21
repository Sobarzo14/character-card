let duplicateBtn = document.querySelector(".duplicate");
duplicateBtn.addEventListener("click", function(e) {
    let node = document.querySelector(".card");
    let clone = node.cloneNode(true);
    document.body.appendChild(clone);
});

let card = document.querySelector(".card")
card.addEventListener("mouseover", function() {
    card.classList.add("hovered");
});

let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function() {
    card.classList.toggle("alternate");
})

let change = document.querySelector(".change");
change.addEventListener("click", function() {
    document.querySelector(".title").innerHTML += "LOL";
});

document.querySelector(".delete").addEventListener("click", function() {
    let lastChild = document.body.lastChild;
    lastChild.remove();
});

let haxBtn = document.querySelector(".hax-button");
haxBtn.addEventListener("click", function() {
    document.querySelector(".description").style.display = "none"
})