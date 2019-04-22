const sum = require('./app').sum;
describe('My first Jest Test specifications, sum', () => {

    test('I am in the test block 1', ()=>{

        expect(sum(1,2)).toBe(3);

});

   test('I am in the test block 2', ()=>{


});
   test('I am in the test block 3', ()=>{

        expect(sum(5,5)).toBe(10);

});
   test('I am in the test block 4', ()=>{


});
   test('I am a test block and a can throw and error.', ()=>{

    throw new Error();

});

});