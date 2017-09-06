
// uppgift b) document.getElementsByTagName("P")[0].innerHTML = "tjena";


// uppgift c) document.getElementById("text").style.backgroundColor = "red";
//var imageArray = ["bild1.jpg", "bild2.jpg", "bild3.jpg"];

// uppgift 2 var myImage = document.getElementById("mainImg");

//var imageIndex = 1;

//function changeImage() {
//	myImage.setAttribute("src", imageArray[imageIndex]);
//	imageIndex = (imageIndex + 1) % imageArray.length;
// uppgift 2 slutar här}

// uppgift 3 setInterval(changeImage, 1000);


function usernameValid(){
	var usernameLength = document.getElementById("uname").value;
	var passwordLength = document.getElementById("pw").value;
	if(form.namn.value == ""){
		alert("Error: Användarnamn kan inte va tomt");
		return false;
	}
	if(form.password.value == ""){
		alert("Error: Lösenord kan inte va tomt");
		return false;
	}
	if(usernameLength.length < 3 || usernameLength.length > 15){
		alert("Användarnamn måsta vara mins 3 tecken men inte mer än 15");
		return false;
	}
	if(! /^[a-zA-Z0-9_-]+$/.test(usernameLength)){
		alert("Inga ottilåtna tecken");
		return false;
	}
	if(passwordLength.length < 8){
		alert("Lösenord måsta vara mins 8");
		return false;
	}
	else {
		return true;
	}
}
