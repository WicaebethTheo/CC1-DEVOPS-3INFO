import { existsSync } from 'fs';

describe('Basic HTML Tests', () => {
    test('HTML file exists', () => {
        expect(existsSync('./index.html')).toBe(true);
    });
});
