// Inicializa o WOW JS
new WOW().init();


// filhote
let eyeR = document.querySelector("#eye-r");
let eyeR2 = document.querySelector("#eye-r2");

let toggleEyeFunc = () => {
	eyeR.classList.toggle("is-eye-hidden");
	eyeR2.classList.toggle("is-eye-hidden");

	setTimeout(() => {
		eyeR.classList.toggle("is-eye-hidden");
		eyeR2.classList.toggle("is-eye-hidden");
	}, 500);
};

document.body.addEventListener("click", toggleEyeFunc);

//Botao de mostrar mais
$(document).ready(function () {
	$(".content").slice(0, 3).show();
	$("#loadMore").on("click", function (e) {
		e.preventDefault();
		$(".content:hidden").slice(0, 3).slideDown();
		if ($(".content:hidden").length == 0) {
			$("#loadMore").addClass("noContent");
		}
	});
});


