var i = 1;
    for(var n=5;n>0;n--) {
        let piramidLevel= (' '.repeat(n-1))+('#'.repeat(i)+' '+'#'.repeat(i));
        console.log(piramidLevel);
        i++;
    }