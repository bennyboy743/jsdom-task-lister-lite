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
      createTask(grabbingTheDescription,newUl)
      //attach the descripton to the list
      newUl.append(grabbingTheDescription.value)
      //show it on the list
      tasks.append(newUl)
    }
    //print to the console to show what we have
    console.log(grabbingTheDescription.value)
   
  })
  tasks.addEventListener('click', e => {
    console.log(e.target)
  })


});

const createTask = (task,parentList) => {
    const removeTask = document.createElement('button');
    removeTask.textContent = "x"
    parentList.append(removeTask)
    taskList.push(task)
    console.log(taskList)
}

const deleteTask =  (task) => {

}

const checkingTextField = (task) => {
  if(!task){return alert("you need to add a task")}
  if(task){return true}
}