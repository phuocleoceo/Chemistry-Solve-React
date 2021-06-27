import React, { useState } from 'react';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';

export default function HWithHCO3AndCO3() {
	const [result, setResult] = useState({
		comment: "", CO2: 0, HPlus_Remnant: 0,
		HCO3_Minus_Remnant: 0, CO3_2Minus_Remnant: 0
	});

	function handleSubmit(e) {
		e.preventDefault();
		let HCO3_Minus = parseFloat(e.target.HCO3Minus.value);
		let CO3_2Minus = parseFloat(e.target.CO32Minus.value);
		let H_Plus = parseFloat(e.target.HPlus.value);
		const Case = parseInt(e.target.Case.value);
		let commentValue = "";
		let CO2Value = 0;
		let HPlusRemnant = 0;
		let HCO3MinusRemnant = 0;
		let CO3_2MinusRemnant = 0;

		//Trường hợp 1 :
		// H+ + CO3(2-) => HCO3-
		// H+ + HCO3-   => CO2 + H20   HCO3- tổng của phản ứng 1 với đề bài cho
		if (Case === 1) {
			if (H_Plus < CO3_2Minus) {
				commentValue = "H+ hết, CO3(2-) dư, không có khí CO2 thoát ra";
				CO2Value = 0;
				HPlusRemnant = 0;
				HCO3MinusRemnant = H_Plus + HCO3_Minus;
				CO3_2MinusRemnant = CO3_2Minus - H_Plus;
			}
			if (H_Plus === CO3_2Minus) {
				commentValue = "H+ p/ứ vừa đủ CO3(2-), không có CO2 thoát ra";
				CO2Value = 0;
				HPlusRemnant = 0;
				HCO3MinusRemnant = H_Plus + HCO3_Minus;
				CO3_2MinusRemnant = CO3_2Minus - H_Plus;
			}
			H_Plus = H_Plus - CO3_2Minus; // trừ đi phần H+ đã pu với CO3(2-)
			HCO3_Minus = HCO3_Minus + CO3_2Minus; // CO3(2-) chuyển hết thành HCO3-
			if (H_Plus < HCO3_Minus) {
				//CO3(2-) đã chuyển hoá hết thành HCO3-
				commentValue = "H+ p/ứ hết CO3(2-) và 1 phần HCO3-, tạo CO2";
				CO2Value = H_Plus;    // 99.99% nH+ dư < nHCO3-
				HPlusRemnant = 0;
				HCO3MinusRemnant = HCO3_Minus - H_Plus;
				CO3_2MinusRemnant = 0;
			}
			if (H_Plus === HCO3_Minus) {
				commentValue = "H+(hết) p/ứ hết CO3(2-) và HCO3-, CO2 cực đại";
				CO2Value = HCO3_Minus;
				HPlusRemnant = 0;
				HCO3MinusRemnant = 0;
				CO3_2MinusRemnant = 0;
			}
			if (H_Plus > HCO3_Minus) {
				commentValue = "H+(dư) p/ứ hết CO3(2-) và HCO3-, CO2 cực đại";
				CO2Value = HCO3_Minus;
				HPlusRemnant = H_Plus - HCO3_Minus;
				HCO3MinusRemnant = 0;
				CO3_2MinusRemnant = 0;
			}
		}
		//Trường hợp 2: Xảy ra đồng thời 2 phản ứng
		// HCO3- + H+ => CO2 + H2O
		// CO3(2-) + 2H+ => CO2 + H2O
		// Gọi số mol HCO3- phản ứng là a, CO3(2-) phản ứng là b ta có
		// a/b = nHCO3- / nCO3(2-)  =>  a = b * nHCO3-/nCO3(2-)
		// a + 2b = nH+; =>  b*nHCO3-/nCO3(2-) + 2b = nH+
		// giải tìm b và a => nCO2 = a + b
		else if (Case === 2) {
			if (H_Plus < (HCO3_Minus + 2 * CO3_2Minus)) {
				commentValue = "H+ p/ứ với cả CO3(2-) và HCO3-, CO2 thoát ra";
				const CO3_React = H_Plus / (HCO3_Minus / CO3_2Minus + 2);
				const HCO3_React = CO3_React * HCO3_Minus / CO3_2Minus;
				CO2Value = HCO3_React + CO3_React;
				HPlusRemnant = 0;
				HCO3MinusRemnant = HCO3_Minus - HCO3_React;
				CO3_2MinusRemnant = CO3_2Minus - CO3_React;
			}
			if (H_Plus === (HCO3_Minus + 2 * CO3_2Minus)) {
				commentValue = "H+(hết) p/ứ hết CO3(2-) và HCO3-, CO2 cực đại";
				CO2Value = HCO3_Minus + CO3_2Minus;
				HPlusRemnant = 0;
				HCO3MinusRemnant = 0;
				CO3_2MinusRemnant = 0;
			}
			if (H_Plus > (HCO3_Minus + 2 * CO3_2Minus)) {
				commentValue = "H+(dư) p/ứ hết CO3(2-) và HCO3-, CO2 cực đại";
				CO2Value = HCO3_Minus + CO3_2Minus;
				HPlusRemnant = H_Plus - (HCO3_Minus + 2 * CO3_2Minus);
				HCO3MinusRemnant = 0;
				CO3_2MinusRemnant = 0;
			}
		}
		setResult({
			comment: commentValue,
			CO2: CO2Value,
			HPlus_Remnant: HPlusRemnant,
			HCO3_Minus_Remnant: HCO3MinusRemnant,
			CO3_2Minus_Remnant: CO3_2MinusRemnant
		});
	}
	return (
		<Container style={{ marginTop: '1%' }}>
			<Row>
				<Col sm={11}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">Trước phản ứng :</Form.Label>

						<Form.Row>
							<Form.Group as={Col} controlId="HCO3Minus">
								<Form.Label>HCO3- (mol)</Form.Label>
								<Form.Control type="text" name="HCO3Minus" required
									placeholder="Nhập số mol HCO3-..." />
							</Form.Group>

							<Form.Group as={Col} controlId="CO32Minus">
								<Form.Label>(CO3)2- (mol)</Form.Label>
								<Form.Control type="text" name="CO32Minus" required
									placeholder="Nhập số mol (CO3)2-..." />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="HPlus">
								<Form.Label>H+ (mol)</Form.Label>
								<Form.Control type="text" name="HPlus" required
									placeholder="Nhập số mol H+..." />
							</Form.Group>

							<Form.Group as={Col} controlId="Case">
								<Form.Label>Chọn trường hợp</Form.Label>
								<Form.Control name="Case" as="select">
									<option value="1">Đổ H+ vào HCO3- và (CO3)2-</option>
									<option value="2">Đổ HCO3- và (CO3)2- vào H+</option>
								</Form.Control>
							</Form.Group>
						</Form.Row>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
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
						<Form.Group as={Col} controlId="CO2">
							<Form.Label>CO2 (mol)</Form.Label>
							<Form.Control value={result.CO2} type="text" plaintext required readOnly />
						</Form.Group>

						<Form.Group as={Col} controlId="HPlusRemnant">
							<Form.Label>H+ dư (mol)</Form.Label>
							<Form.Control value={result.HPlus_Remnant} type="text" plaintext required readOnly />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="HCO3MinusRemnant">
							<Form.Label>HCO3- dư (mol)</Form.Label>
							<Form.Control value={result.HCO3_Minus_Remnant} type="text" plaintext required readOnly />
						</Form.Group>

						<Form.Group as={Col} controlId="CO32MinusRemnant">
							<Form.Label>(CO3)2- dư (mol)</Form.Label>
							<Form.Control value={result.CO3_2Minus_Remnant} type="text" plaintext required readOnly />
						</Form.Group>
					</Form.Row>
				</Col>

				<Col sm={6}>

				</Col>
			</Row >
		</Container >
	)
}
