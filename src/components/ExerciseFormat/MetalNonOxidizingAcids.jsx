import React, { useState } from 'react';
import { Button, Row, Col, Form, Image, Container } from 'react-bootstrap';

export default function MetalNonOxidizingAcids() {
	const [salt, setSalt] = useState(0);

	function handleSubmit(e) {
		e.preventDefault();
		const metalMass = parseFloat(e.target.MetalMass.value);
		const h2Mol = parseFloat(e.target.H2Volume.value) / 22.4;
		const axitType = e.target.Axit.value;
		let axitMass = 0;
		if (axitType === "HCl") axitMass = h2Mol * 2 * 36.5;
		if (axitType === "H2SO4") axitMass = h2Mol * 98;
		const saltMass = (metalMass + axitMass - h2Mol * 2);
		setSalt(saltMass);
	}
	return (
		<Container style={{ marginTop: '1%' }}>
			<Row>
				<Col sm={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">Trước phản ứng :</Form.Label>

						<Form.Group controlId="MetalMass">
							<Form.Label>Khối lượng kim loại (gam)</Form.Label>
							<Form.Control type="text" name="MetalMass" required
								placeholder="Nhập khối lượng..." />
							<Form.Text className="text-muted">
								Lưu ý kim loại phải đứng trước H trong dãy hoạt động !
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="Axit">
							<Form.Label>Loại Axit</Form.Label>
							<Form.Control name="Axit" as="select">
								<option value="HCl">HCl</option>
								<option value="H2SO4">H2SO4 loãng</option>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="H2Volume">
							<Form.Label>Thể tích H2 (lít)</Form.Label>
							<Form.Control type="text" name="H2Volume" required
								placeholder="Nhập thể tích H2 thu được..." />
						</Form.Group>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={6}>
					<a href="https://www.youtube.com/watch?v=vsk8WmRCKOI" target="_blank" rel="noreferrer">
						<Image width="80%" height="auto"
							src="https://i.ytimg.com/vi/vsk8WmRCKOI/maxresdefault.jpg" />
					</a>
				</Col>
			</Row >
			<hr />
			<Row>
				<Col sm={6}>
					<Form>
						<Form.Label className="font-weight-bold text-success">Sau phản ứng :</Form.Label>
						<Form.Group controlId="SaltMass">
							<Form.Label>Khối lượng muối (gam)</Form.Label>
							<Form.Control value={salt} type="text" name="SaltMass" plaintext required readOnly />
						</Form.Group>
					</Form>
				</Col>

				<Col sm={6}>
					<Image width="80%" height="auto"
						src="https://cdn.vungoi.vn/picture/2018/0405/2.PNG" />
				</Col>
			</Row >
		</Container >
	)
}
