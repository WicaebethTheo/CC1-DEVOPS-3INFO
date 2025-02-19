// tests/index.test.js
describe('Basic HTML Tests', () => {
    test('HTML file exists', () => {
        const fs = require('fs');
        expect(fs.existsSync('./index.html')).toBe(true);
    });
});
