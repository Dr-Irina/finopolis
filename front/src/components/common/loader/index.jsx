import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

const Loader = ({ size = 64 }) => (
	<div className={styles.loader} style={{ width: size, height: size }}>
		<LoadingOutlined />
	</div>
);

export default Loader;
