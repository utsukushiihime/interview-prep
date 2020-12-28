const findNemo = require('./findNemo');

test('find no nemo in array', () => {
    const notNemo = ['bob'];
    expect(findNemo(notNemo)).toBeFalsy();
});

test('find nemo in array', () => {
    const foundNemo = ['bob', 'nemo', 'olive'];
    expect(findNemo(foundNemo)).toBeTruthy();
});
