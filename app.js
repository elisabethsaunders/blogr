let hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
let ham = document.querySelector("#ham");
const nested = document.querySelectorAll(".nested");
let type = document.querySelectorAll(".mobile-menu-option");
let connect = document.querySelector(".li-connect");
const product = document.querySelector(".li-product");
const company = document.querySelector(".li-company");
const arrow = document.querySelectorAll(".arrow");
const dropdown = document.querySelectorAll(".nav-option");
const dropProduct = document.querySelector(".dropdown-product");
const dropCompany = document.querySelector(".dropdown-company");
const dropConnect = document.querySelector(".dropdown-connect");

ham.addEventListener("click", () => {
	mobileMenu.classList.toggle("active");
});

dropdown.forEach(x => {
	x.addEventListener("click", () =>{
	 if(x.textContent.includes("Product") == true){
	 	dropProduct.classList.toggle("active");
	 } else {
	 	dropProduct.classList.remove("active");
	 }
	 if(x.textContent.includes("Company") == true){
	 	dropCompany.classList.toggle("active");
	 } else {
	 	dropCompany.classList.remove("active");
	 }
	 if(x.textContent.includes("Connect") ==true){
	 	dropConnect.classList.toggle("active");
	 } else {
	 	dropConnect.classList.remove("active");
	 }
})
})

type.forEach(e => {
	e.addEventListener("click", () => {
		if(e.textContent === "Product"){
			product.classList.toggle("active");

		} else {
			product.classList.remove("active");
		}
		if(e.textContent ==="Company"){
			company.classList.toggle("active");
		} else {
			company.classList.remove("active");
		}
		if(e.textContent === "Connect"){
			connect.classList.toggle("active");
		}
		else {
			connect.classList.remove("active");
		}
	})
})