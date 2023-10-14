let menu_menu = document.querySelector(".logo_menu");
let menu = document.querySelectorAll(".logo_menu .logo");
let navbar = document.querySelector("nav ul");
menu_menu.addEventListener("click", showMenu);
function showMenu() {
    if(navbar.style.display==="flex"){
        navbar.style.display = "none";
        menu.forEach((e) => {
            e.style.transform="none";
        });
    }
    else{
        navbar.style.display = "flex";
        menu.forEach((e) => {
            e.style.transform="rotate(45deg)";
        });
    }
};

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-500px";
  }
  prevScrollpos = currentScrollPos;
}

let sign = document.querySelector(".nav_login");
let form = document.querySelector("form .login_box");
sign.addEventListener("click",()=>{
    form.style.display="flex";
});


let login = document.querySelector("#login");
login.addEventListener("click",()=>{
    form.style.display="none";
});

let list=document.querySelectorAll("ul li");
let listarr=Array.from(list);
listarr.forEach((e)=>{
    e.addEventListener("click",()=>{
        if(screen.width<900){
            navbar.style="display:none";
            menu.forEach((e) => {
             e.style.transform="none";
        });
    }
    });
});

let buy=document.getElementsByClassName("buy");
let box_show=document.getElementsByClassName("box_show");
let buyarr=Array.from(buy);
buyarr.forEach((e)=>{
  e.addEventListener("click",()=>{
    box_show[0].style="display:flex";
  });
});

let cancel=document.querySelector(".box_show button");
cancel.addEventListener("click",()=>{
    box_show[0].style="display:none";
});
