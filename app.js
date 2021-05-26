
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


function validarSenha(){
	senha = document.getElementsByName('senha').value;
	senha2 = document.getElementsByName('senha2').value;

	if(senha!= senha2) {
		   senha2.setCustomValidity("Senhas diferentes!");
	} else {
		 senha2.setCustomValidity('');
	}
        senha.onchange = validatePassword;
   senha2.onkeyup = validatePassword;
}