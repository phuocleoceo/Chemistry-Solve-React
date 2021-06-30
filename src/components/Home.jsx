import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default function Home() {
	return (
		<Row style={{ marginTop: '2%' }}>
			<Col sm={6}>
				<Image
					src="/img/avatar.jpg"
					width="80%"
					height="auto"
					className="d-inline-block avatar-PLC"
					alt="AvatarLogo"
				/>
			</Col>

			<Col sm={6}>
				<section className="resume-section" id="about">
					<div className="resume-section-content">
						<h1 className="mb-0">
							PHUOC
							<span className="text-success"> LEO CEO</span>
						</h1>
						<div className="subheading">
							DUT · (+84) 382-609-982 ·
							<a href="mailto:ht10082001@gmail.com">ht10082001@gmail.com</a>
						</div>
						<h3>THÔNG TIN CÁ NHÂN</h3>
						<p>Ngày sinh : 10/08/2001</p>
						<p>Quê quán : Hải Trường, Hải Lăng, Quảng Trị</p>
						<p>Địa chỉ hiện nay : 08 Hà Văn Tính, Hoà Khánh Nam, Liên Chiểu, Đà Nẵng</p>
						<p>Trường Đại học : Trường Đại học Bách Khoa - Đại học Đà Nẵng</p>
						<p>Số điện thoại : (+84) 382-609-982</p>
						<p>Email : ht10082001@gmail.com</p>
						<div className="social-icons">
							<a className="social-icon" href="https://www.facebook.com/phuocleoceo/" target="blank">
								<i className="fab fa-facebook-f" /></a>
							<a className="social-icon" href="https://github.com/phuocleoceo" target="blank">
								<i className="fab fa-github" /></a>
							<a className="social-icon" href="https://phuocleoceo.github.io/" target="blank">
								<i className="fas fa-user-circle" /></a>
							<a className="social-icon" href="https://twitter.com/ht10082001" target="blank">
								<i className="fab fa-twitter" /></a>
						</div>
					</div>
				</section>
			</Col>
		</Row >
	)
}
