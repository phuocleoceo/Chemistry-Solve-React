import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigation() {
	return (
		<Navbar bg="dark" expand="lg" fixed="top">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>

					<NavLink className="d-inline p-2 text-white" to="/">
						Trang chủ
					</NavLink>

					<NavDropdown title="Dạng bài tập" className="nav-down" id="basic-nav-dropdown">
						<NavDropdown.Item><NavLink to="/format1">Kim loại tác dụng HCl/H2SO4</NavLink></NavDropdown.Item>
						<NavDropdown.Item><NavLink to="/format2">CO2 tác dụng dung dịch kiềm</NavLink></NavDropdown.Item>
						<NavDropdown.Item><NavLink to="/format3">Hỗn hợp Oxit sắt tác dụng HNO3</NavLink></NavDropdown.Item>
						<NavDropdown.Item><NavLink to="/format4">Al3+ tác dụng OH-</NavLink></NavDropdown.Item>
						<NavDropdown.Item><NavLink to="/format5">AlO2- tác dụng H+</NavLink></NavDropdown.Item>
						<NavDropdown.Item><NavLink to="/format6">H+ tác dụng hỗn hợp HCO3- và (CO3)2-</NavLink></NavDropdown.Item>
					</NavDropdown>

				</Nav>
			</Navbar.Collapse>
		</Navbar >
	)
}
