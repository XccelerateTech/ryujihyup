const Jedi = require('./starwars').Jedi;
const Sith = require('./starwars').Sith;
const duel = require('./starwars').duel;

describe('starwars duel', () => {
    var fake1;
    var fake2;

    beforeEach(() => {
        fake1 = new Jedi("Obiwan Kenobi", 10, 111);
        fake2 = new Sith("Anakin Skywalker", 10, 111);

    });

    test('Attack', () => {
        const fake1Attack = jest.spyOn(fake1, 'attack').mockImplementation(()=>{console.log('Fake1 Attack')});
        const fake2Attack = jest.spyOn(fake2, 'attack').mockImplementation(()=>{console.log('Fake2 Attack')});

        duel(fake1, fake2)

        expect(fake1Attack).toHaveBeenCalledTimes(6);
        expect(fake1Attack).toHaveBeenCalledWith(fake2)
        
        expect(fake2Attack).toHaveBeenCalledTimes(6);
        expect(fake2Attack).toHaveBeenCalledWith(fake1)
    })

    test('Injure and Dead', () => {
        const fake1Injure = jest.spyOn(fake1, 'injure').mockImplementation(()=>{console.log('Fake1 got injured')});
        const fake2Injure = jest.spyOn(fake2, 'injure').mockImplementation(()=>{console.log('Fake2 got injured')});
        const fake2Dead = jest.spyOn(fake2, 'dead').mockImplementation(()=>{console.log('Fake2 is dead now')});

        duel(fake1, fake2)

        
        expect(fake1Injure).toHaveBeenCalled();
        expect(fake2Injure).toHaveBeenCalled();
        expect(fake2Dead).toHaveBeenCalledTimes(1);
        expect(fake2.dead).toBeTruthy();
    })
});

