import React from 'react';
import styles from './Interaction.module.css'
import { Container,  Row, Col } from "react-bootstrap";

function Interaction() {
	return (
		<Container fluid>
			<div className={styles.content}>
				<Row>
					<Col md={12} sm={12} xs={12}>
						<h2>"지속적인 소통 & 피드백 반영"</h2>
						<p className={styles.fs16}>단순한 운영이 아닌 고객 분석, 전략 제안, 정확하고 빠른 실행, 인사이트 도출, 개선 실행을 잇는 순환 구조의 운영 프로세스로</p>
						<p className={styles.fs16}>속도감있는 대응과 실행력을 보여 지속적인 발전을 보여줍니다.</p>
					</Col>
				</Row>
				<Row className={styles.fb} data-aos="fade-up" data-aos-duration="1000">
					<Col>
						<p><strong>클라이언트 의뢰 및 상담</strong></p>
						<p className={styles.fs16}>
							<span>클라이언트 요구 사항 체크</span>
							<span>내/외부 환경 분석 및 모니터링</span>
						</p>
					</Col>
					<Col>
						<p><strong>킥오프 미팅 및 계약</strong></p>
						<p className={styles.fs16}>
							<span>수집/분석한 데이터를 바탕으로</span>
							<span>마케팅 및 브랜딩 전략 수립</span>
						</p>
					</Col>
					<Col>
						<p><strong>매체별 담당자 배정</strong></p>
						<p className={styles.fs16}>
							<span>매체별 담당자들이 직접 컨트롤</span>
							<span>분석 리포트 제공</span>
						</p>
					</Col>
					<Col>
						<p><strong>클라이언트 의뢰 및 상담</strong></p>
						<p className={styles.fs16}>
							<span>매체별 효율 진단 및 개선</span>
							<span>성과 보고서 제공</span>
						</p>
					</Col>
					<Col>
						<p><strong>인사이트 도출</strong></p>
						<p className={styles.fs16}>
							<span>도출된 데이터를 기반으로</span>
							<span>향후 마케팅 전략 방향 수립</span>
						</p>
					</Col>
				</Row>
			</div>
		</Container>
	)
}

export default Interaction;