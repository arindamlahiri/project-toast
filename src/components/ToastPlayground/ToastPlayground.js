import React, { useState } from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = useState('');
	const [variant, setVariant] = useState('notice');

	const [isToastVisible, setIsToastVisible] = useState(false);

	const popToastHandler = () => {
		setIsToastVisible(true);
	};

	const handleToastClose = () => {
		setIsToastVisible(false);
	};

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			{isToastVisible && (
				<Toast variant={variant} onClose={handleToastClose}>
					{message}
				</Toast>
			)}

			<div className={styles.controlsWrapper}>
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
						<Button onClick={popToastHandler}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
