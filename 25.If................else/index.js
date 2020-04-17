//if... else
// 
//syntax:
//
//if (condition) {
//  statement when true;
//} else {
//  statement when false;    
//}

//example 1: Toss a coin

function tossCoin () {
    var value = Math.random();
    if (value < 0.5) {
        console.log('Mat sap');
    }else {
        console.log('Mat ngua');
    }
}

tossCoin();

console.log ('.....................................');
//example 2 : 

function countBills(bills){
    var total = 0;
    for (var bill of bills){
        if (!bill.fake){
            total += bill.value;
        } else {
            console.log('fake bill',bill);
        }
    }
    return total;
}

var bills = [
    {value : 10000},
    {value : 20000 , fake : true},
    {value : 20000},
    {value : 500000}
]

var total = countBills(bills);
console.log(total);