function showPic(whichPic){
	let source = whichPic.getAttribute('href');
	let placeholder = document.querySelector('img');
	placeholder.setAttribute('src',source);
	return true;
}

function prepareGallery(){
	let galleryList = document.querySelectorAll('li a');
	for(let i = 0; i< galleryList.length;i++){
		galleryList[i].onclick = function(){
			showPic(this);
			return !showPic(this);
		};
	}
}

window.onload = function(){
	prepareGallery();
}