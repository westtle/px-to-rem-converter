let basedOn = 16;

// HTML.
const pxInput = document.querySelector(".px-input_");
const remInput = document.querySelector(".rem-input_");
const pxBaseInput = document.querySelector("._base-px-input");
const preview = document.querySelector(".__preview");

function changePx() {
	let remValue = pxInput.value / basedOn;
	remInput.value = remValue;

	Array.from(preview.children).forEach(paragraph => paragraph.style.fontSize = `${remValue}em`);
};

function changeRem() {
	let pixelValue = remInput.value * basedOn;
	pxInput.value = pixelValue;

	Array.from(preview.children).forEach(paragraph => paragraph.style.fontSize = `${pixelValue}px`);
};

function changeBasePixel() {
	basedOn = pxBaseInput.value;

	preview.style.fontSize = `${basedOn}px`;
	changeRem();
};

pxInput.addEventListener("input", changePx);
remInput.addEventListener("input", changeRem);
pxBaseInput.addEventListener("input", changeBasePixel);