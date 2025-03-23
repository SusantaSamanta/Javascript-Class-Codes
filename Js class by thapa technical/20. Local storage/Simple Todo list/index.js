console.log(" working");

let i = 1;

let input = document.getElementById('addTaskInput');
let addBtn = document.getElementById('addTaskButton');
let listContainer = document.querySelector('#listContainer');
let inputArr = [];


const checkForUniqueValue = (value) =>{
    for(ele of inputArr){
        if(ele == value){       
            return true;
        }
        console.log(ele)   
    }
    return false;
} 

const actionFun = () => {
    if (input.value != '') {
        if(checkForUniqueValue(input.value)){
            alert("Please enter unique value....!");
        }else{
            let newUl = document.createElement('ul');
            inputArr.push(input.value.trim());
            localStorage.setItem("toDoSave", JSON.stringify(inputArr));
            console.log(inputArr);
            newUl.id = 'taskList';
            newUl.innerHTML = `<li class="taskItem"><div class="taskText"><p class="taskDescription">${input.value}</p><span class="deleteTask"><i class="fa-solid fa-trash"></i></span></div></li>`;
            listContainer.insertBefore(newUl, listContainer.firstChild);
        }
    }
    else {
        alert("please enter a input value....!");
    }
    input.value = '';
}

addBtn.addEventListener('click', actionFun);

const deleteItemFromArr = (ele) =>{
    let index = inputArr.indexOf(ele);
    console.log(index);
    inputArr.splice(index,1);
    localStorage.setItem("toDoSave", JSON.stringify(inputArr));

    console.log(inputArr);
}


listContainer.addEventListener("click", (event) => {
    if (event.target.closest(".deleteTask")) {
        let taskItem = event.target.closest(".taskItem");
        let taskDescription = taskItem.querySelector(".taskDescription");
        // console.log(taskDescription.innerText); 
        deleteItemFromArr(taskDescription.innerText);
        taskItem.remove();
    }
});


const restoreElement = () =>{
    let newArr = JSON.parse(localStorage.getItem("toDoSave"));
    for(ele of newArr){
        let newUl = document.createElement('ul');
            // inputArr.push(input.value.trim());
            inputArr = newArr;
            console.log(inputArr);
            newUl.id = 'taskList';
            newUl.innerHTML = `<li class="taskItem"><div class="taskText"><p class="taskDescription">${ele}</p><span class="deleteTask"><i class="fa-solid fa-trash"></i></span></div></li>`;
            listContainer.insertBefore(newUl, listContainer.firstChild);
    }
}

restoreElement();








