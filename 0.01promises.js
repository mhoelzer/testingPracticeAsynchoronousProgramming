// Boolean declaration 
var amIGood = true;
// Promise 
var iCanHasGift = new Promise(
    function (resolve, reject) {
        if (amIGood) {
            var gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); // fulfilled 
        } else {
            var naughty = new Error("You've made Santa's naughty list; enjoy your coal!");
            reject(naughty); // rejected
        }
    }
);

// standard promise
// new Promise(/* executor */ function (resolve, reject) {...} );

// Promise call 
var checkTwice = function () {
    iCanHasGift
        .then(function (fulfilled) {
            // nice list = gift
            console.log(fulfilled);
        // output: { brand: 'HasMattelbro', item: 'Turbo-Man action figure'} 
        })
        .catch(function (error) {
            // naughty list = coal
            console.log(error.naughty);
        // output: "You've made Santa's naughty list; enjoy your coal!"
        });
};
checkTwice();
