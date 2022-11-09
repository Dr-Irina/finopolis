import React from 'react';
import inst from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import web from '../../assets/images/web.svg';
import styles from './styles.module.scss';

const Footer = () => (
	<>
		{/* <div className={styles.container}>
			<p></p>
			<div>
				<Input.Group compact className={styles.inputContainer}>
					<Input className={styles.input} placeholder='Your e-mail' />
					<p className={styles.subscribe}>Subscribe</p>
				</Input.Group>
			</div> 
		</div> */}
		<div className={styles.bottomContainer}>
			<p className={styles.right}>© Crystal, Inc. All rights reserved.</p>
			<div className={styles.socialContainer}>
				<div onClick={() => window.open('https://instagram.com/getcrystalorg','_blank')} className={styles.social}>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0ZM22.4 14.992C22.5974 16.3236 22.37 17.6835 21.75 18.8784C21.13 20.0733 20.149 21.0423 18.9466 21.6475C17.7441 22.2527 16.3815 22.4634 15.0524 22.2495C13.7234 22.0356 12.4956 21.4081 11.5437 20.4563C10.5918 19.5044 9.96434 18.2766 9.75048 16.9475C9.53662 15.6185 9.74728 14.2558 10.3525 13.0534C10.9577 11.851 11.9267 10.87 13.1215 10.25C14.3164 9.62998 15.6764 9.40254 17.008 9.59999C18.3662 9.80141 19.6237 10.4343 20.5947 11.4053C21.5656 12.3762 22.1986 13.6337 22.4 14.992ZM24.8 6.20001C24.2478 6.20001 23.8 6.64773 23.8 7.20001C23.8 7.7523 24.2478 8.20001 24.8 8.20001H24.816C25.3683 8.20001 25.816 7.7523 25.816 7.20001C25.816 6.64773 25.3683 6.20001 24.816 6.20001H24.8Z"/>
					</svg>
				</div>
				<div className={styles.social} onClick={() => window.open('https://twitter.com/getcrystalorg','_blank')}>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M32 2.96482C30.6071 3.94733 29.0649 4.6988 27.4327 5.19028C26.5567 4.18302 25.3925 3.4691 24.0975 3.14508C22.8025 2.82106 21.4393 2.90256 20.1921 3.37857C18.945 3.85458 17.8741 4.70213 17.1243 5.80659C16.3746 6.91105 15.9821 8.21913 16 9.55391V11.0085C13.4438 11.0747 10.9109 10.5078 8.62692 9.3582C6.3429 8.20857 4.37864 6.51193 2.90909 4.41937C2.90909 4.41937 -2.90909 17.5103 10.1818 23.3285C7.18622 25.3619 3.61768 26.3814 0 26.2376C13.0909 33.5103 29.0909 26.2376 29.0909 9.51028C29.0896 9.10512 29.0506 8.70096 28.9745 8.303C30.4591 6.83899 31.5067 4.99059 32 2.96482Z" />
					</svg>
				</div>
				<div className={styles.social} onClick={() => window.open('https://getrystal.org/','_blank')}>
					<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M11.7146 15H20.2854C19.9943 11.0457 18.4979 7.27534 16 4.19828C13.5021 7.27534 12.0058 11.0457 11.7146 15ZM20.2854 17H11.7146C12.0058 20.9543 13.5021 24.7246 16 27.8017C18.4979 24.7246 19.9943 20.9543 20.2854 17ZM9.70973 15C10.01 10.4985 11.7259 6.20604 14.6113 2.7381C8.22755 3.39872 3.18085 8.56348 2.70361 15H9.70973ZM17.3887 2.7381C20.2741 6.20604 21.99 10.4985 22.2903 15H29.2964C28.8192 8.56348 23.7725 3.39872 17.3887 2.7381ZM9.70973 17H2.70361C3.18086 23.4365 8.22755 28.6012 14.6113 29.2619C11.7259 25.7939 10.01 21.5015 9.70973 17ZM17.3887 29.2619C20.2741 25.7939 21.99 21.5015 22.2903 17H29.2964C28.8192 23.4365 23.7725 28.6012 17.3887 29.2619Z" />
					</svg>
				</div>
			</div>
		</div>
	</>
);

export default Footer;
