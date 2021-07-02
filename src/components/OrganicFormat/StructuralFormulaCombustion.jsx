import React, { useEffect } from 'react';
import { Button, Row, Col, Form, Container, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { calculate, resetState } from "../../actions/formatAction";

export default function StructuralFormulaCombustion() {
	const result = useSelector((state) => state.format8);
	const dispatch = useDispatch();
	useEffect(() => dispatch(resetState()), [dispatch]);

	function handleSubmit(e) {
		e.preventDefault();
		const input = {
			InorganicMass: parseFloat(e.target.InorganicMass.value),
			MolMass: parseFloat(e.target.MolMass.value),
			Case: parseInt(e.target.Case.value),
			Variation: parseFloat(e.target.Variation.value),
			Precipitate: parseFloat(e.target.Precipitate.value)
		};
		console.log(input);
		const action = calculate(input);
		dispatch(action);
	}
	return (
		<Container style={{ marginTop: "1%" }}>
			<Row>
				<Col sm={11}>
					<Form onSubmit={handleSubmit}>
						<Form.Label className="font-weight-bold text-success">
							Dữ kiện :
						</Form.Label>

						<Form.Row>
							<Form.Group as={Col} controlId="InorganicMass">
								<Form.Label>Khối lượng chất hữu cơ (g)</Form.Label>
								<Form.Control
									type="text"
									name="InorganicMass"
									required
									placeholder="Nhập khối lượng chất hữu cơ..."
								/>
							</Form.Group>

							<Form.Group as={Col} controlId="MolMass">
								<Form.Label>Khối lượng mol (g/mol)</Form.Label>
								<Form.Control
									type="text"
									name="MolMass"
									required
									placeholder="Nhập khối lượng mol..."
								/>
							</Form.Group>
						</Form.Row>

						<Form.Row>
							<Form.Group as={Col} sm={6} controlId="Case">
								<Form.Label>Khí CO2 sau phản ứng đốt cháy được dẫn vào nước vôi trong dư thì :</Form.Label>
								<Form.Control name="Case" as="select">
									<option value="1">Khối lượng bình tăng</option>
									<option value="2">Khối lượng dung dịch tăng</option>
									<option value="3">Khối lượng dung dịch giảm</option>
								</Form.Control>
							</Form.Group>

							<Form.Row>
								<Form.Group as={Col} controlId="Variation">
									<Form.Label>Lượng tăng giảm (g)</Form.Label>
									<Form.Control
										type="text"
										name="Variation"
										required
										placeholder="Nhập lượng tăng giảm..."
									/>
								</Form.Group>
								<Form.Group as={Col} controlId="Precipitate">
									<Form.Label>Kết tủa thu được (g)</Form.Label>
									<Form.Control
										type="text"
										name="Precipitate"
										required
										placeholder="Nhập khối lượng kết tủa..."
									/>
								</Form.Group>
							</Form.Row>
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
						Kết quả (xấp xỉ):
					</Form.Label>

					<Form.Group controlId="Comment">
						<Form.Label>Công thức cần tìm</Form.Label>
						<Form.Control
							value={result}
							type="text"
							plaintext
							required
							readOnly
						/>
					</Form.Group>
				</Col>
				<Col sm={6}>
					<Image src="/img/format8.JPG"
						width="90%" height="auto" />
				</Col>
			</Row>
		</Container>
	)
}
