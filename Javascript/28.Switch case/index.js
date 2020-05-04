/*
    switch .... case 
    syntax :
    switch (expression1) {
        case value1: 
            //do something;
            break;
        case value2:
            //do something;
            break;
        ...
        defaut: 
            //do something;
            break;
    }
*/

/*
    example : bronze , silver , gold
    bronze : 2%
    silver : 5%
    gold : 8%
    diamond : 10%

*/

var memberCard = {
    tier: 'silver'
};

function getMemberCard(price, card){
    var discountRate;

    switch(card.tier){
        case 'bronze': 
            discountRate = 0.02;
            break;
        case 'silver': 
            discountRate = 0.05;
            break;
        case 'gold': 
            discountRate = 0.08;
            break;
        case 'diamond': 
            discountRate = 0.1;
            break;  
    }
    return price* (1-discountRate);
}

var total = getMemberCard(50000, memberCard);
console.log(total);