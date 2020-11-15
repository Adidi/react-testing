import React from 'react';
import { replaceMarker } from '../../utils/regexp';
import SafeHTML from '../safe-html';

const Marker = ({ text, markText }) => {
	if (!markText) {
		return text;
	}

	const html = replaceMarker(text, markText);

	return <SafeHTML html={html} />;
};

export default Marker;
