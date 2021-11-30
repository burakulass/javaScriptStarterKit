// kodlama.io JAVA kampı 10. gün

// rest spread destructure

//REST

let showProducts = function(id, ...products){
    console.log(id)
    console.log(products)
}
showProducts(5, ["elma","armut",["kavuu", "piyaav", "togagege"]])


//SPREAD bir arrayı bir bir ayırmaya yarıyor

let points = [11,78,41,63,15,59]
console.log(...points)   // arrayin birimlere parçalanmasını sağladı
                         // bu sayede içindeki sayılarla işlemler yapabileceğiz

let array_max= Math.max(...points)
console.log(array_max)
let array_min = Math.min(...points)
console.log (array_max-array_min)  

console.log(..."burak")
console.log(..."ABCD","E",..."FGH")

// DESCTRUCTURE  arrayin istediğin elemanını değişkenlere atama yöntemidir

//ana olay 79. satırdaki
let populations = [10000,20000,30000,[40000,100000]]

// örnek 1
let [small, medium, high, [veryhigh, veryveryhigh]] =populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryhigh)
console.log(veryveryhigh)

// örnek 2  fonksiyon ile destructring yapma
function someFunction([yenismall, yenimedium, yenihigh], number){  // 81. satırdaki kod yerine
    console.log(yenismall);                                        // function yöntemi ile bu şekilde
    console.log(yenimedium);                                       // yapılır.
    console.log(high)
}

someFunction(populations)
someFunction(populations)


// object ile destructirng
//        array ile destructuringden pek bir farkı yok sadece yazılışı başka

let category = {id1:1, name:"kola"}
console.log(category.id1)   // 1. şekilde yapılışı
console.log(category.name)

let {id1,name} = category  // 2. şekilde yapılışı
console.log(id1)
console.log(name)