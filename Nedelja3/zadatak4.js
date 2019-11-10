const orderButtonClass ='.btn-order';
const orderButtons = document.querySelectorAll(orderButtonClass);
console.log(orderButtons);
var pizzaCount = 0;
const pizzaCounterBadge = document.querySelector('#counter');


orderButtons.forEach(button => {
    button.addEventListener('click', function () {
        selectPizza(button);
    });
});


function selectPizza(element) {
    console.log(element);
    pizzaCount++;
    pizzaCounterBadge.innerHTML = pizzaCount;
}

const naruciClasa='.btn-order-now';
const submitNow = document.querySelectorAll(naruciClasa);
console.log(submitNow);


submitNow.forEach(submitbutton => {
    submitbutton.addEventListener('click', function () {
        checkOrder(submitbutton);
    });
});

const messageId = "message";


let dateTimeNow = new Date();
    console.log(dateTimeNow);
    let date = dateTimeNow.getDate();
    let hours = dateTimeNow.getHours();
    let minutes = dateTimeNow.getMinutes();

function checkOrder(){
    if(pizzaCount==0){
        document.getElementById(messageId).innerHTML = "Greska!!! Niste narucili ni jednu picu.";
    } else if(pizzaCount>0){
        document.getElementById(messageId).innerHTML = `Narucili ste ${pizzaCount} pica. ${date}${hours}${minutes}`;
        pizzaCount = 0;
        pizzaCounterBadge.innerHTML = pizzaCount;
    }else {
        console.log("Error message");
    }
}