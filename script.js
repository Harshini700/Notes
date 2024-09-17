const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
    if (localStorage.getItem("notes")) {
        notescontainer.innerHTML = localStorage.getItem("notes");
    }
}

function updatestorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    img.className = "delete-btn";
    inputbox.appendChild(img);
    notescontainer.appendChild(inputbox);
    updatestorage();
});

notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updatestorage();
    }
});

notescontainer.addEventListener("input", function (e) {
    if (e.target.classList.contains("input-box")) {
        updatestorage();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && document.activeElement.classList.contains("input-box")) {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});

// Call the showNotes function to load existing notes on page load
showNotes();
