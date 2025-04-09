import React from 'react';
import styles from './Contact.module.css'
import InquiryForm from '../components/contact/InquiryForm'
import Footer from '../components/footer/Footer'
import { Container, Col, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
	return (
		<>
			<Container fluid className={styles.wrap} >
				<Container>
					<Row className={styles.content}>
						<Col className={styles.contentBox}>
							<h2>Save Marketing. 온라인 상담문의</h2>
							<p>각 분야별 전문가들의 귀사의 디지털 마케팅을 도와드립니다.</p>
						</Col>
						<InquiryForm/>
					</Row>
				</Container>
			</Container>
			<Footer/>
		</>
	)
}

export default Contact;