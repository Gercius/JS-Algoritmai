/*  Funkcija linearSearch su dviem parametrais: arr, target
    arr - priima skaičių masyvą pvz. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    target - kokio skaičiaus ieškome pvz. 3

    Funkcijos tikslas eiti per kekvieną skaičių masyve, kol randamas "target" skaičius.
*/
function linearSearch(arr, target) {
    /*  Pradedamas "for" ciklas
        let i = 0 - kintamasis "i" skirtas sekti indeksui, jam duodama reikšmė "0"
        JavaScript masyvų indeksai pradedami skaičiuoti nuo 0 

        i < arr.length - ciklas kartojamas tol, kol kintamasis "i" yra maŽesnis už masyvo "arr" ilgį
        Šiuo atveju masyvo "arr" ilgis yra 10, nes jame yra 10 elementų

        i++ - kiekvieną ciklo iteraciją kintamąjį "i" didiname vienu

        Apibendrinus - ciklas kartojamas ir kintamasis "i" didinamas vienu tol, kol "i" mažesnis už masyvo "arr" ilgį
        Jei randamas "target", ciklas nutraukiamas ir funkcija grąžina kintamojo "i" reikšmę
        Kitu atveju, grąžinama "-1"
    */
    for (let i = 0; i < arr.length; i++) {
        /*  Aprašoma sąlyga, jei randamas target, šiuo atveju - 3
            Ciklas nutraukiamas naudojant "return"
            "return" taip pat grąžina kintamojo "i" reikšmę, šiuo atveju - 2
        */
        if (arr[i] === target) {
            return i;
        }
    }
    /*  Jeigu "for" ciklas pasiekė pabaigą neradęs "target"
        T.y. masyve "arr" tokio skaičiaus nėra
        Pvz., jei "target" būtų ne 3, o 15
        Funkcija grąžina "-1" reikšmę 
        T.y. toks indeksas neegzistuoja, kadangi su -1 neįmanoma pasiekti masyvo elementų
    */
    return -1;
}

// Sukuriamas skaičių masyvas
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*  Sukuriamas kintamasis ir kviečiama funkcija "linearSearch", kurios grąžinta reikšmė priskiriama kintamąjam
    Funkcijai "linearSearch" duodami argumentai: skaičių masyvas "numbers" ir skaičius, kurį norime rasti - 3 
*/
const result1 = linearSearch(numbers, 3);

/*  Patikrinama ar skaičius 3 yra tinkamoje vietoje
    Svarbu nepamiršti, kad masyvų indeksai pradedami skaičiuoti nuo 0
    skaičius, kurio indeksas yra 0 masyve "numbers" bus 1 "numbers[0] = 1"
    skaičius, kurio indeksas yra 1 masyve "numbers" bus 2 "numbers[1] = 2"
    skaičius, kurio indeksas yra 2 masyve "numbers" bus 3 "numbers[2] = 3" ir t.t.
    
    Jeigu skaičių masyvas būtų [7, 5, 3, 6, 1, 1, 7, 8, 9, 3]
    skaičius, kurio indeksas yra 0 masyve "numbers" bus 7 "numbers[0] = 7"
    skaičius, kurio indeksas yra 1 masyve "numbers" bus 5 "numbers[1] = 5"
    skaičius, kurio indeksas yra 2 masyve "numbers" bus 3 "numbers[2] = 3" ir t.t.
*/
console.log(`Number at index ${result1} of an array "numbers" is ${numbers[result1]}\n`);

// Situacija, kai ieškomas skaičius masyve neegzistuoja
const result2 = linearSearch(numbers, 15);
console.log(`Number at index ${result2} is ${numbers[result2]}\n`);
