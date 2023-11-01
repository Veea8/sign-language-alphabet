var ls = document.querySelector(".letter-section");

Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65)).forEach(i => {
	var el = document.createElement("div");
	el.innerHTML = i;

	el.addEventListener("click", function(e) {
		var activeEl = document.querySelector("#active");
		if(activeEl) activeEl.removeAttribute("id");
		el.id = "active";
		document.querySelector(".letter-image-section").children[0].src = "img/hand_" + i.toLowerCase() + ".png";
	});

	ls.appendChild(el);
});
ls.children[0].click();

var letterImagesContainer = document.getElementById("alphabet-overview-container");
for (var j = 65; j <= 90; j++) {
	var letter = String.fromCharCode(j);

	var gridCell = document.createElement("div");
	gridCell.classList.add("grid-cell");

	var image = document.createElement("img");
	image.src = "img/hand_" + letter.toLowerCase() + ".png";
	gridCell.appendChild(image);

	var letterSpan = document.createElement("span");
	letterSpan.textContent = letter;
	gridCell.appendChild(letterSpan);

	letterImagesContainer.appendChild(gridCell);
}
