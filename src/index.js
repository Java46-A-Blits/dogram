
let detailsImage = document.querySelector(".details-image");
let detailsTitle = document.querySelector(".details-title");
let anchors = document.querySelectorAll(".thumbnails-anchor");
let mainContentEl = document.querySelector(".main-content");
let audio = document.getElementById("audio");
let selectedItem;
 

for(let i=0; i<anchors.length; i++){
    anchors[i].addEventListener("click",function(event){
        event.preventDefault();//cancelling default behaviour of anchor element
        setDetails(anchors[i]);
        showDetails();     
    })
}
function setDetails(anchor){
    console.log('anchor was pressed',anchor);
    let hrefValue = anchor.getAttribute("href");
    detailsImage.setAttribute("src",hrefValue);  
    audio.setAttribute("src",anchor.getAttribute("data-details-sound")); 
    audio.play();
    setTimeout(function(){ 
        audio.pause();
    }, 3000);
    
    anchor.parentElement.classList.add("selected");
    if (selectedItem){
        if(selectedItem != anchor.parentElement){ // anchor.parentElement-the whole element along with it's classes&attributes?
        selectedItem.classList.remove("selected");
        }
    }    
    selectedItem = anchor.parentElement;
                                                            // SEE WEBINAR-8 ??? how to direct access the element over DOM syntax
    let thumbnailsTitleSelector = `[href = "${hrefValue}"] .thumbnails-title`; // ([target=_blank] Selects all elements with target="_blank")
    let thumbnailsTitleEl = document.querySelector(thumbnailsTitleSelector);
    detailsTitle.textContent = `${thumbnailsTitleEl.textContent}: ${anchor.getAttribute("data-details-title")}`;    

}
function showDetails(){
    mainContentEl.classList.remove('hidden');
    detailsImage.parentElement.classList.add('is-tiny');
    setTimeout(removeIsTiny,1); /* timeout set for 1 msec */
}    
function hideDetails(){
    mainContentEl.classList.add('hidden');
    selectedItem.classList.remove("selected");
}
function removeIsTiny(){
    detailsImage.parentElement.classList.remove('is-tiny');
}
