import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';

export default function Navigation() {
	return (
		<Navbar bg="dark" expand="lg">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>

					<NavLink className="d-inline p-2 bg-dark text-white" to="/">
						Home
					</NavLink>

					<Dropdown className="d-inline p-2 bg-dark text-white">
						<Dropdown.Toggle id="dropdown-basic">
							Dạng bài tập
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item href="/format1">Kim loại tác dụng HCl/H2SO4</Dropdown.Item>
							<Dropdown.Item href="/format2">CO2 tác dụng dung dịch kiềm</Dropdown.Item>
							<Dropdown.Item href="/format3">Hỗn hợp Oxit sắt tác dụng HNO3</Dropdown.Item>
							<Dropdown.Item href="/format4">Al3+ tác dụng OH-</Dropdown.Item>
							<Dropdown.Item href="/format5">AlO2- tác dụng H+</Dropdown.Item>
							<Dropdown.Item href="/format6">H+ tác dụng hỗn hợp HCO3- và (CO3)2-</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
