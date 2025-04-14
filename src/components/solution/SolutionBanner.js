import React from 'react';
import styles from './SolutionBanner.module.css'

function SolutionBanner() {
	return (
		<div className={styles.content} data-aos="fade-up" data-aos-duration="1000">
            <div className={styles.imgWrap}>
                <img src={`${process.env.PUBLIC_URL}/solution/banner.png`} alt="freepick-mockup-img-solutionBanner"></img>
                <div className={styles.ment}>
                    <p className={styles.fs32}>CPA 광고</p>
                    <p className={styles.fs20}>성과로 연결되는 CPA 광고, 더 많은 고객과 만나는 가장 확실한 방법!</p>
                    <p className={styles.fs20}>CPA 광고로 브랜드의 전환력을 끌어올려보세요!</p>
                </div>
                <div className={styles.logoWrap}>
                    
                </div>
            </div>
		</div>
	)
}

export default SolutionBanner;