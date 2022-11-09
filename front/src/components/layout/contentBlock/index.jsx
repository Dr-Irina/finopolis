import React from 'react';
import styles from './styles.module.scss';

const ContentBlock = (props) => (
	<div className={styles.contentBlock}>
		{props.children}
	</div>
);

export default ContentBlock;
