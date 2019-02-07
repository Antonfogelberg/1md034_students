function MenuItem(name, flavour, kCal, price, gluten, img) {
    //this.firstName = fn; // The this keyword refers to the object itself
    this.name = name;
    this.kCal = kCal;
    this.price = price;
    this.gluten = gluten;
    this.img = img;
    this.flavour = flavour;
    this.info = function() {
        return this.name + ' ' + this.kCal + ' ' + this.price +' ' + this.gluten;
    };
    this.containsGluten = function() {
        return this.gluten;
    };
}

const burgerArray = [];

for(i = 0; i<burgers.length; i++) {
    const item = burgers[i];
    const newburger = new MenuItem(item.name, item.flavour, item.kCal, item.price, item.gluten, item.img);
    burgerArray.push(newburger);
}

function samlaihopallt() {
    const customerArray = [document.getElementById('firstandlastname').value,
                           document.getElementById('street').value,
                           document.getElementById('house').value,
                           document.getElementById('email').value,
                           document.querySelector("input[name=gender]:checked").value,
                           document.getElementById('payment').value];

    const chosenburgers = document.querySelectorAll("input[name=burgerchoice]:checked");

    chosenburgers.forEach(function(item){
        customerArray.push(item.value);
    });


    return customerArray;
}


const markDone = new Vue({
    el: '#samlaihopallt',
    data:{
        output:null
    },
    methods: {
        markDone: function() {
            this.output = samlaihopallt();
            console.log(this.output);
        }
    }
});
