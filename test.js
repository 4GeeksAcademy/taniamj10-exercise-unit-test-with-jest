// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})
test("dollar to yen", function () {
    const { fromDollarToYen } = require('./app.js');
    const yen= fromDollarToYen(6.2);
    const expected= (6.2/ 1.2)* 127.9;
    expect(yen).toBe(expected);
})
test("yen to pound", function (){
    const { fromYenToPound}= require('./app.js');
    const pound= fromYenToPound(4.2);
    const expected= (4.2/127.9)*0.8;
    expect(pound).toBe(expected);
})