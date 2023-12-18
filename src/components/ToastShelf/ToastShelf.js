import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ messages, setMessages }) {
	const onToastDismiss = (id) => {
		const newMessages = [...messages];
		const index = newMessages.findIndex((msg) => msg.id === id);
		if (index > -1) {
			newMessages.splice(index, 1);
		}
		setMessages(newMessages);
	};

	return (
		<ol className={styles.wrapper}>
			{messages.map(({ id, message, variant }) => (
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
