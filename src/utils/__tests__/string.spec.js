import { camelToHyphen } from '../string';

describe('strings utils', () => {
	test('function camelToHyphen', () => {
		expect(camelToHyphen('AlonaOz')).toBe('alona-oz');
		expect(camelToHyphen('backgroundColor')).toBe('background-color');
		expect(camelToHyphen('BorderRightRadius')).toBe('border-right-radius');
	});
});
