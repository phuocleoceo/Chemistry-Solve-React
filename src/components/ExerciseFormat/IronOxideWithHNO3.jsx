import React, { useState } from 'react';
import { Button, Row, Col, Form, Image, Container } from 'react-bootstrap';

export default function IronOxideWithHNO3() {
	const [result, setResult] = useState({
		Fe_Mass: 0, mol_HNO3: 0
	});

	function handleSubmit(e) {
		e.preventDefault();
		const OxideMass = parseFloat(e.target.OxideMass.value);
		const molNO = parseFloat(e.target.NOVolume.value) / 22.4;
		const molNO2 = parseFloat(e.target.NO2Volume.value) / 22.4;
		const molN2O = parseFloat(e.target.N2OVolume.value) / 22.4;
		const molN2 = parseFloat(e.target.N2Volume.value) / 22.4;
		const molElectronGas = molNO * 3 + molNO2 * 1 + molN2O * 8 + molN2 * 10;
		// gọi a là khối lượng Fe , m là của oxit
		// Bảo toàn e : 3a/56 = (m-a)/16 * 2 + Số mol e từ khí
		// => a = ( m/8 + MolEKhi )*28/5
		const FeMass = (OxideMass / 8 + molElectronGas) * 28 / 5;
		const molHNO3 = (OxideMass - FeMass) / 16 * 2 + molNO * 4 + molNO2 * 2 + molN2O * 10 + molN2 * 12;
		setResult({
			Fe_Mass: FeMass,
			mol_HNO3: molHNO3
		});
	}

	return (
		<Container style={{ marginTop: '1%' }}>
			<Row>
				<Col sm={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">Trước phản ứng :</Form.Label>

						<Form.Group controlId="OxideMass">
							<Form.Label>Khối lượng hỗn hợp oxit sắt (gam)</Form.Label>
							<Form.Control type="text" name="OxideMass" required
								placeholder="Nhập khối lượng hỗn hợp oxit sắt..." />
							<Form.Text className="text-muted">
								Hỗn hợp oxit sắt có thể gồm : FeO, Fe2O3, Fe3O4, Fe dư
							</Form.Text>
						</Form.Group>

						<Form.Label className="text-primary">Thể tích khí :</Form.Label>

						<Form.Row>
							<Form.Group as={Col} controlId="NOVolume">
								<Form.Label>NO (lít)</Form.Label>
								<Form.Control type="text" name="NOVolume" required
									placeholder="Nhập thể tích khí NO..." />
							</Form.Group>

							<Form.Group as={Col} controlId="NO2Volume">
								<Form.Label>NO2 (lít)</Form.Label>
								<Form.Control type="text" name="NO2Volume" required
									placeholder="Nhập thể tích khí NO2..." />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="N2OVolume">
								<Form.Label>N2O (lít)</Form.Label>
								<Form.Control type="text" name="N2OVolume" required
									placeholder="Nhập thể tích khí N2O..." />
							</Form.Group>

							<Form.Group as={Col} controlId="N2Volume">
								<Form.Label>N2 (lít)</Form.Label>
								<Form.Control type="text" name="N2Volume" required
									placeholder="Nhập thể tích khí N2..." />
							</Form.Group>
						</Form.Row>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={{ span: 5, offset: 1 }}>
					<a href="https://hayhochoi.vn/phuong-phap-giai-cac-dang-bai-tap-ve-sat-fe-hon-hop-va-hop-chat-cua-sat-hoa-lop-12.html"
						target="_blank" rel="noreferrer">
						<Image width="105%" height="auto"
							src="https://hayhochoi.vn/thumbs_size/news/2019_03/[630x420-cr]cac-dang-bai-tap-ve-sat-fe-hon-hop-sat-va-hop-chat.jpg" />
					</a>
				</Col>
			</Row >
			<hr />
			<Row>
				<Col sm={6}>
					<Form>
						<Form.Label className="font-weight-bold text-success">Sau phản ứng :</Form.Label>

						<Form.Group controlId="FeMass">
							<Form.Label>Khối lượng sắt (gam)</Form.Label>
							<Form.Control value={result.Fe_Mass} type="text" name="FeMass" plaintext required readOnly />
						</Form.Group>

						<Form.Group controlId="SaltMass">
							<Form.Label>HNO3 (mol)</Form.Label>
							<Form.Control value={result.mol_HNO3} type="text" name="MolHNO3" plaintext required readOnly />
						</Form.Group>
					</Form>
				</Col>

				<Col sm={6}>
					<Image width="80%" height="auto"
						src="" />
				</Col>
			</Row >
		</Container >
	)
}
