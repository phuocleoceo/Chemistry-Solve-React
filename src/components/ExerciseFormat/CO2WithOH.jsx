import React, { useState } from 'react';
import { Button, Row, Col, Form, Container } from 'react-bootstrap';

export default function CO2WithOH() {
	const [result, setResult] = useState({
		comment: "",
		Na_Plus: 0, K_Plus: 0, Ba_2Plus: 0, Ca_2Plus: 0,
		HCO3_Minus: 0, CO3_2Minus: 0,
		OH_Minus_Remnant: 0, CO2_Remnant: 0
	});

	function handleSubmit(e) {
		e.preventDefault();
		const molCO2 = parseFloat(e.target.CO2Volume.value) / 22.4;
		const VBazo = parseFloat(e.target.BazoVolume.value);
		const molNaOH = parseFloat(e.target.CMNaOH.value) * VBazo;
		const molKOH = parseFloat(e.target.CMKOH.value) * VBazo;
		const molBaOH2 = parseFloat(e.target.CMBaOH2.value) * VBazo;
		const molCaOH2 = parseFloat(e.target.CMCaOH2.value) * VBazo;
		const molOH = molNaOH + molKOH + molBaOH2 * 2 + molCaOH2 * 2;
		const T = molOH / molCO2;
		// calculate
		const NaPlus = molNaOH;
		const KPlus = molKOH;
		const Ba2Plus = molBaOH2;
		const Ca2Plus = molCaOH2;
		let commentValue = "";
		let OHMinusRemnant = 0;
		let CO2Remnant = 0;
		let HCO3Minus = 0;
		let CO32Minus = 0;
		//OH- + CO2 => HCO3- , OH- hết
		if (T <= 1) {
			commentValue = "Phản ứng chỉ tạo HCO3-, không kết tủa";
			OHMinusRemnant = 0;
			CO2Remnant = molCO2 - molOH;
			HCO3Minus = molOH;
			CO32Minus = 0;
		}
		//OH- + CO2 => HCO3-
		//2OH- + CO2 => CO3(2-) + H2O
		else if (T < 2) {
			commentValue = "Phản ứng tạo hỗn hợp HCO3- và (CO3)2-";
			OHMinusRemnant = 0;
			CO2Remnant = 0;
			const molCO3 = molOH - molCO2;
			HCO3Minus = molCO3;
			CO32Minus = molCO2 - molCO3;
		}
		// 2OH- + CO2 => CO3(2-) + H2O
		else {
			commentValue = "Phản ứng chỉ tạo (CO3)2-";
			OHMinusRemnant = molOH - molCO2 * 2;
			CO2Remnant = 0;
			HCO3Minus = 0;
			CO32Minus = molCO2;
		}

		setResult({
			comment: commentValue,
			Na_Plus: NaPlus,
			K_Plus: KPlus,
			Ba_2Plus: Ba2Plus,
			Ca_2Plus: Ca2Plus,
			OH_Minus_Remnant: OHMinusRemnant,
			CO2_Remnant: CO2Remnant,
			HCO3_Minus: HCO3Minus,
			CO3_2Minus: CO32Minus
		});
	}

	return (
		<Container style={{ marginTop: '0.3%' }}>
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
							<Form.Control value={result.comment} type="text" name="comment" required readOnly
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
