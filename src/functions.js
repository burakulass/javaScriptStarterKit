function addToCart(productName="Elma", quantity) {
    console.log("Sepetinize eklendi: " + productName+" adet: "+ quantity)
}

addToCart("üzüm","3") // fonksiyonun içerisindeki değeri değil buradaki değeri alır.


// parametredeki değeri kullanmak istiyosak
// aşağıdaki gibi tanımlanmışları sona alıp, tanımlanmamışları başa alabiliriz
//                 (productName)                (quantity)


function addToCart(quantity, productName="Elma") {
    console.log("Sepetinize eklendi: " + productName+" adet: "+ quantity)
}
addToCart(23)


let sayHello = (name, id )=>{
    console.log("hello "+name+" your id is: "+id)
}
sayHello("burak",123)


// object ile fonksiyon oluşturma

let product1 = { productName:"elma", quantity:5, unitPrice:3}

function addToCart1(urunler) {
    console.log("ürünün adı: "+ urunler.productName+" ,adedi: "+ urunler.quantity+" ,birim fiyatı: "+ urunler.unitPrice)
}
addToCart1(product1)

let ayakabı= {first:"adidas", second:"nixxe",badqualified:"mixxe"}

function findQualities(markalar){
    console.log("<ul>")
    console.log( "<li>"+" en kaliteli ayakkabı: "+ markalar.first+"</li>")
   console.log( "<li>"+"  orta kaliteli ayakkabı: "+ markalar.second+ " </li>")
   console.log( "<li>"+ " en kalitesiz ayakkabı: "+ markalar.badqualified+"</li>")
   console.log("</ul>")
  

}

findQualities(ayakabı)

let sayı1 =10
let sayı2=20
sayı1 = sayı2
sayı2 = 100
// sayı1 kaçtır?
console.log(sayı1)  // 20 çıktı çünkü
                    // sayı1 değerini 20 ye atadı ve sayı2 değerini
                    // 100 yaptıktan sonra bir değişiklik yapmadı.

let sayı3 =10
let sayı4 = 75
sayı3= sayı4
sayı3=50
// sayı4 kaçtır
console.log(sayı4)


