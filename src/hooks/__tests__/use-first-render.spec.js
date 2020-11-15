import { renderHook } from '@testing-library/react-hooks';
import useFirstRender from '../use-first-render';

describe('Hooks', () => {
	test('should use counter', () => {
		const { result, rerender } = renderHook(() => useFirstRender());
		expect(result.current).toBe(true);
		rerender();
		expect(result.current).toBe(false);
	});
});
