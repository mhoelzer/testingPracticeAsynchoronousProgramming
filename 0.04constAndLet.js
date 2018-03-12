// Boolean declaration 
const amIGood = true;

// Promise 
const iCanHasGift = new Promise(
    (resolve, reject) => { // fat arrow
        if (amIGood) {
            const gift = {
                brand: 'HasMattelbro',
                item: 'Turbo-Man action figure'
            };
            resolve(gift); 
        } else {
            const naughty = new Error("You've made Santa's naughty list; enjoy your coal!");
            reject(naughty);
        }
    }
);

// 2nd promise
const playDate = function (gift) {
    const message = "Salutations fellow child I enjoy interacting with! I notice you received a posable plastic Batman figurine during the Yultide season. What do you think of my new " + gift.brand + ' ' + gift.item + '?';
    return Promise.resolve(message);
};

// Promise call
const checkTwice = function () {
    iCanHasGift
        .then(playDate)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.naughty)); // fat arrow 
};
checkTwice();