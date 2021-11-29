console.log("Merhaba Kodlama.io")

let dolarDun = 9.20
let dolarBugun = 9.40
console.log(dolarBugun)


// var kullanmıyoruz çünkü eski ve değiştirmek istediğimizde değişmiyor
// const ise sabit kalacak değişkenler için kullanıyoruz yani nadir kullanılır
// let ise bize en uygun değişken metodudur.
// const eurodun= 15
// const eurobugun= 15.5
// const eurodun=14.98

// console.log(eurodun) // hata verdi

let konutKredileri = ["Konut Kredisi","Mağaza Kredisi","Araç Kredisi","Eğitim kredisi"]
console.log(konutKredileri)

console.log("<ul>")
for (let i=0 ;i<konutKredileri.length;i++){
 console.log("<li> "+konutKredileri[i] +" </li>")
}
console.log("</ul>")
