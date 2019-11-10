// day 3 homework number 1


function arrayNumbersDividebleBy5(arr) {
    let n = arr.length;
    let writeArrby5 = [];
    for(let i=0; i<n; i++) {
        if((arr[i]%5)==0){
            writeArrby5.push(arr[i]);
        }
    }
    console.log(writeArrby5);
}

arrayNumbersDividebleBy5([1,3,5,15,20]);


// day 3 homework number 2

// lifeSupply(10,26) // Враћа 8880
// console.log(lifeSupply(10,26)) // Исписује 8880

function lifeSupply(pizzaNumberPerMonth,yourAge) {
    return (100-yourAge)*12*pizzaNumberPerMonth;
}

console.log(lifeSupply(10,26));



