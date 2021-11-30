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

let student= {id:1 , name:"burak Ulas"}
console.log(student)

function save(ogrenci){
    console.log("saved: "+ student.name)
    }

save();    

// fonksiyonda sabit değişken genellikle son parametre olark tanımlanır,
// ama aşağıdaki örnekteki gibi ilk olarak tanımlamak istiyorsak grade(undefined, student) 
// şeklinde tanımlanması gerekir

function grade(puan=86, ogrenci){
 console.log(ogrenci.name + " : "+puan)
}

grade(undefined,student);

let students= ["Burak Ulaş", "Abdullah durna","Hakan kocaarı", {city:"ankara"}]
let students2=[students, "istanbul"]

console.log(students2)

