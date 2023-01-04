// Get the modal
let modal = document.getElementById('modalContent');
// Get the button that opens the modal
let btn = document.getElementById('modalBtn');
// Get the <span> element that closes the modal
let modalClose = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    document.querySelector('body').classList.add('modal-active')
}

// When the user clicks on <span> (x), close the modal
modalClose.onclick = function() {
    document.querySelector('body').classList.remove('modal-active')
}

// When the user clicks the button, open the modal
window.onclick = function(event) {
    if (event.target == modal) {
        document.querySelector('body').classList.remove('modal-active')
    }
}

//counter Adults:
let minusBtnAdults = document.getElementById("minus-btnAdults");
let countAdults = document.getElementById("countAdults");
let plusBtnAdults = document.getElementById("plus-btnAdults");

let countNumAdults = 0;
countAdults.innerHTML = countNumAdults;

minusBtnAdults.addEventListener("click", () => {
	if(countNumAdults > 0) {
	countNumAdults -= 1;
	} else {
		countNumAdults = 0;
	}
	countAdults.innerHTML = countNumAdults;
});

plusBtnAdults.addEventListener("click", () => {
	countNumAdults += 1;
	countAdults.innerHTML = countNumAdults;
});


//counter Children
let minusBtnChildren = document.getElementById("minus-btnChildren");
let countChildren = document.getElementById("countChildren");
let plusBtnChildren = document.getElementById("plus-btnChildren");

let countNumChildren = 0;
countChildren.innerHTML = countNumChildren;

minusBtnChildren.addEventListener("click", () => {
	if(countNumChildren > 0) {
	countNumChildren -= 1;
	} else {
		countNumChildren = 0;
	}
	countChildren.innerHTML = countNumChildren;
});

plusBtnChildren.addEventListener("click", () => {
	countNumChildren += 1;
	countChildren.innerHTML = countNumChildren;
});