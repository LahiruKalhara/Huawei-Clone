const menu = document.getElementById("open");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");

openMenu.addEventListener("click",function(){
    nav.style.display = "flex";
    menu.style.display = "none";
    close.style.display = "flex";
    close.style.marginRight = "2em";
})

closeMenu.addEventListener("click",function(){
    nav.style.display = "none";
    close.style.display = "none";
    menu.style.display = "flex";
    nav.setAttribute("style","");
    menu.setAttribute("style","");
})

const targetDiv1 = document.querySelector(".bodyContainer1");
const targetDiv2 = document.querySelector(".bodyContainer2");
const targetDiv3 = document.querySelector(".bodyContainer3");
const targetDiv4 = document.querySelector(".bodyContainer4");

const options = {
    threshold:0,
    rootMargin:"0px 0px 0px 0px",
    root:null
}

const observer = new IntersectionObserver(function(entities){
    entities.forEach(entry =>{
        console.log(entry.target);
        const intersecting = entry.isIntersecting;
        if(intersecting){
            entry.target.classList.add("on");
            observer.unobserve(entry.target);
        }else{
            entry.target.classList.remove("off");
        }
    })
},options);

observer.observe(targetDiv1);
observer.observe(targetDiv2);
observer.observe(targetDiv3);
observer.observe(targetDiv4);