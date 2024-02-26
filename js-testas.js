/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
let eurai = Math.round(Math.random() * 1000)
let doleriai = konvertavimas(eurai)

function konvertavimas(eurai) {
    let kursas = 1.0831489
    let doleriai = eurai * kursas
    return doleriai
}
console.log('Eurai: ',eurai)
console.log('Doleriai: ',doleriai.toFixed(2))
/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
let Doleriai = Math.round(Math.random() * 1000)
let Eurai = Konvertavimas(Doleriai)

function Konvertavimas(Doleriai) {
    let kursas = 0.9231572
    let Eurai = Doleriai * kursas
    return Eurai
}
console.log('Doleriai: ',Doleriai)
console.log('Eurai: ',Eurai.toFixed(2))
/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
let svoris = 70
let ugis = 1.7

function skaiciuotiBMI(svoris, ugis) {
    let bmi = svoris / (ugis**2)
    return bmi
}
let bmi = skaiciuotiBMI(svoris, ugis)

function gautiBmiKategorija(bmi) {
    if (bmi > 25) {
        return 'Virssvoris'
    } else if (bmi < 18.5) {
        return 'Svoris per mazas'
    } else {
        return 'Svoris normalus'
    }
}
let bmiKategorija = gautiBmiKategorija(bmi)

console.log('Svoris:',svoris,'kg')
console.log('Ugis:',ugis,'m')
console.log('BMI: ',bmi)
console.log('BMI Kategorija: ',bmiKategorija)
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/
let amzius = 27

function skaiciuotiMetus(amzius) {
    let sekundes = amzius * 31536000
    let minutes = sekundes / 60
    let valandos = minutes / 60
    let dienos = valandos / 24

    console.log('Metai:',amzius)
    console.log('Sekundes:',sekundes)
    console.log('Minutes:',minutes)
    console.log('Valandos:',valandos)
    console.log('Dienos:',dienos)
}
skaiciuotiMetus(amzius)

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
let farenheitTemp = 90
function farenheitCelsius(farenheit) {
    let celsius = (farenheit -32) * (5/9)
    return celsius
}
let celsiusTemp = farenheitCelsius(farenheitTemp)
console.log('Farenheito laipsniai:',farenheitTemp,'Celsiaus laipsniai:',celsiusTemp.toFixed(2))


let = celsiusTemp = 24
function celsiusFarenheit(celsius) {
    let farenheit = (celsius * (9/5)) + 32
    return farenheit
}
let FarenheitTemp = celsiusFarenheit(celsiusTemp)
console.log('Celsiaus lapisniai:',celsiusTemp,'Farenheito laipsniai:',FarenheitTemp.toFixed(2))

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
let skaiciai = []
for (let i = 1; i <= 10; i++) {
    skaiciai.push(i)
} 
let masyvas = skaiciai.join('-')
console.log(masyvas)
/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
let m = 5
let string = ''
for (let i = 1; i <= m; i++) {
    for (let u = 0; u < i; u++) {
        string += '*'
    }
    string += '\n'
}
console.log(string)
/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
let vardai = ['Tomas','Dainius','Paulius','Jonas']
console.log(vardai[0]+','+vardai[1]+','+vardai[2]+','+vardai[3])
console.log(vardai[0]+'+'+vardai[1]+'+'+vardai[2]+'+'+vardai[3])

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
