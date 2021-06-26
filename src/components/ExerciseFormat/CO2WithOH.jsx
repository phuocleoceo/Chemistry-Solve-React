import React, { useState } from 'react';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';

export default function CO2WithOH() {
	const [comment, setComment] = useState("");
	const [result, setResult] = useState({
		Na_Plus: 0, K_Plus: 0, Ba_2Plus: 0, Ca_2Plus: 0,
		HCO3_Minus: 0, CO3_2Minus: 0,
		OH_Minus_Remnant: 0, CO2_Remnant: 0
	});

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<Container style={{ marginTop: '0.3%', marginLeft: '2%' }}>
			<Row>
				<Col sm={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">Trước phản ứng :</Form.Label>

						<Form.Group controlId="CO2Volume">
							<Form.Label>Thể tích CO2 (lít)</Form.Label>
							<Form.Control type="text" name="CO2Volume" required
								placeholder="Nhập thể tích CO2..." />
						</Form.Group>

						<Form.Group controlId="BazoVolume">
							<Form.Label>Thể tích Bazo (lít)</Form.Label>
							<Form.Control type="text" name="BazoVolume" required
								placeholder="Nhập thể tích dung dịch Bazo..." />
						</Form.Group>

						<Form.Group controlId="CMNaOH">
							<Form.Label>Nồng độ mol NaOH (M)</Form.Label>
							<Form.Control type="text" name="CMNaOH" required
								placeholder="Nhập nồng độ mol NaOH..." />
						</Form.Group>

						<Form.Group controlId="CMKOH">
							<Form.Label>Nồng độ mol KOH (M)</Form.Label>
							<Form.Control type="text" name="CMKOH" required
								placeholder="Nhập nồng độ mol KOH..." />
						</Form.Group>

						<Form.Group controlId="CMBaOH2">
							<Form.Label>Nồng độ mol Ba(OH)2 (M)</Form.Label>
							<Form.Control type="text" name="CMBaOH2" required
								placeholder="Nhập nồng độ mol Ba(OH)2..." />
						</Form.Group>

						<Form.Group controlId="CMCaOH2">
							<Form.Label>Nồng độ mol Ca(OH)2 (M)</Form.Label>
							<Form.Control type="text" name="CMCaOH2" required
								placeholder="Nhập nồng độ mol Ca(OH)2..." />
						</Form.Group>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={{ span: 5, offset: 1 }}>
					<Form>
						<Form.Label className="font-weight-bold text-success">Sau phản ứng :</Form.Label>

						<Form.Group controlId="SaltMass" style={{ marginTop: '7%' }}>
							<Form.Label>Kết quả phản ứng</Form.Label>
							<Form.Control value={comment} type="text" name="comment" plaintext required readOnly
								placeholder="Nhận xét kết quả..." />
						</Form.Group>

						<Form.Row>
							<Form.Group as={Col} controlId="NaPlus">
								<Form.Label>Na+ (mol)</Form.Label>
								<Form.Control value={result.Na_Plus} type="text" plaintext required readOnly />
							</Form.Group>

							<Form.Group as={Col} controlId="Ba2Plus">
								<Form.Label>Ba2+ (mol)</Form.Label>
								<Form.Control value={result.Ba_2Plus} type="text" plaintext required readOnly />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="KPlus">
								<Form.Label>K+ (mol)</Form.Label>
								<Form.Control value={result.K_Plus} type="text" plaintext required readOnly />
							</Form.Group>

							<Form.Group as={Col} controlId="Ca2Plus">
								<Form.Label>Ca2+ (mol)</Form.Label>
								<Form.Control value={result.Ca_2Plus} type="text" plaintext required readOnly />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="HCO3Minus">
								<Form.Label>HCO3- (mol)</Form.Label>
								<Form.Control value={result.HCO3_Minus} type="text" plaintext required readOnly />
							</Form.Group>

							<Form.Group as={Col} controlId="CO32Minus">
								<Form.Label>(CO3)2- (mol)</Form.Label>
								<Form.Control value={result.CO3_2Minus} type="text" plaintext required readOnly />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="OHMinusRemnant">
								<Form.Label>OH- dư (mol)</Form.Label>
								<Form.Control value={result.OH_Minus_Remnant} type="text" plaintext required readOnly />
							</Form.Group>

							<Form.Group as={Col} controlId="CO2Remnant">
								<Form.Label>CO2 dư (mol)</Form.Label>
								<Form.Control value={result.CO2_Remnant} type="text" plaintext required readOnly />
							</Form.Group>
						</Form.Row>
					</Form>
				</Col>
			</Row >
		</Container >
	)
}
