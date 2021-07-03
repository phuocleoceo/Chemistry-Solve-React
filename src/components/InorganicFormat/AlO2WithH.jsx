import React, { useEffect } from 'react';
import { Button, Row, Col, Form, Image, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { calculate, resetState } from "../../actions/formatAction";

export default function AlO2WithH() {
	const result = useSelector((state) => state.format5);
	const dispatch = useDispatch();
	useEffect(() => dispatch(resetState(5)), [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		const input = {
			AlO2_Minus: e.target.AlO2Minus.value,
			H_Plus: e.target.HPlus.value
		};
		const action = calculate(5, input);
		dispatch(action);
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
					<Image src="/img/format5.jpg"
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
