export const camelToHyphen = str =>
	str.replace(/[A-Z]+/g, (m, i) => {
		return `${i !== 0 ? '-' : ''}${m.toLowerCase()}`;
	});
