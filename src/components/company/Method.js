import React from 'react';
import styles from './Method.module.css'
import { Container, Row, Col } from "react-bootstrap";

function Method() {
	return (
		<Container fluid  data-aos="fade-up" data-aos-duration="1000">
			<div className={styles.content}>
				<Row>
					<Col md={12} sm={12} xs={12}>
						<h2>"세이브마케팅"</h2>
						<span className={styles.fs16}>저희 세이브마케팅은 이렇게 진행합니다.</span>
					</Col>
				</Row>
						<Row>
					<Col md={12} sm={12} xs={12}>
						<div className={styles.imgWrap}>
							<img src={`${process.env.PUBLIC_URL}/company/solution_1.png`} alt="세이브마케팅 전략"></img>
						</div>
					</Col>
				</Row>
				{/* <Row>
					<Col md={12} sm={12} xs={12}>
						<span className={styles.fs16}>저희 세이브마케팅은 의료 뷰티산업 전문 메디컬 퍼포먼스 마케팅 회사입니다.</span><br/>
						<span className={styles.fs16}>어디에도 없는 마케팅, 어디에도 없는 진실함으로 마케팅 퍼포먼스 ROI 초격차를 만들어 냅니다.</span>
					</Col>
				</Row>
				<Container fluid className={styles.marketing}>
					<Row>
						<Col md={12} sm={12} xs={12}>
							<div className={styles.flex} data-aos="fade-up" data-aos-duration="1000">
								<div>SNS<br/> MARKETING</div>
								<div>VIRAL<br/> MARKETING</div>
								<div>PERFORMANCE<br/> MARKETING</div>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={12} sm={12} xs={12}>
							<div className={styles.flex} data-aos="fade-up" data-aos-duration="1000">
								<div>NEW MEDIA<br/> MARKETING</div>
								<div>CUSTOMER<br/> MARKETING</div>
							</div>
						</Col>
					</Row>
				</Container> */}
			</div>
		</Container>
	)
}

export default Method;