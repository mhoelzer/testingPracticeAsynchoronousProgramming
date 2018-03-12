// Boolean declaration 
var amIGood = false;
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

/* // promise 2
var playDate = function (gift) {
    return new Promise(
        function (resolve, reject) {
            var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';

            resolve(message); 
        }
    );
};
// ^^^ reject wasnt called cause it's optional */
// promise 2; refactored with promise.resovle 
var playDate = function (gift) {
  var message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';
  return Promise.resolve(message);
};


// Promise call
var checkTwice = function () {
    console.log('before Christmas'); // 1 log before
    iCanHasGift
        .then(playDate) // 3
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error) {
            console.log(error.naughty)
        });
    console.log('after opening gifts'); // 2 log after
}
checkTwice();
