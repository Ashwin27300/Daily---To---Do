
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleString();


let save = document.getElementsByClassName('save')[0]
let taskBox = document.getElementsByClassName('TaskBox')[0]
let taskinput = document.getElementById("taskinput")


// function save button

save.addEventListener('click' , () => {
  let currentTask = taskinput.value

  if (currentTask == '') {
      alert("Enter To Do")
  }else{
    let outerBox = document.createElement('container')
    let textinput = document.createElement('h3')


    
    let editbtn = document.createElement('button')
    editbtn.innerText = "Edit To do"

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "I Did It"


    textinput.innerText = currentTask

    outerBox.appendChild(textinput)


    outerBox.appendChild(editbtn)
    outerBox.appendChild(deleteBtn)



    console.log(textinput)
    deleteBtn.addEventListener('click' , deletefns)

    editbtn.addEventListener('click' , editfns)
    taskBox.appendChild(outerBox)

    function deletefns() {
      outerBox.remove()
    }
    function editfns(){
      let newTask = prompt('ENTER NEW TO DO')
      textinput.innerText = newTask
      console.log(newTask)
    }
    
    taskinput.value=''

  }


  })