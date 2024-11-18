var add = document.getElementById("add")
var popbg = document.querySelector(".popup-bg")
var popcntr = document.querySelector(".popup-container")
var create = document.getElementById("create")

var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var text = document.getElementById("text")

add.addEventListener("click", function () {
    popbg.style.display = "block"
    popcntr.style.display = "block"
})
var cancel = document.getElementById("cancel")
cancel.addEventListener("click", function () {
    popbg.style.display = "none"
    popcntr.style.display = "none"
    booktitle.value = null
    bookauthor.value = null
    text.value = null
})

var container = document.querySelector(".containers")
var create = document.getElementById("create")

var booktitle = document.getElementById("book-title")
var bookauthor = document.getElementById("book-author")
var text = document.getElementById("text")



create.addEventListener("click", function () {
    var book = document.createElement("div")
    book.setAttribute("class", "book-container")
    book.innerHTML = `<h2>${booktitle.value}</h2>` +
        `<h4>${bookauthor.value}</h4>` +
        `<p>${text.value}</p>` +
        `<button onclick='remove(event)'>Delete</button>`
    container.append(book)
    popbg.style.display = "none"
    popcntr.style.display = "none"
    booktitle.value = null
    bookauthor.value = null
    text.value = null
})

function remove(event) {
    event.target.parentElement.remove()
}

