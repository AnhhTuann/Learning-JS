/*
    if ...........else if ........... else
    Syntax :
    if (condition1) {
        statement1;
    } else if (condition2) {
        statement2;
    } else {
        statement3;
    }
*/ 
/*
    example :calculate bus ticket fee
    -if age < 15 , discount 20%
    -if age > 60 , discount 10%
    -otherwise 10000/ticket
*/

function busTicketFee (person){
    var baseTicket = 10000;
    if (person.age < 15) {
        return 10000 * 0.8;
    } else if (person.age > 60) {
        return 10000 * 0.1;
    } else {
        return baseTicket;
    }
}

var person = {
    age:14
}

var fee = busTicketFee(person);
console.log(fee);