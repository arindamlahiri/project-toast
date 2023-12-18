import React, { useContext, useEffect } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
	const { toastMessages, onToastDismiss, dismissAllToasts } =
		useContext(ToastContext);

	useEffect(() => {
		function handleKeyDown(event) {
			if (event.code === 'Escape') {
				dismissAllToasts();
			}
		}
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [dismissAllToasts]);

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
			{toastMessages.map(({ id, message, variant }) => (
				<li key={id} className={styles.toastWrapper}>
					<Toast variant={variant} onClose={() => onToastDismiss(id)}>
						{message}
					</Toast>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
