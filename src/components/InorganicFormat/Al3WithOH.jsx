import React, { useEffect } from "react";
import { Button, Row, Col, Form, Image, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { calculate, resetState } from "../../actions/formatAction";

export default function Al3WithOH() {
	const result = useSelector((state) => state.format4);
	const dispatch = useDispatch();
	useEffect(() => dispatch(resetState()), [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		const input = {
			Al_3Plus: parseFloat(e.target.Al3Plus.value),
			OH_Minus: parseFloat(e.target.OHMinus.value),
		};
		const action = calculate(input);
		dispatch(action);
	}

	return (
		<Container style={{ marginTop: "1%" }}>
			<Row>
				<Col sm={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">
							Trước phản ứng :
						</Form.Label>

						<Form.Group controlId="Al3Plus">
							<Form.Label>Al3+ (mol)</Form.Label>
							<Form.Control
								type="text"
								name="Al3Plus"
								required
								placeholder="Nhập số mol Al3+..."
							/>
						</Form.Group>

						<Form.Group controlId="OHMinus">
							<Form.Label>OH- (mol)</Form.Label>
							<Form.Control
								type="text"
								name="OHMinus"
								required
								placeholder="Nhập số mol OH-..."
							/>
						</Form.Group>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={{ span: 5, offset: 1 }}>
					<Image
						src="/img/format4.jpg"
						width="100%"
						height="auto"
					/>
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
						<Form.Group as={Col} controlId="AlOH3">
							<Form.Label>Al(OH)3 (mol)</Form.Label>
							<Form.Control
								value={result.Al_OH3}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="AlO2Minus">
							<Form.Label>AlO2- (mol)</Form.Label>
							<Form.Control
								value={result.AlO2_Minus}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group as={Col} controlId="Al3PlusRemnant">
							<Form.Label>Al3+ dư (mol)</Form.Label>
							<Form.Control
								value={result.Al_3Plus_Remnant}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="OHMinusRemnant">
							<Form.Label>OH- dư (mol)</Form.Label>
							<Form.Control
								value={result.OH_Minus_Remnant}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>
					</Form.Row>
				</Col>

				<Col sm={6}></Col>
			</Row>
		</Container>
	);
}
