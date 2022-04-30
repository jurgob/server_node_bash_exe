const isValidMacAddress = require('./check_macaddress')


describe('check VALID Mac address', () => {
    [
        '00:00:5e:00:53:af',
        '2C:54:91:88:C9:E3' 
    ].forEach((macaddr) => {
        test(`${macaddr} is a valid macaddr`, () => {
            expect(isValidMacAddress(macaddr)).toBe(true);
        });
    })

})

describe('check NOT VALID Mac address', () => {
    [
        'C%3AFD%3AA1%3A59%3A71%3A04%20',
        '2C%3AFD%3AA1%3A59%3A71%3A04%20;shutdown',
        '2C:54:91:88:C9:E3;shutdown',
        ' 2C:54:91:88:C9:E3 ',
        'shutdown;2C:54:91:88:C9:E3',
        'shutdown;2C%3AFD%3AA1%3A59%3A71%3A04%20',
    ].forEach((macaddr) => {
        test(`${macaddr} is a valid macaddr`, () => {
            expect(isValidMacAddress(macaddr)).toBe(false);
        });
    })

})


//  C%3AFD%3AA1%3A59%3A71%3A04%20