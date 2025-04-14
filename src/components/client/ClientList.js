import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./ClientList.module.css";

const images = Array.from({ length: 14 }, (_, i) => `${process.env.PUBLIC_URL}/client/client${i + 1}.png`);

function ClientList() {
	return (
	<div className={styles.sliderContainer} data-aos="fade-up" data-aos-duration="1000">
		<Swiper
			modules={[Autoplay]}
			slidesPerView={7} // 한 번에 보이는 이미지 개수 (조정 가능)
			spaceBetween={40} // 이미지 간격
			loop={true} // 무한 반복
			autoplay={{ delay: 0, disableOnInteraction: false }}
			speed={3000} // 슬라이드 속도 (조정 가능)
		>
			{images.map((src, index) => (
				<SwiperSlide key={index}>
					<img src={src} alt={`Client ${index + 1}`} className={styles.clientImage} />
				</SwiperSlide>
			))}
		</Swiper>
	</div>
	);
}

export default ClientList;
