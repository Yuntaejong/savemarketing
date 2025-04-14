import React from 'react';
import styles from './Footer.module.css';

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.right}>
				<a href="#!">
					<img src={`${process.env.PUBLIC_URL}/footer/footer_logo.png`} alt="savemarketing"></img>
				</a>
				<p className={styles.copyright}>
					&copy; 2025. savemarketing Co. All Rights Reserved.
				</p>
			</div>
			<div className={styles.left}>
				<p><span>COMPANY : 주식회사 세이브마케팅</span><span>BUSINESS AREA : 퍼포먼스 광고 대행사</span></p>
				<address>ADDRESS : 서울특별시 강남구 테헤란로 4길 46, 104동 706호</address>
				<p>E-MAIL : <a href="meilto:'wanso578@naver.com'">wanso578@naver.com</a></p>
				<p><span>사업자등록번호 : 110-88-01939</span></p>
			</div>
		</div>
	)
}

export default Footer;