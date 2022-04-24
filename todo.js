let newElement = document.querySelector('#taskInput')
let form = document.querySelector('form')
let todoUl = document.querySelector('#items')
let completeUl = document.querySelector('.completeList ul')

let createElement = function(value){
    let listItem = document.createElement('li')
    let checkBox = document.createElement('input')
    let label = document.createElement('label')
    listItem.style.marginBottom = '5px'
    
  

    label.innerHTML = value
    checkBox.type = 'checkbox'
    checkBox.style.marginRight = '15px'
    
    listItem.appendChild(checkBox)
    listItem.appendChild(label)

    return listItem
}


let addElement = function(event){
    event.preventDefault()
    let listItem = createElement(newElement.value)
    todoUl.appendChild(listItem)
    newElement.value = ''

    bindInCompleteItem(listItem,completeElement)
}
let completeElement = function(){
    let listItem = this.parentNode
    let button = document.createElement('button')
    button.innerText = 'Remove'
    button.className = 'delete'
    button.style.display = 'block'
    
    listItem.appendChild(button)

    let checkBox = document.querySelector('input[type="checkbox"]')
    checkBox.remove()
    completeUl.appendChild(listItem)
    bindCompleteItem(listItem,deleteElement)
}
let deleteElement = function(){
    let listItem = this.parentNode
    let ul = listItem.parentNode
    ul.removeChild(listItem)
}

let bindInCompleteItem = function(value,checkBoxClick){
    let checkBox = value.querySelector('input[type="checkbox"]')
    checkBox.onchange = checkBoxClick
}
let bindCompleteItem = function(value,deleteClick){
    let deleteBtn = value.querySelector('.delete')
    deleteBtn.onclick = deleteClick
}

for(let i = 0; i<todoUl.children.length; i++){
    bindInCompleteItem(todoUl.children[i],completeElement)
}
for(let i = 0; i<completeUl.children.length; i++){
    bindCompleteItem(completeUl.children[i],deleteElement)
}
form.addEventListener('submit',addElement)

