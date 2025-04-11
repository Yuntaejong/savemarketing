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

	// 폼 제출 핸들러 - FormSubmit 사용
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!formData.agree) {
			alert("개인정보 수집 및 이용에 동의해주세요.");
			return;
		}
		
		setIsLoading(true);
		setResultMessage(null);
		
		try {
			// FormSubmit 서비스로 데이터 전송
			const form = e.target;
			const formAction = form.action;
			
			const formDataObj = new FormData();
			formDataObj.append('company', formData.company);
			formDataObj.append('manager', formData.manager);
			formDataObj.append('contact', formData.contact);
			formDataObj.append('email', formData.email || '(미입력)');
			formDataObj.append('homepage', formData.homepage || '(미입력)');
			formDataObj.append('message', formData.message);
			formDataObj.append('_subject', `[문의] ${formData.company} - ${formData.manager}님의 문의`);
			
			const response = await fetch(formAction, {
				method: 'POST',
				body: formDataObj,
				headers: {
					'Accept': 'application/json'
				}
			});
			
			// 응답 처리 수정 - JSON 파싱 없이 상태 코드만 확인
			if (response.ok) {
				// 성공 메시지 표시
				setResultMessage({
					type: 'success',
					text: '문의가 성공적으로 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.'
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
			} else {
				throw new Error('서버 응답이 실패 상태를 반환했습니다.');
			}
		} catch (error) {
			console.error('폼 제출 오류:', error);
			
			setResultMessage({
				type: 'error',
				text: '문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.'
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
			
			{/* action 속성에 FormSubmit 엔드포인트 추가 */}
			<form 
				onSubmit={handleSubmit} 
				className={styles.form}
				action="https://formsubmit.co/37d0d8ceb5cc26faf66c2f1df305ab8b" 
				method="POST"
			>
				{/* FormSubmit 설정 필드 */}
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_next" value={window.location.href} />
				<input type="hidden" name="_template" value="table" />
				<input type="text" name="_honey" style={{display: 'none'}} />
				
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