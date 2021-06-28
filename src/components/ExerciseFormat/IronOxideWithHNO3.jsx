import React, { useEffect } from 'react';
import { Button, Row, Col, Form, Image, Container } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { calculate, resetState } from "../../actions/formatAction";

export default function IronOxideWithHNO3() {
	const result = useSelector((state) => state.format3);
	const dispatch = useDispatch();
	useEffect(() => dispatch(resetState()), [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		const input = {
			OxideMass: parseFloat(e.target.OxideMass.value),
			molNO: parseFloat(e.target.NOVolume.value) / 22.4,
			molNO2: parseFloat(e.target.NO2Volume.value) / 22.4,
			molN2O: parseFloat(e.target.N2OVolume.value) / 22.4,
			molN2: parseFloat(e.target.N2Volume.value) / 22.4
		};
		const action = calculate(input);
		dispatch(action);
	}

	return (
		<Container style={{ marginTop: '1%' }}>
			<Row>
				<Col sm={6}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">Dữ kiện :</Form.Label>

						<Form.Group controlId="OxideMass">
							<Form.Label>Khối lượng hỗn hợp oxit sắt (gam)</Form.Label>
							<Form.Control type="text" name="OxideMass" required
								placeholder="Nhập khối lượng hỗn hợp oxit sắt..." />
							<Form.Text className="text-muted">
								Hỗn hợp oxit sắt có thể gồm : FeO, Fe2O3, Fe3O4, Fe dư
							</Form.Text>
						</Form.Group>

						<Form.Label className="text-primary">Thể tích khí thoát ra :</Form.Label>

						<Form.Row>
							<Form.Group as={Col} controlId="NOVolume">
								<Form.Label>NO (lít)</Form.Label>
								<Form.Control type="text" name="NOVolume" required
									placeholder="Nhập thể tích khí NO..." />
							</Form.Group>

							<Form.Group as={Col} controlId="NO2Volume">
								<Form.Label>NO2 (lít)</Form.Label>
								<Form.Control type="text" name="NO2Volume" required
									placeholder="Nhập thể tích khí NO2..." />
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} controlId="N2OVolume">
								<Form.Label>N2O (lít)</Form.Label>
								<Form.Control type="text" name="N2OVolume" required
									placeholder="Nhập thể tích khí N2O..." />
							</Form.Group>

							<Form.Group as={Col} controlId="N2Volume">
								<Form.Label>N2 (lít)</Form.Label>
								<Form.Control type="text" name="N2Volume" required
									placeholder="Nhập thể tích khí N2..." />
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
					<Image src="https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/206369814_826366101337990_5656118647716604253_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_ohc=d-FeQ9kp9YoAX_2qogJ&tn=LmsjCjdx2PD-F9Wv&_nc_ht=scontent-hkg4-1.xx&oh=823ff0a91244059a673fbabb91db0377&oe=60DDA34A"
						width="100%" height="auto" />
				</Col>
			</Row >
			<hr />
			<Row>
				<Col sm={6}>
					<Form>
						<Form.Label className="font-weight-bold text-success">Kết quả :</Form.Label>

						<Form.Group controlId="FeMass">
							<Form.Label>Khối lượng sắt (gam)</Form.Label>
							<Form.Control value={result.Fe_Mass} type="text" plaintext required readOnly />
						</Form.Group>

						<Form.Group controlId="HNO3">
							<Form.Label>HNO3 (mol)</Form.Label>
							<Form.Control value={result.mol_HNO3} type="text" plaintext required readOnly />
						</Form.Group>
					</Form>
				</Col>

				<Col sm={6}>

				</Col>
			</Row >
		</Container >
	)
}
