
let dropdownBtn = document.querySelector("#dropdownText");
let dropdownList = document.querySelector("#dropdownList");
let icon = document.querySelector("#icon");
let span = document.querySelector("#span");
let input = document.querySelector("#searchInput");
let dropdownlistItems = document.querySelectorAll(".dropdownlistItem");

dropdownBtn.onclick = function(){
    if(dropdownList.classList.contains("show")){
        icon.style.rotate = "0deg";
    }else{
        icon.style.rotate = "-180deg";
    }
    dropdownList.classList.toggle("show");
    
};

window.onclick = function(event){
    if(event.target.id !== "dropdownText" && event.target.id !== "span" && event.target.id !== "icon"){
        dropdownList.classList.remove("show");
        icon.style.rotate = "0deg";
    }
};

for(item of dropdownlistItems){
    item.onclick = function(event){
        span.innerText = event.target.innerText;
        if(event.target.innerText == "Everything"){
            input.placeholder = "Search Anything";
        }else{
            input.placeholder = "Search in " + event.target.innerText;
        }
        
    }
}