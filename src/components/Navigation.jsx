import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigation() {
	return (
		<Navbar bg="dark" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Nav.Link as={Link} className="d-inline p-2 text-white" to="/">
						<img
							src="/img/icon.png"
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt="Logo"
						/>
						&nbsp;
						Trang chủ
					</Nav.Link>

					<NavDropdown title={<span className="text-white">Dạng bài tập</span>}
						className="nav-down" id="basic-nav-dropdown">
						<NavDropdown.Item>
							<Nav.Link as={Link} to="/format1" className="d-inline p-2 text-dark">
								Kim loại tác dụng HCl/H2SO4
							</Nav.Link>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<Nav.Link as={Link} to="/format2" className="d-inline p-2 text-dark">
								CO2 tác dụng dung dịch kiềm
							</Nav.Link>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<Nav.Link as={Link} to="/format3" className="d-inline p-2 text-dark">
								Hỗn hợp Oxit sắt tác dụng HNO3
							</Nav.Link>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<Nav.Link as={Link} to="/format4" className="d-inline p-2 text-dark">
								Al3+ tác dụng OH-
							</Nav.Link>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<Nav.Link as={Link} to="/format5" className="d-inline p-2 text-dark">
								AlO2- tác dụng H+
							</Nav.Link>
						</NavDropdown.Item>

						<NavDropdown.Item>
							<Nav.Link as={Link} to="/format6" className="d-inline p-2 text-dark">
								H+ tác dụng hỗn hợp HCO3- và (CO3)2-
							</Nav.Link>
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
			</Navbar.Collapse>
		</Navbar >
	)
}
