import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';

export default function Navigation() {
	return (
		<Navbar bg="dark" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Nav.Link as={Link} className="d-inline p-2 text-white" to="/">
						<Image
							src="/img/icon.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="Logo"
						/>
						&nbsp;
						Trang chủ
					</Nav.Link>

					<NavDropdown title={<span className="text-white">Dạng bài tập vô cơ</span>}
						className="nav-down" id="basic-nav-dropdown">
						<NavDropdown.Item as={Link} to="/format1">
							Kim loại tác dụng HCl/H2SO4
						</NavDropdown.Item>

						<NavDropdown.Item as={Link} to="/format2">
							CO2 tác dụng dung dịch kiềm
						</NavDropdown.Item>

						<NavDropdown.Item as={Link} to="/format3">
							Hỗn hợp Oxit sắt tác dụng HNO3
						</NavDropdown.Item>

						<NavDropdown.Item as={Link} to="/format4">
							Al3+ tác dụng OH-
						</NavDropdown.Item>

						<NavDropdown.Item as={Link} to="/format5">
							AlO2- tác dụng H+
						</NavDropdown.Item>

						<NavDropdown.Item as={Link} to="/format6">
							H+ tác dụng hỗn hợp HCO3- và (CO3)2-
						</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown title={<span className="text-white">Dạng bài tập hữu cơ</span>}
						className="nav-down" id="basic-nav-dropdown">
						<NavDropdown.Item as={Link} to="/format7">
							Lên men glucozơ
						</NavDropdown.Item>

						<NavDropdown.Item as={Link} to="/format8">
							Tìm CTCT từ phản ứng đốt cháy
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar >
	)
}
