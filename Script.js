function myFunction() {
  				document.getElementById("demo").innerHTML = "0 Puntos";
	}
function myFunction2() {
    	var x = document.getElementById("myDIV");
    	if (x.style.display === "block") {
        	x.style.display = "none";
    	} else {
        	x.style.display = "block";
   			}
		}
function myFunction3() {
    	var x = document.getElementById("myDIV2");
    	if (x.style.display === "none") {
        	x.style.display = "block";
    	} else {
        	x.style.display = "none";
   			}
		}
function myRandomNumber() {
	var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  document.getElementById("hola").innerHTML = text;
	}