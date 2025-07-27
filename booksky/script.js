//selecting popupbox popupoverlay and button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display ="block"
    popupbox.style.display ="block"

})

//select cancel button
var cancelpopup = document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display ="none"
    popupbox.style.display ="none"

})

//select container, add book button ,book title,bokk author input,book discription

var container = document.querySelector(".container")
var addbook= document.getElementById("add-book")
var booktitleinput =document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){

    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${book-title-input.value}</h2>
    <h5>${book-author-input.value}</h5>
    <p>${book-description-input.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display ="none"
    popupbox.style.display ="none"

})

function deletebook(event){
    event.target.parentElement.remove()
}
