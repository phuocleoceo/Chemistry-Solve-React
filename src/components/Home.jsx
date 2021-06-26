import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default function Home() {
	return (
		<Row style={{ marginTop: '2%' }}>
			<Col sm={6}>
				<Image
					src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.6435-9/87551951_534646137176656_6420289943544791040_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=41--ENfWAnsAX_tI96I&tn=LmsjCjdx2PD-F9Wv&_nc_ht=scontent-hkg4-2.xx&oh=4682262aa9cc43cdbba2e6d687be5d73&oe=60DAEBC6"
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
							Phuoc
							<span className="text-success"> Leo Ceo</span>
						</h1>
						<div className="subheading">
							Da Nang · (+84) 382-609-982 ·
							<a href="mailto:ht10082001@gmail.com">ht10082001@gmail.com</a>
						</div>
						<h3>Personal Infomation</h3>
						<p>Birthday: 10/08/2001</p>
						<p>Home town: Hai Truong, Hai Lang, Quang Tri</p>
						<p>Address: 08 Ha Van Tinh, Hoa Khanh Nam, Lien Chieu, Da Nang</p>
						<p>Phone Number: (+84) 382-609-982</p>
						<p>Email: ht10082001@gmail.com</p>
						<p>University: Da Nang University of Science and Technology</p>
					</div>
				</section>
			</Col>
		</Row >
	)
}
