let nemo = ['nemo'];
let notNemo = ['Sharkbert'];
let everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']

const findNemo = (arr) => {
    let t0 = performance.now();
    console.log(t0);
    if (arr.includes('nemo')) {
        return 'Nemo found';
    } else {
        return 'Nemo not found';
    }
}

// const findNemo = (arr) => {
//     let t0 = performance.now();
//     console.log(t0);
//     for (let item of arr) {
//         return item === 'nemo' ? 'Nemo found' : 'Nemo not found';
//     }
// }

console.log(findNemo(nemo));
console.log(findNemo(notNemo));
console.log(findNemo(everyone));

module.exports = findNemo;

