import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../common.css'
import styles from './Solution.module.css'
import Footer from '../components/footer/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import SolutionBanner from '../components/solution/SolutionBanner'
import SolutionInfo from '../components/solution/SolutionInfo'





function Solution() {

	useEffect(() => {
		AOS.init();
	},[])

	return (
		<>
			<SolutionBanner/>
			<Container>
				<div className={styles.contentWrap}>
					<SolutionInfo/>
				</div>
			</Container>
			<Row data-aos="fade-up" data-aos-duration="1000">
				<Col md={12} sm={12} xs={12} className={styles.bannerWrap}>
					<div className={styles.bottombanner}></div>
				</Col>
			</Row>
			<Footer/>
		</>
	)
}

export default Solution;