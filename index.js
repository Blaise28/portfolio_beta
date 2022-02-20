// preloader
window.addEventListener("load",(e)=>{
	document.querySelector(".contener_loader")
		.classList.add("fondu_out");
});
// navigation 
const nav =document.querySelector("nav ul");
const btn_open=document.querySelector(".btn_open");
const btn_close=document.querySelector(".btn_close");
const menu_open=document.querySelector(".menu_open");

btn_open.addEventListener("click",()=>{
		nav.classList.add("active");
		menu_open.style.display="none";
});
btn_close.addEventListener("click",()=>{
		nav.classList.remove("active");
		menu_open.style.display="";
});
const links=document.querySelectorAll("nav ul li a");
links.forEach((links)=>{
	links.addEventListener("click",(e)=>{
		nav.classList.remove("active");
		menu_open.style.display="";
	});
});

// swap pour mobile

let touchStart,touchEnd;
nav.addEventListener("touchstart",(e)=>{
	touchStart=e.targetTouches[0].clientX;
});
nav.addEventListener("touchmove",(e)=>{
	touchEnd=e.targetTouches[0].clientX;
	 
});
nav.addEventListener("touchend",(e)=>{
	if(touchStart - touchEnd>50){
		nav.classList.remove("active");
		menu_open.style.display="";
	}
});
// end navigation 

// contact form

function succes(name){
	swal({
	  title: "hey,"+name.value+"",
	  text: "Message recu avec success",
	  icon: "success",
	  button: "Ok",
	});
}
function input_require(){
	swal({
	  title: "Oups...",
	  text: "Renseigne bien tous les champs svp!!",
	  icon: "error",
	  confirmButtonColor:"red",
	});
}
function sendMail(nom,email,message)
{
	emailjs.send("service_jznakrk","template_updypd6",{
		from_name: email,
		to_name: nom,
		message: message,
		});
}
		// Start validation e-mail

const icon_valid=document.querySelector(".valid");
const icon_invalid=document.querySelector(".invalid");
const regex_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Valide(){

	const nom_prenom=document.querySelector(".name")
	const mail=document.querySelector(".mail")
	const message=document.querySelector(".message")
	const bouton=document.querySelector(".btn_envoye");

	let rep;

mail.addEventListener("input",e=>{
	if(mail.value.match(regex_email)){
			icon_valid.style.display="flex";
			icon_invalid.style.display="none";
			rep=true;
		}
	else{
			icon_invalid.style.display="flex";
			icon_valid.style.display="none";
			rep=false;
		}
	if(mail.value==""){
		icon_valid.style.display="none";
		icon_invalid.style.display="none";
	}
	});
bouton.addEventListener("click",(e)=>{
	e.preventDefault()

	if(nom_prenom.value == "" || mail.value=="" || message.value=="" || rep==false)
	{
		input_require();
	}
	else{
		sendMail(nom_prenom.value,mail.value,message.value);
		succes(nom_prenom);
		document.querySelector(".contact_form").reset();
		icon_valid.style.display="none";
	}
});
}
	Valide();

// End contact form