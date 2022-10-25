class iphone{
    Brand = "Apple";
    model = "iphone 14";
    quantity = 9;
    price = 100000;

    printDetails(){
        console.log(this.Brand,this.model,this.quantity,this.price)
    }

    totalprice(){
        console.log(this.quantity*this.price)
    }
}

var a1 = new iphone()
a1.printDetails();
a1.totalprice();