import React from 'react';
import LayoutHeader from '../../components/layout/header';
import styles from './styles.module.scss';

const DefaultLayout = (props) => {
	const { width, setTheme, theme } = props;
	return (
		<div className={styles.appContainer}>
			{/* @ts-ignore */}
			<LayoutHeader width={width} setTheme={setTheme} theme={theme} />
			<div className={styles.mainContainer}>
				<div className={styles.contentContainer}>
					{props.children}
				</div>
			</div>

		</div>
	);
}

export default DefaultLayout;
