import { useEffect } from 'react';

export const useEscapeKeyDown = (callback) => {
	useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === 'Escape') {
				callback();
			}
		};
		window.addEventListener('keydown', handleEscape);
		return () => {
			window.removeEventListener('keydown', handleEscape);
		};
	}, [callback]);
};
