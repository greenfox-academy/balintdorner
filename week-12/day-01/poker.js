'use strict';

const straightChecker = function(number) {
    let isStraight = true;

    for(let i = 0; i < number.length-1; i++) {
        if (number[i+1] !== number[i]+1) {  
            isStraight = false;
        }
    }
    return isStraight
}

const flushChecker = function(type) {     
    let isFlush = true;
   
    for(let i = 0; i < type.length-1; i++) {
        if (type[i+1] !== type[i]) {  
            isFlush = false;
        }
    }
    return isFlush
}

const pokerChecker = function(number) {
    let isPoker = true;
    let card;
    let obj = {};
    let poker = false;
    let drill = false;
    let pair = false;
    let handType = '';

    
    number.forEach(function (card) {
        if (card in obj) {
            obj[card]++;
        } else {
            obj[card] = 1;
        }
    });

    for(var key in obj) {
    var value = obj[key];
    if( value === 4) {
        poker = true;
    } else if(value === 3) {
        drill = true;
    } else if( value === 2) {
        pair = true;
    }
    if(poker === true) {
        handType = 'poker';
    } else if( drill === true && pair === true) {
        handType = 'full';
    } else if( drill === true && pair === false) {
        handType = 'drill';
    } else if( drill === false && pair === true && Object.keys(obj).length === 3) {
        handType = 'two pairs';
    } else if( drill === false && pair === true && Object.keys(obj).length === 4) {
        handType = 'pair';
    }
}
console.log(handType)
}

pokerChecker([5,4,2,2,2])


const logic = function(hand1) {
    let number = [];
    let type = [];
    let handType = '';
     hand1.forEach(function(e) {
        number.push(e.slice(0, 1));
        type.push(e.slice(1));    
    })

    number = number.sort();
    number.forEach(function(e, i) {
        number[i] = parseInt(e)
    })

    if(straightChecker(number) && flushChecker(type)) {
        handType = 'straightflush'
    }

    if(straightChecker(number) && !flushChecker(type)) {
        handType = 'straight'
    }

    if(!straightChecker(number) && flushChecker(type)) {
        handType = 'flush'
    }
    return handType
}

logic(["5H", "3H", "4H", "2H", "6H"])



/*  Magas lap
    Par
    Ket Par
    Drill
    Sor
    Flush
    Full
    Poker
    Straight flush
*/

module.exports = logic;