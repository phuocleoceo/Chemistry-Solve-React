import React, { useEffect } from "react";
import { Button, Row, Col, Form, Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { calculate, resetState } from "../../actions/formatAction";

export default function HWithHCO3AndCO3() {
	const result = useSelector((state) => state.format6);
	const dispatch = useDispatch();
	useEffect(() => dispatch(resetState(6)), [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		const input = {
			HCO3_Minus: e.target.HCO3Minus.value,
			CO3_2Minus: e.target.CO32Minus.value,
			H_Plus: e.target.HPlus.value,
			Case: parseInt(e.target.Case.value),
		};
		const action = calculate(6, input);
		dispatch(action);
	}
	return (
		<Container style={{ marginTop: "1%" }}>
			<Row>
				<Col sm={11}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">
							Trước phản ứng :
						</Form.Label>

						<Form.Row>
							<Form.Group as={Col} controlId="HCO3Minus">
								<Form.Label>HCO3- (mol)</Form.Label>
								<Form.Control
									type="text"
									name="HCO3Minus"
									required
									placeholder="Nhập số mol HCO3-..."
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="CO32Minus">
								<Form.Label>(CO3)2- (mol)</Form.Label>
								<Form.Control
									type="text"
									name="CO32Minus"
									required
									placeholder="Nhập số mol (CO3)2-..."
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="HPlus">
								<Form.Label>H+ (mol)</Form.Label>
								<Form.Control
									type="text"
									name="HPlus"
									required
									placeholder="Nhập số mol H+..."
								/>
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
			</Row>
			<hr />
			<Row>
				<Col sm={6}>
					<Form.Label className="font-weight-bold text-success">
						Sau phản ứng :
					</Form.Label>

					<Form.Group controlId="Comment">
						<Form.Label>Kết quả phản ứng</Form.Label>
						<Form.Control
							value={result.comment}
							type="text"
							plaintext
							required
							readOnly
							placeholder="Nhận xét kết quả..."
						/>
					</Form.Group>

					<Form.Row>
						<Form.Group as={Col} controlId="CO2">
							<Form.Label>CO2 (mol)</Form.Label>
							<Form.Control
								value={result.CO2}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="HPlusRemnant">
							<Form.Label>H+ dư (mol)</Form.Label>
							<Form.Control
								value={result.HPlus_Remnant}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="HCO3MinusRemnant">
							<Form.Label>HCO3- dư (mol)</Form.Label>
							<Form.Control
								value={result.HCO3_Minus_Remnant}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="CO32MinusRemnant">
							<Form.Label>(CO3)2- dư (mol)</Form.Label>
							<Form.Control
								value={result.CO3_2Minus_Remnant}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>
					</Form.Row>
				</Col>
				<Col sm={6}>
					<Image src="/img/format6.jpg"
						width="100%" height="auto" style={{ marginTop: '10%' }} />
				</Col>
			</Row>
		</Container>
	);
}
