var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Por favor, entre com seu nome(feche a porta dps)');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Você é uma pessoa muitooo legal ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Você é uma pessoa muitooo legal ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

myImage.onclick = function() {
		var mySrc = myImage.getAttribute('src');
		if(mySrc === 'images/PokecordSpawn.png'){
			myImage.setAttribute('src', 'images/marco-and-star.png');
		}else{
			myImage.setAttribute('src', 'images/PokecordSpawn.png');
		}

	}
