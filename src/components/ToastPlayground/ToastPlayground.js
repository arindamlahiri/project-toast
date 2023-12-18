import React, { useRef, useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = useState('');
	const [variant, setVariant] = useState('notice');
	const [toastMessages, setToastMessages] = useState([]);

	const messageInputRef = useRef(null);

	const popToastHandler = (e) => {
		e.preventDefault();
		setToastMessages([
			...toastMessages,
			{ id: crypto.randomUUID(), message, variant }
		]);
		setMessage('');
		setVariant('notice');
		messageInputRef.current.focus();
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf
				messages={toastMessages}
				setMessages={setToastMessages}
			/>

			<form className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							ref={messageInputRef}
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						{VARIANT_OPTIONS.map((variantOption) => (
							<label
								key={variantOption}
								htmlFor={`variant-${variantOption}`}
							>
								<input
									id={`variant-${variantOption}`}
									type="radio"
									name="variant"
									value={variantOption}
									checked={variant === variantOption}
									onChange={(event) =>
										setVariant(event.target.value)
									}
								/>
								{variantOption}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div
						className={`${styles.inputWrapper} ${styles.radioWrapper}`}
					>
						<Button type="submit" onClick={popToastHandler}>
							Pop Toast!
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
