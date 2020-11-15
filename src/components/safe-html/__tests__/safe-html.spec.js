import React from 'react';
import { render } from '@testing-library/react';
import SafeHTML from '../safe-html';

describe('SafeHTML Component', () => {
	it('sanitize dangerous code', () => {
		const dangerousHTMLString =
			'<script>alert(document.cookie)</script> Hello man <span>This is safe</span>';
		const { container } = render(<SafeHTML html={dangerousHTMLString} />);

		// sanitize bad html
		expect(container.querySelector('script')).toBeNull();

		// keep the safe html
		expect(container.querySelector('span')).toHaveTextContent('This is safe');
	});

	it('render as something else', () => {
		const dangerousHTMLString =
			'this  dangerous code <script>alert("luli");</script>yo yo<div class="divy">Adidi</div>';

		const { container } = render(
			<SafeHTML as="a" href="https://www.behived.com" html={dangerousHTMLString} />
		);

		// sanitize the script
		expect(container.querySelector('script')).toBeNull();

		// be anchor tag with
		const anchor = container.querySelector('a');
		expect(anchor).toHaveAttribute('href', 'https://www.behived.com');
		expect(anchor).toHaveTextContent('Adidi');
	});
});
