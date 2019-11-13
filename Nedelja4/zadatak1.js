var recept0 = {
    imeRecepta: 'kajgana',
    tezinaRecepta: 'pocetni',
    sastojci: ['ulje', 'jaja', 'so']
}
var recept1 = {
    imeRecepta: 'Omlet s sunkom',
    tezinaRecepta: 'lak',
    sastojci: ['ulje', 'jaja', 'sunka', 'so']
}

var recept2 = {
    imeRecepta: 'burek s mesom',
    tezinaRecepta: 'srednji',
    sastojci: ['ulje', 'kore', 'mleveno meso', 'crni luk', 'so']
}

var recept3 = {
    imeRecepta: 'pica',
    tezinaRecepta: 'tezak',
    sastojci: ['ulje', 'jaja', 'brasno', 'sunka', 'kackavalj', 'pecurke', 'so', 'kecap']
}

var recept4 = {
    imeRecepta: 'sarma',
    tezinaRecepta: 'majstor',
    sastojci: ['ulje', 'crni luk', 'mleveno meso', 'pirinac', 'so', 'biber', 'kupus', 'slanina'],

}

function ispisivanjeRecepta(recept) {
    console.log(recept.imeRecepta + ':');
    console.log('tezina: ' + recept.tezinaRecepta);

    let sabraniNizSastojaka = 'Sastojci: ';
    let duzinaNizaSastojaka = recept.sastojci.length;
    for (i = 0; i < (duzinaNizaSastojaka - 1); i++) {
        sabraniNizSastojaka += recept.sastojci[i] + ',';
    }
    sabraniNizSastojaka += recept.sastojci[i];
    console.log(sabraniNizSastojaka);
    
}

ispisivanjeRecepta(recept0);
ispisivanjeRecepta(recept1);
ispisivanjeRecepta(recept2);
ispisivanjeRecepta(recept3);
ispisivanjeRecepta(recept4);