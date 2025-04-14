import React from 'react';
import styles from './SolutionInfo.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function SolutionInfo() {
    return (
		<>
			<Container>
				<Row className={styles.content}>
					<Col md={12} sm={12} xs={12} data-aos="fade-up" data-aos-duration="1000">
						<h2>"세이브마케팅"</h2>
						<p className={styles.fs16}>업계 상위 1% 병의원 전문 마케터가 최고의 의료 광고 서비스를 제공합니다.</p>
						<p className={styles.fs16}>최적화 된 전략과 속도감있는 대응으로 성공을 위한 조력자가 되어드리겠습니다.</p>
					</Col>
					<Col md={12} sm={12} xs={12} data-aos="fade-up" data-aos-duration="1000">
						<h2>"CPA"란?</h2>
						<p className={styles.fs16}>판매, 클릭, 폼 제출 등 특정한 행동마다 SNS(소셜미디어 플랫폼)에서 사용자의 인구 통계, 관심사 및 행동 패턴을 분석하여 노출하는 광고 마케팅 방법입니다.</p>
					</Col>
					<Col md={12} sm={12} xs={12} data-aos="fade-up" data-aos-duration="1000">
						<h2>CPA 광고 성과</h2>
						<p className={styles.fs16}>어디에도 없는 마케팅, 어디에도 없는 진실함으로 ROI의 격차를 보여드립니다.</p>
						<Row className={styles.outputWrap}>
							<Col md={8} sm={8} xs={8} className={styles.output}>
								<img src={`${process.env.PUBLIC_URL}/solution/solution_output.png`} alt="CPA 광고 성과"></img>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
    )
}

export default SolutionInfo;