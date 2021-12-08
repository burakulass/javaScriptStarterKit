function findPrime(...numbers) {
    numbers.forEach(number => {
        let isPrimeNumber = true;

        if (number <= 1) {
            isPrimeNumber = false
        }

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrimeNumber = false
            }
        }

        if (isPrimeNumber == false) {
            console.log(number + " is not a prime number.")
        }
        else if (isPrimeNumber == true) {
            console.log(number + " is a prime number.")
        }
    })
}

findPrime(0,3,7,55,111,456,777,911,529)


// Arkadaş sayılar

function isFriendNumbers(x,y){
    let toplamx=0
    let toplamy=0
    let i
for (i=1; i<x; i++){
  if(x % i == 0){ toplamx= toplamx+i}

}

for (i=1; i<y; i++){
    if(y % i == 0){ toplamy= toplamy+i}
  
}
console.log(`${x}'in bölenlerinin toplamı: ${toplamx}; ve ${y}'in bölenlerinin toplamı: ${toplamy} `)
if (x==toplamy && y==toplamx){console.log(`Bu yüzden ${x} ve ${y} arkadaş sayılardır.`) }
else{ console.log(`Bu yüzden ${x} ve ${y} arkadaş sayı değillerdir.`)}

}
isFriendNumbers(220,284)

//https://www.bilisimogretmeni.com/visual-studio-c/c-ornekleri-arkadas-sayi-bulma-console-uygulamasi.html
//den uyarlanmıştır.


// Mükemmel sayılar

function findPrimeLimit(limit) {

    for (let i = 2; i < limit; i++) {
        let count = 0;
        for (let x = 2; x < i; x++) {
            if (i % x == 0) {
                count++;
            }
        }
        if (count == 0) {
            console.log(i)
        }
    }
}
//findPrimeLimit(1000)


function asalSayiKontrol(bitis){
    var asalDizi = [];
    for(var i = 2; i <= bitis; i++){
        var asalKontrol = true;
        for(var j = 2; j<= i; j++ ){
            if (i != j && i % j == 0){
                asalKontrol = false;
                
                break;
            }
        }
        if ( asalKontrol ){
            asalDizi.push( i );
        }
    }
    return asalDizi;
}
 

console.log(...asalSayiKontrol(1000))

//https://www.vyz.gen.tr/javascript-ile-iki-sayi-arasindaki-asal-sayilari-bulma
//dan alındı

