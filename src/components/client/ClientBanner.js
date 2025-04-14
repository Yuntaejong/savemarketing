import React from 'react';
import styles from './ClientBanner.module.css'
import Contactbutton from "../../components/ContactButton"

function ClientBanner() {
	return (
		<div className={styles.content} data-aos="fade-up" data-aos-duration="1000">
			<div className={styles.imgWrap}>
			<img src={`${process.env.PUBLIC_URL}/client/banner.jpg`} alt="freepick-mockup-img-clientBanner"></img>
				<div >
					<p className={styles.ment}>
						<span className={styles.fs32}>세이브와 <b>"함께"</b>하는 파트너</span>
						<span className={styles.fs20}>세이브마케팅은 끝까지 책임지는 기업이 되겠습니다.</span>
					</p>
					<Contactbutton/>
				</div>
			</div>
		</div>
	)
}

export default ClientBanner;