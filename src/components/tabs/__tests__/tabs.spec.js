import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from '../../../tests/helpers';
import Tabs, { Tab } from '..';

describe('Tabs Component', () => {
	it('works correctly', () => {
		const handler = jest.fn();

		const { container, getAllByRole } = renderWithTheme(
			<Tabs onChange={handler}>
				<Tab title="Tab 1">
					<h2>Tab 1 Content</h2>
				</Tab>
				<Tab title="Tab 2 very very very long title">
					<h2>Tab 2 Content</h2>
				</Tab>
				<Tab title="Red">
					<div style={{ width: 100, height: 100, backgroundColor: 'red' }}></div>
				</Tab>
			</Tabs>
		);

		// render correctly:
		expect(container.querySelector('h2')).toHaveTextContent('Tab 1 Content');

		const tabs = getAllByRole('tab');

		fireEvent.click(tabs[1]);

		expect(handler).toBeCalledWith(1);
	});
});
