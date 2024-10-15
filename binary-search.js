/*  
    Funkcija binarySearch su dviem parametrais: list, target
    arr - priima skaičių masyvą, kuris turi būti išrikiuotas, pvz. [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    target - kokio skaičiaus ieškome, pvz. 3

    Funkcijos tikslas yra rasti "target" skaičių naudojant dvejetainės paieškos metodą, 
    kuris efektyviai sumažina paieškos apimtį perpus kiekvienos iteracijos metu.
*/
function binarySearch(arr, target) {
    /*  Pradedama su dviem kintamaisiais: first ir last
        "first" rodo masyvo pradžią ir turi reikšmę - 0
        "last" rodo masyvo pabaigą, jo reikšmė lygi "list.length - 1", nes masyvas indeksuojamas nuo 0.
        Pvz., jeigu masyvas turi 10 elementų, tai paskutinis indeksas bus 9.
    */
    let first = 0;
    let last = arr.length - 1;

    /*  Pradedmas "while" ciklas
        Ciklas kartojamas tol, kol kintamasis "first" yra mažesnis arba lygus "last"
        T.y. ciklas kartojamas tol, kol turime nesurastų elementų tarp "first" ir "last" indeksų.
    */
    while (first <= last) {
        /*  Randamas viduriniojo elemento indeksas, kuris reikalingas naudojant dvejetainę paiešką.
            Indeksas randamas naudojant formulę: (first + last) / 2.
            Math.floor naudojamas suapvalinti reikšmę žemyn iki artimiausio sveiko skaičiaus
            Pavyzdžiui, jei pirmasis = 0, o paskutinis = 99, tuomet vidurinis = (0 + 99) / 2 = 49.5, suapvalinus - 49
        */
        const midpoint = Math.floor((first + last) / 2);

        /*  Tikrinama ar viduriniojo elemento reikšmė sutampa su "target" reikšme.
            Jeigu taip, grąžinamas "midpoint" - ieškomo skaičiaus indeksas.
        */
        if (arr[midpoint] === target) {
            return midpoint;
        } else if (arr[midpoint] < target) {
            /*  Jei viduriniojo elemento reikšmė mažesnė už "target",
            tai reiškia, kad mūsų "target" yra dešinėje masyvo pusėje,
            todėl atnaujiname kintamąjį "first", kad jis rodytų po "midpoint" esantį indeksą.
        */
            first = midpoint + 1;
        } else {
            /*  Jei viduriniojo elemento reikšmė didesnė už "target",
            tai reiškia, kad mūsų "target" yra kairėje masyvo pusėje,
            todėl atnaujiname kintamąjį "last", kad jis rodytų prieš "midpoint" esantį indeksą.
        */
            last = midpoint - 1;
        }
    }

    //  Grąžinama "-1" reikšmė, jeigu "while" ciklas pasiekė pabaigą neradęs "target"
    return -1;
}

/*  Sukuriamas išrikiuotas skaičių masyvas
    NAUDOJANT DVEJETAINĘ PAIEŠKĄ MASYVAS BŪTINAI TURI BŪTI IŠRIKIUOTAS DIDĖJANČIA ARBA MAŽĖJANČIA TVARKA
*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*  Sukuriamas kintamasis ir kviečiama funkcija "binarySearch", kurios grąžinta reikšmė priskiriama kintamąjam
    Funkcijai "binarySearch" duodami argumentai: skaičių masyvas "numbers" ir skaičius, kurį norime rasti - 3 
*/
const result1 = binarySearch(numbers, 3);

// Patikrinama ar skaičius 3 yra tinkamoje vietoje
console.log(`Number at index ${result1} of an array "numbers" is ${numbers[result1]}\n`);

// Situacija, kai ieškomas skaičius masyve neegzistuoja
const result2 = binarySearch(numbers, 15);
console.log(`Number at index ${result2} is ${numbers[result2]}\n`);
