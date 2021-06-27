import React, { useState } from 'react';
import { Button, Row, Col, Form, Image, Container } from 'react-bootstrap';

export default function AlO2WithH() {
	const [result, setResult] = useState({
		comment: "", Al_OH3: 0, Al_3Plus: 0,
		AlO2_Minus_Remnant: 0, HPlus_Remnant: 0
	});

	function handleSubmit(e) {
		e.preventDefault();
		const AlO2_Minus = parseFloat(e.target.AlO2Minus.value);
		const H_Plus = parseFloat(e.target.HPlus.value);
		const T = H_Plus / AlO2_Minus;
		let commentValue = "";
		let AlOH3 = 0;
		let Al3Plus = 0;
		let AlO2MinusRemnant = 0;
		let HPlusRemnant = 0;
		if (T < 1) {
			commentValue = "AlO2- dư, H+ hết, tạo Al(OH)3 kết tủa";
			AlOH3 = H_Plus;
			AlO2MinusRemnant = AlO2_Minus - H_Plus;
			Al3Plus = 0;
			HPlusRemnant = 0;
		}
		else if (T === 1) {
			commentValue = "AlO2- và H+ phản ứng vừa đủ, tạo Al(OH)3 kết tủa cực đại";
			AlOH3 = H_Plus;
			AlO2MinusRemnant = 0;
			Al3Plus = 0;
			HPlusRemnant = 0;
		}
		else if (T < 4) {
			commentValue = "H+ dư hoà tan 1 phần kết tủa Al(OH)3 thành Al3+ rồi hết";
			AlOH3 = (4 * AlO2_Minus - H_Plus) / 3;
			AlO2MinusRemnant = 0;
			Al3Plus = AlO2_Minus - AlOH3;
			HPlusRemnant = 0;
		}
		else if (T === 4) {
			commentValue = "H+ dư hoà tan hết Al(OH)3 thành Al3+ rồi hết";
			AlOH3 = 0;
			AlO2MinusRemnant = 0;
			Al3Plus = AlO2_Minus;
			HPlusRemnant = 0;
		}
		else {
			commentValue = "H+ dư hoà tan hết Al(OH)3 thành Al3+ và vẫn dư";
			AlOH3 = 0;
			AlO2MinusRemnant = 0;
			Al3Plus = AlO2_Minus;
			HPlusRemnant = H_Plus - 4 * AlO2_Minus;
		}

		setResult({
			comment: commentValue,
			Al_OH3: AlOH3,
			Al_3Plus: Al3Plus,
			AlO2_Minus_Remnant: AlO2MinusRemnant,
			HPlus_Remnant: HPlusRemnant
		});
	}
	return (
		<Container style={{ marginTop: '1%' }}>
			<Row>
				<Col sm={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">Trước phản ứng :</Form.Label>

						<Form.Group controlId="AlO2Minus">
							<Form.Label>AlO2- (mol)</Form.Label>
							<Form.Control type="text" name="AlO2Minus" required
								placeholder="Nhập số mol AlO2-..." />
						</Form.Group>

						<Form.Group controlId="HPlus">
							<Form.Label>H+ (mol)</Form.Label>
							<Form.Control type="text" name="HPlus" required
								placeholder="Nhập số mol H+..." />
						</Form.Group>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={{ span: 5, offset: 1 }}>
					<Image src="https://media1.thehungryjpeg.com/thumbs2/800_66291_118ab9ed20ef29c5391b1de6cb5737d16e516f38_chemistry-science-svg-dxf-eps-png-files.jpg"
						width="82%" height="auto" />
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

						<Form.Group as={Col} controlId="Al3Plus">
							<Form.Label>Al3+ (mol)</Form.Label>
							<Form.Control value={result.Al_3Plus} type="text" plaintext required readOnly />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="AlO2MinusRemnant">
							<Form.Label>AlO2- dư (mol)</Form.Label>
							<Form.Control value={result.AlO2_Minus_Remnant} type="text" plaintext required readOnly />
						</Form.Group>

						<Form.Group as={Col} controlId="HPlusRemnant">
							<Form.Label>H+ dư (mol)</Form.Label>
							<Form.Control value={result.HPlus_Remnant} type="text" plaintext required readOnly />
						</Form.Group>
					</Form.Row>
				</Col>

				<Col sm={6}>

				</Col>
			</Row >
		</Container >
	)
}
