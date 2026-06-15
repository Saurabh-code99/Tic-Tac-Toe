let btn = document.querySelector("button");
let mode = "light";

btn.addEventListener("click",() =>{
    if(mode === "light"){
        mode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        mode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
});