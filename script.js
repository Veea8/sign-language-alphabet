var ls = $(".letter-section")[0];
Array.from({length: 26}, (_, i) => String.fromCharCode(i + 65)).forEach(i => {
	var el = $("+div");
	el.innerHTML = i;
	el.on("click", e => {
		if($("#active")) $("#active").removeAttribute("id");
		el.id = "active";
		$(".letter-image-section")[0].children[0].src = "img/hand_" + i.toLowerCase() + ".png";
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
