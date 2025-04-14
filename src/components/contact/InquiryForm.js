import React, { useState } from "react";
import styles from "./InquiryForm.module.css";
import { Container } from "react-bootstrap";
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
	
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [resultMessage, setResultMessage] = useState(null);

	// 입력 값 변경 핸들러
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	// 폼 제출 전 유효성 검사
	const handleSubmit = (e) => {
		if (!formData.agree) {
			e.preventDefault();
			alert("개인정보 수집 및 이용에 동의해주세요.");
			return;
		}
		
		// 제출 중 상태로 변경
		setIsSubmitting(true);
		
		// 성공 메시지 설정 (폼 제출은 HTML form으로 처리)
		setResultMessage({
			type: 'success',
			text: '문의가 접수되었습니다. 잠시 기다려주세요...'
		});
	};
	
	// 폼 리셋 함수
	// const resetForm = () => {
	// 	setFormData({
	// 		company: "",
	// 		manager: "",
	// 		contact: "",
	// 		email: "",
	// 		homepage: "",
	// 		message: "",
	// 		agree: false,
	// 	});
	// 	setIsSubmitting(false);
	// };

	return (
		<Container>
			{resultMessage && (
				<div className={`${styles.message} ${styles[resultMessage.type]}`}>
					{resultMessage.text}
				</div>
			)}
			
			{/* HTML 기본 폼 제출 방식 사용 */}
			<form 
				onSubmit={handleSubmit}
				className={styles.form}
				action="https://formsubmit.co/yoontaejoung@naver.com"
				method="POST"
				// 제출 후 현재 페이지로 돌아오기
				target="_self"
			>
				{/* FormSubmit 설정 필드 */}
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value={window.location.href} />
				<input type="hidden" name="_template" value="table" />
				<input type="hidden" name="_subject" value={`[문의] ${formData.company} - ${formData.manager}님의 문의`} />
				<input type="text" name="_honey" style={{display: 'none'}} />
				
				<div className={styles.formGroup}>
					<label className={styles.required}>업체명</label>
					<input 
						type="text" 
						name="company" 
						value={formData.company} 
						onChange={handleChange} 
						placeholder="업체명을 입력해주세요." 
						required 
					/>
				</div>
				<div className={styles.formGroup}>
					<label className={styles.required}>담당자명</label>
					<input 
						type="text" 
						name="manager" 
						value={formData.manager} 
						onChange={handleChange} 
						placeholder="성함을 입력해주세요." 
						required 
					/>
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
					<input 
						type="email" 
						name="email" 
						value={formData.email} 
						onChange={handleChange} 
						placeholder="(선택) 이메일을 입력해주세요." 
					/>
				</div>
				<div className={styles.formGroup}>
					<label>홈페이지 주소</label>
					<input 
						type="url" 
						name="homepage" 
						value={formData.homepage} 
						onChange={handleChange} 
						placeholder="(선택) 홈페이지 주소를 입력해주세요. 예) savemarketing.co.kr" 
					/>
				</div>
				<div className={styles.formGroup}>
					<label className={styles.required}>문의내용</label>
					<textarea 
						name="message" 
						value={formData.message} 
						onChange={handleChange} 
						placeholder="문의 내용을 입력해주세요. ex)예산, 요청사항, 프로젝트 기간 등" 
						required 
					/>
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
					disabled={isSubmitting}
				>
					{isSubmitting ? '처리 중...' : '신청하기'}
				</button>
			</form>
		</Container>
	);
}

export default InquiryForm;