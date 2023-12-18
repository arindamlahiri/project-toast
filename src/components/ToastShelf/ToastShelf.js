import React, { useContext } from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider';

function ToastShelf() {
	const { toastMessages, onToastDismiss } = useContext(ToastContext);

	return (
		<ol className={styles.wrapper}>
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
