let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener("click" , function(){

    if(inp.value !== ""){
        let item = document.createElement("li");
        item.innerText = inp.value;
        item.classList.add("task-item");

        // creation of delete button
        let deletBtn = document.createElement("button");
        deletBtn.innerText = "delete";
        deletBtn.classList.add("delete");

        item.appendChild(deletBtn);
        ul.appendChild(item);
        console.log(inp.value);
        inp.value = ""; // reset the inner task.
    }else{
        alert("input is empty and its not allowed!!")
    }
});


// delete the todo on click button ("Delete") | This wil work only for existing button

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){

    delBtn.addEventListener("click", function(){
        console.log("element delete");
    });
}

// TODO : event delegation to be added