import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../../tests/helpers';
import ToggleTag from '../toggle-tag';

describe('ToggleTag Component', () => {
	it('works correctly', () => {
		const handler = jest.fn();

		const { container } = renderWithTheme(
			<ToggleTag checked={false} onChange={handler}>
				Behived
			</ToggleTag>
		);

		// render correctly:
		expect(container).toHaveTextContent('Behived');
		const button = container.querySelector('button');
		expect(button).toHaveStyleRule('background-color', '#fff');

		fireEvent.click(button);
		expect(handler).toBeCalled();
		expect(handler).toBeCalledWith(true);
	});
});
