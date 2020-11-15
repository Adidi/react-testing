export const escapeRegExp = text => {
	return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

export const regexpAny = (str, global = false) =>
	new RegExp('(' + escapeRegExp(str) + ')', `i${global ? 'g' : ''}`);

export const replaceMarker = (value, str) => value.replace(regexpAny(str, true), '<mark>$1</mark>');
