import React from 'react';
import { render } from '@testing-library/react';
import Marker from '../marker';

describe('Marker Component', () => {
	it('sanitize dangerous code', () => {
		const { container } = render(<Marker text="alona ozana alona oz" markText="alona" />);

		const markers = container.querySelectorAll('mark');
		expect(markers.length).toBe(2);
		expect(markers[0]).toHaveTextContent('alona');
	});
});
