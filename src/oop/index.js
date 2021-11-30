// kodlama.io JAVA KAMPI 10. gün dersinden https://www.kodlama.io/courses/1332369/lectures/32833622

class Customers {
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer21 = new Customers(21, "21455")
console.log(customer21.id)
console.log(customer21.customerNumber)


class privateCustomers extends Customers{
    constructor(name,id,customerNumber){
        super(id,customerNumber)
        this.name = name
    }
}

class comporateCustomers extends Customers {
    constructor(companyName, id, customerNumber)
    {
        super(id, customerNumber)
        this.companyName = companyName
    }
}

