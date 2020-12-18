
let nemo = ['nemo'];
let notNemo = ['Sharkbert'];

const findNemo = (arr) => {
    for (let arrElement of arr) {
        if (arrElement === 'nemo') {
            return 'Found Nemo';
        } else {
            return 'Nemo not Found';
        }
    }
}

console.log(findNemo(nemo));
console.log(findNemo(notNemo));
