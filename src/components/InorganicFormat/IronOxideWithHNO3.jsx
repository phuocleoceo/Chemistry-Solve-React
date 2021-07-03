import React, { useEffect } from "react";
import { Button, Row, Col, Form, Image, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { calculate, resetState } from "../../actions/formatAction";

export default function IronOxideWithHNO3() {
	const result = useSelector((state) => state.format3);
	const dispatch = useDispatch();
	useEffect(() => dispatch(resetState(3)), [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		const input = {
			OxideMass: e.target.OxideMass.value,
			molNO: e.target.NOVolume.value,
			molNO2: e.target.NO2Volume.value,
			molN2O: e.target.N2OVolume.value,
			molN2: e.target.N2Volume.value,
		};
		const action = calculate(3, input);
		dispatch(action);
	}

	return (
		<Container style={{ marginTop: "1%" }}>
			<Row>
				<Col sm={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">
							Dữ kiện :
						</Form.Label>

						<Form.Group controlId="OxideMass">
							<Form.Label>Khối lượng hỗn hợp oxit sắt (gam)</Form.Label>
							<Form.Control
								type="text"
								name="OxideMass"
								required
								placeholder="Nhập khối lượng hỗn hợp oxit sắt..."
							/>
							<Form.Text className="text-muted">
								Hỗn hợp oxit sắt có thể gồm : FeO, Fe2O3, Fe3O4, Fe dư
							</Form.Text>
						</Form.Group>

						<Form.Label className="text-primary">
							Thể tích khí thoát ra :
						</Form.Label>

						<Form.Row>
							<Form.Group as={Col} controlId="NOVolume">
								<Form.Label>NO (lít)</Form.Label>
								<Form.Control
									type="text"
									name="NOVolume"
									required
									placeholder="Nhập thể tích khí NO..."
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="NO2Volume">
								<Form.Label>NO2 (lít)</Form.Label>
								<Form.Control
									type="text"
									name="NO2Volume"
									required
									placeholder="Nhập thể tích khí NO2..."
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="N2OVolume">
								<Form.Label>N2O (lít)</Form.Label>
								<Form.Control
									type="text"
									name="N2OVolume"
									required
									placeholder="Nhập thể tích khí N2O..."
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="N2Volume">
								<Form.Label>N2 (lít)</Form.Label>
								<Form.Control
									type="text"
									name="N2Volume"
									required
									placeholder="Nhập thể tích khí N2..."
								/>
							</Form.Group>
						</Form.Row>

						<Form.Group>
							<Button variant="primary" type="submit" block>
								Tính toán
							</Button>
						</Form.Group>
					</Form>
				</Col>

				<Col sm={{ span: 5, offset: 1 }}>
					<Image
						src="/img/format3.jpg"
						width="100%"
						height="auto"
					/>
				</Col>
			</Row>
			<hr />
			<Row>
				<Col sm={6}>
					<Form>
						<Form.Label className="font-weight-bold text-success">
							Kết quả :
						</Form.Label>

						<Form.Group controlId="FeMass">
							<Form.Label>Khối lượng sắt (gam)</Form.Label>
							<Form.Control
								value={result.Fe_Mass}
								type="text"
								plaintext
								required
								readOnly
							/>
						</Form.Group>

						<Form.Group controlId="HNO3">
							<Form.Label>HNO3 (mol)</Form.Label>
							<Form.Control
								value={result.mol_HNO3}
								type="text"
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
