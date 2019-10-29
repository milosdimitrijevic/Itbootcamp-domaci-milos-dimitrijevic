function isNumberDividebleBy3(someNumber) {
    if(someNumber !== 0 && (someNumber%3)==0) {
        console.log(`Број ${someNumber} је дељив са 3`);
    } else {
        console.log(`Број ${someNumber} није дељив са 3`);
    }
};

isNumberDividebleBy3(5);
isNumberDividebleBy3(9);
isNumberDividebleBy3(0);

