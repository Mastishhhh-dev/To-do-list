const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");


function addTask(){

if(inputBox.value === ''){
    alert("Enter Some Data")
}else{

    let li= document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);


        let span = document.createAttribute.Element("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)

}
    inputBox.value = "";
    saveTask();

}

listContainer.addEventListener("click",function(e){



    if(e.target.tagName=== "Li"){
        e.target.classList.toggle("checked");
        saveTask();

    }else if(e.target.tagName=== "Li"){
        e.target.parentElement.remove();
        saveTask();
    }
})

function saveTask(){

    localStorage.setItem("data",listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}