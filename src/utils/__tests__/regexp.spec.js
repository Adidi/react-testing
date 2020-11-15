import { regexpAny, replaceMarker } from '../regexp';

describe('regexp utils', () => {
	test('function regexpAny', () => {
		const reg = regexpAny('adieloz');
		expect(reg.test('adielozokin a big string adiel oz')).toBe(true);
		expect(reg.test('adielo no name like it')).toBe(false);
	});

	test('function replaceMarker', () => {
		const onechar = 'hello from thailand how are you';
		expect(replaceMarker(onechar, 'a')).toBe(
			'hello from th<mark>a</mark>il<mark>a</mark>nd how <mark>a</mark>re you'
		);

		const str = 'string is the new design';
		expect(replaceMarker(str, 'new')).toBe('string is the <mark>new</mark> design');

		const notfound = 'some string hystack needle';
		expect(replaceMarker(notfound, 'needla')).toBe('some string hystack needle');
	});
});
