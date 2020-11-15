import { lighten } from '../color';

describe('regexp utils', () => {
	test('function color', () => {
		expect(lighten('#ff0000', 0.8)).toBe('#FFCCCC');
		expect(lighten('blue', 0.2)).toBe('#3333FF');
	});
});
