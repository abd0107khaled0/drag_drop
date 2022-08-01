let add = document.getElementById("btn");
let input = document.getElementById("inp")
let box = document.getElementById("box")

 
if (localStorage.arsr != null) {
    array_input = JSON.parse(localStorage.getItem("arsr"))
    }else{
        array_input = []
    }

add.onclick = function () {
    let input_value = input.value;
    if (input_value != "") {
        array_input.push(input_value)
        add_inArray()
    }
    local()
}
function add_inArray() {
    let table = ''
    for (let i = 0; i < array_input.length; i++) {
        table += `<p class="item">${array_input[i]}<button onclick="id_d(${i})">dele</button></p> `
    }
    document.querySelector(".b").innerHTML = table
}add_inArray()

function local() {
    localStorage.setItem("arsr", JSON.stringify(array_input))
}

function id_d(id){
    console.log(id)
    array_input.splice(id,1);
    local()
    add_inArray()
}