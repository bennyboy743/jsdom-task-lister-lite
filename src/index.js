const taskList = []

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //grab the task form 
  const taskForm = document.getElementById('create-task-form');
   //grabbing the text from the Description
   let grabbingTheDescription = taskForm.elements["new-task-description"];
  //grabbing the task ul 
  const tasks = document.getElementById('tasks')
  taskForm.addEventListener('submit',e => {
    //stop the page from crashing 
    e.preventDefault()
    let checkingIfThereIstext = checkingTextField(grabbingTheDescription.value)
    if(checkingIfThereIstext) {
      //make a list new list each time we submit
      const newUl = document.createElement('li');
      //attach the descripton to the list
      newUl.append(grabbingTheDescription.value)
      //create the task
      createTask(grabbingTheDescription,newUl)
      grabbingTheDescription.value = " "
      //show it on the list
      tasks.append(newUl)
    }
    //print to the console to show what we have
    console.log(grabbingTheDescription.value)
   
  })
  tasks.addEventListener('click', function(e) {
    if(e.target.nodeName === "BUTTON") {
      if(e.target.id === "description"){
        deleteTask(e)
        return
      }
      if(e.target.id === "check-mark"){
        makeAsDone(e)
        console.log("making as done ")
        return
      }
    }
  });


});

const createTask = (task,parentList) => {
    const removeTask = document.createElement('button');
    const doneTask = document.createElement('button');
    doneTask.id = "check-mark"
    doneTask.textContent = "✔"
    removeTask.id = "description"
    removeTask.textContent = "x"
    parentList.append(removeTask)
    parentList.append(doneTask)
    taskList.push(task)
    console.log(taskList)
}

const deleteTask =  (e) => {
  let item =  e.target.parentNode;
      item.remove()
}

const makeAsDone = (e) => {
  let item = e.target.parentNode
  if(item.style.textDecoration == 'line-through'){
    item.style.textDecoration = 'none'
  }else{
    item.style.textDecoration = 'line-through'
  }

}

const checkingTextField = (task) => {
  if(!task){return alert("you need to add a task")}
  if(task){return true}
}