import React from 'react';
import styles from './CompanyBanner.module.css'
import "bootstrap/dist/css/bootstrap.min.css";

function CompanyBanner() {
    return (
		<div className={styles.content} data-aos="fade-up" data-aos-duration="1000">
			<div className={styles.imgWrap}>
				<div className={styles.imgContent}>
				</div>
				<div>
					<p className={styles.ment}>
						<span className={styles.fs32}>Client Of <span>SaveMarketing</span></span>
						<span className={styles.fs32}>병의원 전문 광고대행사</span>
						<span className={styles.fs20}>세이브마케팅은 최고의 고객에게 최상의 결과물을 선사하며 함께 성장합니다.</span>
					</p>
				</div>
			</div>
		</div>
    )
}

export default CompanyBanner;