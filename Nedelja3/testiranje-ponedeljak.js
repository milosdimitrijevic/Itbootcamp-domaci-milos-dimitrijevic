// zadatak broj 1
{
    let k=5;
    let n=10;
    let zbir = 0;
for(let a = 0; a<=n; a++) {
    zbir += (((-1)**a)*((a+1)/(k+a)))
}
console.log(zbir);
}

// zadatak broj 2
{
let m = 3;
let n = 81;
let zbirBrojeva=0;
let brojBrojeva =0;
for(m; m<=n; m++) {
    if(m%7==0) {
        zbirBrojeva +=m;
        brojBrojeva ++;
    }
}
console.log(zbirBrojeva/brojBrojeva);
}

// zadatak 3
{
let n=4;
var b= 1;
console.log(' '.repeat(n-1)+'*');
for(let a=2; a<=n; a++){
    console.log(' '.repeat(n-a)+'*'+' '.repeat(b)+'*');
    b+=2;
}
var f = b-4;
let d = 1;
for(let c=n-2; c<n; c++){
    
    console.log(' '.repeat(d)+'*'+' '.repeat(f)+'*');
    d++;
    f-= 2;
    

}
console.log(' '.repeat(n-1)+'*');


}
// zadatak 4 
{
    let novDatum = new Date();
    console.log(novDatum);
}


