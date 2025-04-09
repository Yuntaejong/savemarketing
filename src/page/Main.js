import React from 'react';
import ContactButton from '../components/ContactButton'
import styles from './Main.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {
	return (
		<div className={styles.container}>
			<div className={styles.ani}>
				<img src="../main/main_1.gif" alt="marketing"></img>
			</div>
			<div className={styles.content}>
				<h2 className={styles.fs48}>SAVE MARKETING</h2>
				<div className={`${styles.motion} ${styles.fs32}`}>
					<span>No.1 Medical Performance Marketing</span>	
					<span>병의원 맞춤 온라인 서비스</span>
					<span>병의원 전문 마케팅, 성공 파트너</span>
				</div>
				<ContactButton/>
			</div>
		</div>
	)
}

export default Main;