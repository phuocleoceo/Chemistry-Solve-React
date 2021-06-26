import React, { useState } from 'react';
import { Button, Row, Col, Form, Image, Container } from 'react-bootstrap';

export default function Al3WithOH() {
	const [result, setResult] = useState({
		comment: "", Al_OH3: 0, AlO2_Minus: 0,
		Al_3Plus_Remnant: 0, OH_Minus_Remnant: 0
	});

	function handleSubmit(e) {
		e.preventDefault();
		const Al_3Plus = parseFloat(e.target.Al3Plus.value);
		const OH_Minus = parseFloat(e.target.OHMinus.value);
		const T = OH_Minus / Al_3Plus;
		let commentValue = "";
		let AlOH3 = 0;
		let AlO2Minus = 0;
		let Al3PlusRemnant = 0;
		let OHMinusRemnant = 0;
		if (T < 3) {
			commentValue = "Al3+ dư, OH- hết , tạo Al(OH)3 kết tủa";
			AlOH3 = OH_Minus / 3;
			Al3PlusRemnant = Al_3Plus - OH_Minus / 3;
			AlO2Minus = 0;
			OHMinusRemnant = 0;
		}
		else if (T === 3) {
			commentValue = "Al3+ và OH- phản ứng vừa đủ, tạo Al(OH)3 kết tủa cực đại";
			AlOH3 = OH_Minus / 3;
			Al3PlusRemnant = 0;
			AlO2Minus = 0;
			OHMinusRemnant = 0;
		}
		else if (T < 4) {
			commentValue = "OH- dư hoà tan 1 phần Al(OH)3 tạo AlO2- rồi mới hết";
			AlOH3 = 4 * Al_3Plus - OH_Minus;
			Al3PlusRemnant = 0;
			AlO2Minus = Al_3Plus - AlOH3;
			OHMinusRemnant = 0;
		}
		else if (T === 4) {
			commentValue = "OH- dư hoà tan hết Al(OH)3 thành AlO2- rồi hết";
			AlOH3 = 0;
			Al3PlusRemnant = 0;
			AlO2Minus = Al_3Plus;
			OHMinusRemnant = 0;
		}
		else {
			commentValue = "OH- dư hoà tan hết Al(OH)3 thành AlO2- và vẫn dư";
			AlOH3 = 0;
			Al3PlusRemnant = 0;
			AlO2Minus = Al_3Plus;
			OHMinusRemnant = OH_Minus - 4 * Al_3Plus;
		}
		setResult({
			comment: commentValue,
			Al_OH3: AlOH3,
			AlO2_Minus: AlO2Minus,
			Al_3Plus_Remnant: Al3PlusRemnant,
			OH_Minus_Remnant: OHMinusRemnant
		});
	}

	return (
		<Container style={{ marginTop: '1%' }}>
			<Row>
				<Col sm={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">Trước phản ứng :</Form.Label>

						<Form.Group controlId="Al3Plus">
							<Form.Label>Al3+ (mol)</Form.Label>
							<Form.Control type="text" name="Al3Plus" required
								placeholder="Nhập số mol Al3+..." />
						</Form.Group>

						<Form.Group controlId="OHMinus">
							<Form.Label>OH- (mol)</Form.Label>
							<Form.Control type="text" name="OHMinus" required
								placeholder="Nhập số mol OH-..." />
						</Form.Group>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={{ span: 5, offset: 1 }}>
					<Image src="https://thietbiruaxegiare.net/wp-content/uploads/2020/11/aloh3-ket-tua-mau-gi-1.jpg"
						width="100%" height="auto" />
				</Col>
			</Row >
			<hr />
			<Row>
				<Col sm={6}>
					<Form.Label className="font-weight-bold text-success">Sau phản ứng :</Form.Label>

					<Form.Group controlId="Comment">
						<Form.Label>Kết quả phản ứng</Form.Label>
						<Form.Control value={result.comment} type="text" plaintext required readOnly
							placeholder="Nhận xét kết quả..." />
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="AlOH3">
							<Form.Label>Al(OH)3 (mol)</Form.Label>
							<Form.Control value={result.Al_OH3} type="text" plaintext required readOnly />
						</Form.Group>

						<Form.Group as={Col} controlId="AlO2Minus">
							<Form.Label>AlO2- (mol)</Form.Label>
							<Form.Control value={result.AlO2_Minus} type="text" plaintext required readOnly />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="Al3PlusRemnant">
							<Form.Label>Al3+ dư (mol)</Form.Label>
							<Form.Control value={result.Al_3Plus_Remnant} type="text" plaintext required readOnly />
						</Form.Group>

						<Form.Group as={Col} controlId="OHMinusRemnant">
							<Form.Label>OH- dư (mol)</Form.Label>
							<Form.Control value={result.OH_Minus_Remnant} type="text" plaintext required readOnly />
						</Form.Group>
					</Form.Row>
				</Col>

				<Col sm={6}>

				</Col>
			</Row >
		</Container >
	)
}
