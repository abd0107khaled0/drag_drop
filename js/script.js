let add = document.getElementById("btn");
let input = document.getElementById("inp")
let boxs = document.querySelectorAll(".box")
let drag = null
add.onclick = function () {
    if (input.value != "") {
        boxs[0].innerHTML += `
        <p class="item draggble="true">${input.value}</p>
        `
        input.value = ""
    }
    input.focus()
    dragitem()
}
function dragitem() {
    let items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("dragstart", function () {
            drag = item;
            this.style.opacity = "0.5"
        })
        item.addEventListener("dragend", function () {
            drag = null;
            item.style.opacity = "1";
        })
        boxs.forEach(box=>{
            box.addEventListener("dragover",function(e){
                e.preventDefault()
                this.style.background = "#090";
                this.style.color = "#FFF"
            })
            box.addEventListener("dragleave",function(){
                this.style.background = "#FFF";
                this.style.color = "#000"
            })
            box.addEventListener("drop",function(){
                box.appendChild(drag);
                this.style.background = "#FFF";
                this.style.color = "#000"
            })
        })
    })
}
