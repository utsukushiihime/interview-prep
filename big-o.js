let nemo = ['nemo'];
let notNemo = ['Sharkbert'];

const findNemo = (arr) => {
    let t0 = performance.now();
    console.log(t0);
    for (let arrElement of arr) {
        return arrElement === 'nemo' ? 'Found Nemo' : 'Nemo not Found';
    }
}

console.log(findNemo(nemo));
console.log(findNemo(notNemo));



