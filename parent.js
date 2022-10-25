class mobile{
    tech = "mobile";
    network = "4G";
    battery = "lithium"


    printdetails(){
        console.log(this.battery,this.network,this.tech)
    }
    
}

class iphone extends mobile{
    brand = "iphone";
    model = "iphone 14";
    color = "silver";
    chip = "m1";
    os = "apple os"

    details(){
        console.log(this.brand,this.model,this.color,this.chip,this.os)
    }
}

var p1 = new iphone();
console.log(p1.tech,p1.network,p1.chip,p1.model)


