import React from 'react';
import styles from './Performance.module.css'
import { Container,  Row, Col } from "react-bootstrap";


function Performance() {
	return (
		<Container fluid>
			<div className={styles.content}>
				<Row>
					<Col md={12} sm={12} xs={12}>
						<h2>"방법의 차이가 만들어 내는 퍼포먼스의의 차이"</h2>
						<p className={styles.fs16}>저희 세이브마케팅와 함께 하시게 된다면 특별하다고 생각하실 수 있습니다.</p>
						<p className={styles.fs16}>저희는 소비자의 니즈를 확인하여 직접 보고, 듣고, 경험한 모든 역량을 통해</p>
						<p className={styles.fs16}>수익이 가능한 다양한 매체를 실현하고 최적의 매체로 확장하여 기업 매출로 이어지는 성과 창출에 기여합니다.</p>
					</Col>
				</Row>

				<div className={styles.gridWrap} data-aos="fade-up" data-aos-duration="1000">
					<Row fluid className={styles.grid}>
						<Col xs={6} sm={3} className={styles.gridItem}>
							<span className={styles.fs24}>성과 중심 마케팅</span>
							<span className={styles.fs16}>눈에 보이는 효율, 손에 잡히는 성과,<br/> 고객 비즈니스 성공이 실무 경력자들로 구성된 세이브 마케팅의 목표입니다.</span>
						</Col>
						<Col xs={6} sm={3} className={styles.gridItem}>
							<span className={styles.fs24}>특화된 운영</span>
							<span className={styles.fs16}>단순한 유지 운영을 넘어<br/> 먼저 제안하고 주도하는<br/> 비즈니스 파트너 세이브마케팅입니다.</span>
						</Col>
						<Col xs={6} sm={3} className={styles.gridItem}>
							<span className={styles.fs24}>실행 중심 컨설팅</span>
							<span className={styles.fs16}>계속된 물음을 통해 기회를<br/> 현실로 만드는 통찰력이<br/> 세이브마케팅 전략 제시의 핵심입니다.</span>
						</Col>
						<Col xs={6} sm={3} className={styles.gridItem}>
							<span className={styles.fs24}>콘텐츠</span>
							<span className={styles.fs16}>단순 크리에이티브에<br/> 집중한 콘텐츠가 아닌<br/> 빅데이터 기반 레이아웃을 제작합니다.</span>
						</Col>
						<Col xs={6} sm={3} className={styles.gridItem}>
							<span className={styles.fs24}>빅 데이터</span>
							<span className={styles.fs16}>수많은 데이터를 날카롭게 분석하여<br/> 세이브마케팅만의 최상의 효율을<br/> 제공합니다.</span>
						</Col>
						<Col xs={6} sm={3} className={styles.gridItem}>
							<span className={styles.fs24}>숙련된 실무자 배치</span>
							<span className={styles.fs16}>풍부한 실무경험을 바탕으로<br/> 브랜드 구축 안정성은<br/> 세이브마케팅의 자부심입니다.</span>
						</Col>
					</Row>
				</div>
			</div>
		</Container>
	)
}

export default Performance;