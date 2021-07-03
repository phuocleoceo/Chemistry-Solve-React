import React, { useEffect } from 'react';
import { Button, Row, Col, Form, Image, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { calculate, resetState } from "../../actions/formatAction";

export default function GlucozoFermentation() {
	const result = useSelector((state) => state.format7);
	const dispatch = useDispatch();
	useEffect(() => dispatch(resetState(7)), [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		const input = {
			GlucozoMass: e.target.GlucozoMass.value,
			Efficiency: e.target.Efficiency.value
		};
		const action = calculate(7, input);
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

						<Form.Group controlId="GlucozoMass">
							<Form.Label>Khối lượng glucozơ (gam)</Form.Label>
							<Form.Control
								type="text"
								name="GlucozoMass"
								required
								placeholder="Nhập khối lượng glucozơ..."
							/>
						</Form.Group>

						<Form.Group controlId="Efficiency">
							<Form.Label>Hiệu suất phản ứng (%)</Form.Label>
							<Form.Control
								type="text"
								name="Efficiency"
								required
								placeholder="Nhập hiệu suất phản ứng..."
							/>
						</Form.Group>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={{ span: 5, offset: 1 }} style={{ marginTop: "5%" }}>
					<Image
						width="100%"
						height="auto"
						src="/img/format7.png"
					/>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col sm={6}>
					<Form>
						<Form.Label className="font-weight-bold text-success">
							Sau phản ứng :
						</Form.Label>

						<Form.Group controlId="C2H5OH">
							<Form.Label>C2H5OH (mol)</Form.Label>
							<Form.Control
								value={result.C2H5OH}
								type="text"
								name="C2H5OH"
								plaintext
								required
								readOnly
							/>
						</Form.Group>

						<Form.Group controlId="CO2">
							<Form.Label>CO2 (mol)</Form.Label>
							<Form.Control
								value={result.CO2}
								type="text"
								name="CO2"
								plaintext
								required
								readOnly
							/>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={6}></Col>
			</Row>
		</Container>
	)
}
