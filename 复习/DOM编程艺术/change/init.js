window.onload = function() {
	let Lists = document.querySelectorAll('li');
	let innerAll = document.querySelector('#innerAll');
	let timer = null;

	function startMove(target) {
		clearInterval(timer);
		timer = setInterval(function() {
			if(innerAll.offsetLeft==target){
				clearInterval(timer);
			}
			let speed = 0;
			let newLeft = innerAll.offsetLeft;
			if (innerAll.offsetLeft < target) {
				speed = Math.ceil((Math.abs(target-innerAll.offsetLeft)/10));
			} else {
				speed = -Math.ceil((Math.abs(innerAll.offsetLeft-target)/10));
			}
			newLeft += speed;
			innerAll.style.left = newLeft + "px";
		}, 30);
	}

	for (let i = 0; i < Lists.length; i++) {
		Lists[i].onclick = function() {
			startMove(-i*600);
		};
	}
}