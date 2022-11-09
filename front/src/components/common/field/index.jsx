import React from 'react';
import styles from './styles.module.scss';

const Field = (props) => {
	const { label, className, children } = props;

	return (
		<div className={className || ''}>
			<p className={styles.label}>{label}</p>
			<div className={styles.value}>
				{children}
			</div>
		</div>
	);
};

export default Field;
