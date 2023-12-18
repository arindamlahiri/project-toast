import React, { useCallback, useMemo, useState } from 'react';
import { useEscapeKeyDown } from '../../hooks/useEscapeKeyDown';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toastMessages, setToastMessages] = useState([]);

	const onToastAdd = useCallback(
		(message, variant) => {
			setToastMessages([
				...toastMessages,
				{ id: crypto.randomUUID(), message, variant }
			]);
		},
		[toastMessages]
	);

	const onToastDismiss = useCallback(
		(id) => {
			const newMessages = [...toastMessages];
			const index = newMessages.findIndex((msg) => msg.id === id);
			if (index > -1) {
				newMessages.splice(index, 1);
			}
			setToastMessages(newMessages);
		},
		[toastMessages]
	);

	useEscapeKeyDown(() => {
		setToastMessages([]);
	});

	const value = useMemo(() => {
		return {
			toastMessages,
			onToastAdd,
			onToastDismiss
		};
	}, [toastMessages, onToastAdd, onToastDismiss]);

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}

export default ToastProvider;
