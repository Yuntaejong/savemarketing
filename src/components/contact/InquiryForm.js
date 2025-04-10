import React, { useState } from "react";
import styles from "./InquiryForm.module.css";
import { Container } from "react-bootstrap";
import axios from "axios"; // axios 추가

import "bootstrap/dist/css/bootstrap.min.css";

function InquiryForm() {
	const [formData, setFormData] = useState({
		company: "",
		manager: "",
		contact: "",
		email: "",
		homepage: "",
		message: "",
		agree: false,
	});
	
	// 로딩 및 결과 메시지 상태 추가
	const [isLoading, setIsLoading] = useState(false);
	const [resultMessage, setResultMessage] = useState(null);

	// 입력 값 변경 핸들러
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	// 폼 제출 핸들러 - API 호출로 수정
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.agree) {
			alert("개인정보 수집 및 이용에 동의해주세요.");
			return;
		}
		
		setIsLoading(true);
		setResultMessage(null);
		
		try {
			// 워드프레스 API 엔드포인트로 데이터 전송
			const response = await axios.post(
				'http://savemarketing.co.kr/wp-json/savemarketing/v1/inquiry',
				formData,
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			
			// 성공 메시지 표시
			setResultMessage({
				type: 'success',
				text: response.data.message || '신청이 완료되었습니다!'
			});
			
			// 폼 초기화
			setFormData({
				company: "",
				manager: "",
				contact: "",
				email: "",
				homepage: "",
				message: "",
				agree: false,
			});
			
		} catch (error) {
			// 오류 메시지 표시
			console.error('폼 제출 오류:', error);
			
			let errorMessage = '문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.';
			if (error.response && error.response.data && error.response.data.message) {
				errorMessage = error.response.data.message;
			}
			
			setResultMessage({
				type: 'error',
				text: errorMessage
			});
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Container>
			{resultMessage && (
				<div className={`${styles.message} ${styles[resultMessage.type]}`}>
					{resultMessage.text}
				</div>
			)}
			
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.formGroup}>
					<label className={styles.required}>업체명</label>
					<input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="업체명을 입력해주세요." required />
				</div>
				<div className={styles.formGroup}>
					<label className={styles.required}>담당자명</label>
					<input type="text" name="manager" value={formData.manager} onChange={handleChange} placeholder="성함을 입력해주세요." required />
				</div>
				<div className={styles.formGroup}>
					<label className={styles.required}>연락처</label>
					<input 
						type="text" 
						name="contact" 
						value={formData.contact} 
						onChange={(e) => {
							const numericValue = e.target.value.replace(/[^0-9]/g, '');
							setFormData({...formData, contact: numericValue});
						}} 
						placeholder="'-'를 제외한 숫자를 입력해주세요." 
						required 
					/>
				</div>
				<div className={styles.formGroup}>
					<label>이메일</label>
					<input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="(선택) 이메일을 입력해주세요." />
				</div>
				<div className={styles.formGroup}>
					<label>홈페이지 주소</label>
					<input type="url" name="homepage" value={formData.homepage} onChange={handleChange} placeholder="(선택) 홈페이지 주소를 입력해주세요. 예) savemarketing.co.kr" />
				</div>
				<div className={styles.formGroup}>
					<label className={styles.required}>문의내용</label>
					<textarea name="message" value={formData.message} onChange={handleChange} placeholder="문의 내용을 입력해주세요. ex)예산, 요청사항, 프로젝트 기간 등" required />
				</div>
				<div className={styles.formGroup}>
					<label className={styles.required}>개인정보 수집 이용에 대한 동의</label>
					<p className={styles.privacyBox}>
						- 수집 목적: 문의에 대한 답변/안내<br />
						- 수집 항목: 업체명, 담당자명, 연락처, 이메일, 문의 내용<br />
						- 보유 기간: 1년 또는 삭제 요청 시까지<br />
					</p>
					<span>
						<input 
						id="agreeCheckbox"
						type="checkbox" 
						name="agree" 
						checked={formData.agree} 
						onChange={handleChange} 
						required 
						/> 
						<label htmlFor="agreeCheckbox">개인정보 수집 이용에 동의합니다.</label>
					</span>
				</div>
				<button 
					type="submit" 
					className={styles.submitButton}
					disabled={isLoading}
				>
					{isLoading ? '처리 중...' : '신청하기'}
				</button>
			</form>
		</Container>
	);
}

export default InquiryForm;