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

					<Dropdown>
						<Dropdown.Toggle id="dropdown-basic">
							Dạng bài tập
						</Dropdown.Toggle>

						<Dropdown.Menu>
							<Dropdown.Item><NavLink to="/format1">Kim loại tác dụng HCl/H2SO4</NavLink></Dropdown.Item>
							<Dropdown.Item><NavLink to="/format2">CO2 tác dụng dung dịch kiềm</NavLink></Dropdown.Item>
							<Dropdown.Item><NavLink to="/format3">Hỗn hợp Oxit sắt tác dụng HNO3</NavLink></Dropdown.Item>
							<Dropdown.Item><NavLink to="/format4">Al3+ tác dụng OH-</NavLink></Dropdown.Item>
							<Dropdown.Item><NavLink to="/format5">AlO2- tác dụng H+</NavLink></Dropdown.Item>
							<Dropdown.Item><NavLink to="/format6">H+ tác dụng hỗn hợp HCO3- và (CO3)2-</NavLink></Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
