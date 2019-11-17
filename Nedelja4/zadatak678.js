const addTaskButton=document.querySelector('#btn-add');
const taskListContainer=document.querySelector('#tasks-container');
console.log(taskListContainer);
console.log(addTaskButton);
 
console.log(addTaskButton.parentElement);
console.log(addTaskButton.parentNode);
 
addTaskButton.addEventListener('click',btnAddClick);
function btnAddClick(e){
    console.log(e);
    console.log(e.target);
 
    let txtBox=document.querySelector('#txt-title');
    console.log(txtBox);    
   
    let text=txtBox.value;
    if(text==""){
        alert('Task Title can not be empty!');
        return;
    }
 
    console.log(text);
 
    let itemContainer=document.createElement("div");
    console.log(itemContainer);
    itemContainer.className='task-item';
   
    let itemText=document.createElement('p');
    itemText.innerHTML=text;
    itemText.className='task-title';
    console.log(itemText);
 
    let checkContainer=document.createElement('div');
    checkContainer.className='task-check';
   
    let removeBtn=document.createElement('button');
    removeBtn.className='task-remove-btn';
    removeBtn.addEventListener('click',removeTask);
    removeBtn.innerHTML='X';
 
    let chkDone=document.createElement('input');
    chkDone.type='checkbox';
    chkDone.className='chk-state';
    chkDone.value='done';
    chkDone.addEventListener('change',handleCheckChange);
 
    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);
 


    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
 
    taskListContainer.appendChild(itemContainer);
 
}
 
function removeTask(e){
    console.log(e);
    console.log(e.target);
    let btnToRemove= e.target;
    let divToRemove= btnToRemove.parentElement.parentElement;
    console.log(divToRemove);
    divToRemove.remove();


}
 
function handleCheckChange(e){
    console.log(e);
    let chkBox=e.target;
    if(chkBox.checked){
        chkBox.parentElement.parentElement.style.textDecoration='striketrough';
    }else{
        // let checkContainer=chkBox.parentElement;

        // let chec
        chkBox.parentElement.parentElement.style.textDecoration='none';

    }

}

const btnRemoveSelected = document.querySelector('#btn-remove-selected');
console.log(btnRemoveSelected);
btnRemoveSelected.addEventListener('click',removeAllSelectedItems);
function removeAllSelectedItems(e){
    console.log(e);
    var allSelectedElements = document.querySelectorAll('.chk-state');
    console.log(allSelectedElements);
    allSelectedElements.forEach(element => {if(element.checked){
        element.parentElement.parentElement.remove();}
    })
        }
    

        const invertButton = document.querySelector('#btn-ivert');
        invertButton.addEventListener('click',invertAllChekbox);
        function invertAllChekbox(e){
            console.log(e);
            var allParagraphs = document.querySelectorAll('.chk-state');
            console.log(allParagraphs);
            allParagraphs.forEach(element => {if(element.checked){
                element.checked=false;
            }else if(element.checked==false){
                element.checked=true;
            }
        })
        }

    
    



// let chkDone=document.createElement('input');
// chkDone.type='checkbox';
// chkDone.className='chk-state';
// chkDone.value='done';
// chkDone.addEventListener('change',handleCheckChange);
