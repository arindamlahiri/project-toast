import React, { useCallback, useMemo, useState } from 'react';

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

	const dismissAllToasts = useCallback(() => {
		setToastMessages([]);
	}, []);

	const value = useMemo(() => {
		return {
			toastMessages,
			onToastAdd,
			onToastDismiss,
			dismissAllToasts
		};
	}, [toastMessages, onToastAdd, onToastDismiss, dismissAllToasts]);

	return (
		<ToastContext.Provider value={value}>{children}</ToastContext.Provider>
	);
}

export default ToastProvider;
