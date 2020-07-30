const todoInput = document.querySelector("#toDo_input");
const todoButton = document.querySelector(".toDo_button");
const todoList = document.querySelector(".ToDo_list");



//event listener on button////
todoButton.addEventListener("click" , addTodo);
todoList.addEventListener("click" , deleteTodo);
todoList.addEventListener("click" , congratsTodo);


//funtion to add to do ///
function addTodo(event){
event.preventDefault();

const listDiv = document.createElement("div");
listDiv.classList.add("list-div");

const newTask = document.createElement("li");
newTask.innerText = todoInput.value;
newTask.classList.add("list-item"); 

listDiv.appendChild(newTask);

///check mark button///

const checkButton = document.createElement("button");
checkButton.innerHTML = '<i class="far fa-check-square"></i>'
checkButton.classList.add("finish-todo");
listDiv.appendChild(checkButton);

//trash button///
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class="fas fa-trash"></i>'
trashButton.classList.add("trash-todo");
listDiv.appendChild(trashButton);

//apend this div to the actual list 

todoList.appendChild(listDiv);

}


//function to delete a todo///
function deleteTodo(e){
const item = e.target;

if(item.classList[0] === "trash-todo"){
const listDiv = item.parentElement;
listDiv.classList.add("fall");

listDiv.addEventListener("transitionend", function (){
listDiv.remove();
})};


if(item.classList[0] === "finish-todo"){
const listDiv = item.parentElement;
listDiv.classList.toggle("complete");
}};


function congratsTodo(e){
const item = e.target;
    
if(item.classList[0] === "finish-todo"){

var message = [
    "ooooh well done!",
    " you are killing it today!",
    " YAAAS Get It Done Hun"
]


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
    //The maximum is inclusive and the minimum is inclusive 

}

Toastify({
    text: message[getRandomIntInclusive(0, 2)] ,
    duration: 3000, 
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: 'left', // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
    onClick: function(){} // Callback after click
  }).showToast();

}
};

    



// const randomNo = Math.round(Math.random () *  3) 

