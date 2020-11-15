import React from 'react';
import { filterXSS } from 'xss';
import Container from './safe-html.style';

const SafeHTML = ({ html, as, ...rest }) => {
	return (
		<Container
			as={as}
			dangerouslySetInnerHTML={{
				__html: filterXSS(html)
			}}
			{...rest}
		/>
	);
};

export default SafeHTML;
