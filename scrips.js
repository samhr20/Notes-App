let btn = document.getElementById("btn");
let content = document.getElementById("content-box");

let li, p, img;

btn.addEventListener('click', () => {
    li = document.createElement("li")
    p = document.createElement("p");
    p.setAttribute("contenteditable", "true");
    p.className = "input";
    img = document.createElement("img");
    img.src = "images/delete.png"

    content.appendChild(li).appendChild(p).appendChild(img);
    content.insertBefore(li, content.firstChild);

})

content.addEventListener('click', function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.parentElement.remove();
        savedata();
    }
})


content.addEventListener('input', function (e) {
    if (e.target.tagName === "P") {
        savedata();
    }
});

function savedata() {
    localStorage.setItem("notes", content.innerHTML);
}

function showdata(){
    content.innerHTML = localStorage.getItem("notes");
}

showdata();