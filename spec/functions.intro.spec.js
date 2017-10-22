const functionsIntro = require('../functions.intro');

describe(`Functions intro.`, () => {
    describe(`#greeter`, () => {
        const greeter = functionsIntro.greeter;


        const defaultFirstName = 'Name';
        const defaultLastName = 'Surname';

        const firstName = 'John';
        const lastName = 'Doe';

        it(`should greet user with the first and last name`, () => {
            expect(greeter(firstName, lastName))
                .toBe(`Greeting ${firstName} ${lastName}`, `Ooops! Looks like you've greeted another person`)
        });

        it('should have default first name', () => {
            expect(greeter(undefined, lastName))
                .toBe(`Greeting ${defaultFirstName} ${lastName}`, `Ooops! Looks like you didn't set default first name`)
        });

        it('should have default last name', () => {
            expect(greeter(firstName))
                .toBe(`Greeting ${firstName} ${defaultLastName}`, `Ooops! Looks like you didn't set default last name`)
        })
    });

    describe('#division', () => {
        const division = functionsIntro.division;

        it(`should divide dividend by divisor`, () => {
            expect(division(4, 2)).toBe(2, 'Oops. Incorrect division result')
        });

        it(`should print "Dividend is 0" and return 0 when divident is 0`, () => {
            spyOn(console, 'log');

            expect(division(0, 2)).toBe(0, 'Oops. Incorrect division result');
            expect(console.log).toHaveBeenCalledWith('Dividend is 0');
        });

        it('should print "Divisor is 0" and return undefined when divisor is 0', () => {
            spyOn(console, 'log');

            expect(division(undefined, 0)).not.toBeDefined('Oops. You shouold return undefined when division is impossible');
            expect(console.log).toHaveBeenCalledWith('Divisor is 0');
        });

        it('should print "Please provide 2 numbers" and return undefined when dividend is not a number', () => {
            spyOn(console, 'log');

            expect(division(undefined, 1)).not.toBeDefined('Oops. You shouold return undefined when dividend is not a number');
            expect(console.log).toHaveBeenCalledWith('Please provide 2 numbers');
        });

        it('should print "Please provide 2 numbers" and return undefined when divisor is not a number', () => {
            spyOn(console, 'log');

            expect(division(1)).not.toBeDefined('Oops. You shouold return undefined when divisor is not a number');
            expect(console.log).toHaveBeenCalledWith('Please provide 2 numbers');
        });
    })
});
