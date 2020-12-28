const notNemo = ['bob'];
const foundNemo = ['bob', 'nemo', 'olive']

const findNemo = (arr) => {
    if (arr.includes('nemo')) {
        return true;
    } else {
        return false;
    }
}

console.log(findNemo(notNemo));
console.log(findNemo(foundNemo));
module.exports = findNemo;
