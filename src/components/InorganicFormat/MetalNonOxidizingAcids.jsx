import React, { useEffect } from "react";
import { Button, Row, Col, Form, Image, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { calculate, resetState } from "../../actions/formatAction";

export default function MetalNonOxidizingAcids() {
	const salt = useSelector((state) => state.format1);
	const dispatch = useDispatch();
	useEffect(() => dispatch(resetState(1)), [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		const input = {
			metalMass: e.target.MetalMass.value,
			h2Mol: e.target.H2Volume.value,
			axitType: e.target.Axit.value,
		};
		const action = calculate(1, input);
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

						<Form.Group controlId="MetalMass">
							<Form.Label>Khối lượng kim loại (gam)</Form.Label>
							<Form.Control
								type="text"
								name="MetalMass"
								required
								placeholder="Nhập khối lượng..."
							/>
							<Form.Text className="text-muted">
								Lưu ý : Kim loại phải đứng trước H trong dãy hoạt động !
							</Form.Text>
						</Form.Group>

						<Form.Group controlId="Axit">
							<Form.Label>Loại Axit</Form.Label>
							<Form.Control name="Axit" as="select">
								<option value="HCl">HCl</option>
								<option value="H2SO4">H2SO4 loãng</option>
							</Form.Control>
						</Form.Group>

						<Form.Group controlId="H2Volume">
							<Form.Label>Thể tích H2 (lít)</Form.Label>
							<Form.Control
								type="text"
								name="H2Volume"
								required
								placeholder="Nhập thể tích H2 thu được..."
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
						src="/img/format1.png"
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
						<Form.Group controlId="SaltMass">
							<Form.Label>Khối lượng muối (gam)</Form.Label>
							<Form.Control
								value={salt}
								type="text"
								name="SaltMass"
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
	);
}
