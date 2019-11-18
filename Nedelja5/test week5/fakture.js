console.log('It Works! :D');
const companyName = document.querySelector('#txt-company-name');
console.log(companyName);
const companyPib = document.querySelector('#txt-company-pib');
console.log(companyPib);
const date = document.querySelector('#txt-time');
console.log(date);
const valueInRsd = document.querySelector('#txt-value');
console.log(valueInRsd);
const insert = document.querySelector('#btn-add');
console.log(insert);
insert.addEventListener('click',insertInformations);

function insertInformations(e){
    console.log(e);
    // alert ako nisu uneta sva polja
    if(companyName.value==''||companyPib.value==''||valueInRsd.value==''||date.value==''){
        alert('You have to fill in all fields');
        return;
    }
    // pib mora da bude osmocifreni broj
    if((companyPib.value.toString().length)!==8){
        console.log(companyPib.value.toString().length);
        alert('PIB need to have 8 fild numbers!!');
        return;
    }

    // da li je pib broj
    if(isNaN(companyPib.value)==true){
        alert('PIB has to be number');
        return;
    }

    // Value mora da bude broj;
    if(isNaN(valueInRsd.value)==true){
        alert('VALUE has to be number');
        return;
    }
    
    console.log(typeof companyPib.value)
    // if((typeof companyPib.value)!=='number'){
    //     alert('PIB has to be 8 numbers');
    // }
var today = new Date();
    class faktura {
        constructor(){
            this.name = companyName.value;
            this.pib = companyPib.value;
            this.dateIssued = date.value;
            this.vaLue = valueInRsd.value;
            this.currency= 'RSD';
            this.timeStamp= today.getHours()+'-'+today.getMinutes()+'-'+today.getSeconds();
            // this.
            this.dateStamp = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        }
    }

    faktura1 = new faktura()




    
}
