let switchColor = document.getElementById("style-switcher");
let headingColor = document.getElementById("heading-color");
let divinColor = document.getElementById("colors");
let setting = document.getElementById("gear");
//start/ to changes the colors
setting.addEventListener("click",function(){
    switchColor.classList.toggle("active");
    headingColor.classList.toggle("active");
    divinColor.classList.toggle("active");
});
window.addEventListener("scroll",function(){
    switchColor.classList.add("active");
    headingColor.classList.add("active");
    divinColor.classList.add("active");
})
let stylingColors = document.querySelectorAll(".alt");
function setActiveStyle(color){
    stylingColors.forEach((style)=>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }else{
            style.setAttribute("disabled","true")
        }
    })
}
//end/ to changes the colors
//start/ to changes from light mode to dark mode or the opposite
let sunmoonIcon = document.getElementById("sm");
sunmoonIcon.addEventListener("click",()=>{
    document.getElementById("sunmoon").classList.toggle("fa-moon");
    document.getElementById("sunmoon").classList.toggle("fa-sun");
    document.body.classList.toggle("dark-mode");
})
//end/ to changes from light mode to dark mode or the opposite
//start/ to change active class from lis
let sections = document.querySelectorAll(".section");
let links = document.querySelectorAll(".li"); //==========> a
links.forEach((a)=>{
    sections.forEach((sec)=>{
        if(a.getAttribute("href").split("#")[1] === sec.getAttribute("id")){
            a.addEventListener("click",()=>{
                links.forEach((a)=>{
                    a.classList.remove("active");
                })
                sections.forEach((sec)=>{
                    sec.classList.add("hidden");
                })
                a.classList.add("active");
                sec.classList.remove("hidden");
                slidebar.classList.remove("open");
                toggleSlide.classList.remove("open");
                mainSlide.classList.remove("open");
                mainSlide.classList.remove("add");
                switchColor.classList.remove("none");
            })
        }
    })
})
//end/ to change active class from lis
// start/ to open and close the slidebar
let slidebar = document.getElementById("aside");
let toggleSlide = document.getElementById("slidebutton");
let mainSlide = document.getElementById("main");
let divAir = document.getElementById("air");
toggleSlide.addEventListener("click",()=>{
    toggleSlide.classList.toggle("open");
    slidebar.classList.toggle("open");
    // to remove switch sec
    switchColor.classList.toggle("none");
    // to remove switch sec
    mainSlide.classList.toggle("open");
    //start/ remove the padding 270px from main to responsive
    mainSlide.classList.toggle("add");
    //end/ remove the padding 270px from main to responsive
})
//end/ to open and close the slidebar
// start text in home
let txt = document.getElementById("job");
let txt2 = document.getElementById("txttoo");
let arrText = ["Engineer","Frontend developer","Web developer"];
let i = 0;
let y = 0;
function repeat(){
    y++;
    txt.innerHTML = arrText[i].slice(0,y);
    txt2.innerHTML = arrText[i].slice(0,y);
    if(y == arrText[i].length){
        i++;
        y = 0;
    }
    if(i == arrText.length){
        i = 0;
    }
    setTimeout(()=>{
        repeat();
    },200)
}
repeat()
// end text in home



