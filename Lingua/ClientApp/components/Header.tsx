import * as React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

export class Header extends React.Component<{}, {}> {
	public render() {
		return (
			<Navbar inverse collapseOnSelect staticTop>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">Lingua</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem eventKey={1} href="/courses"><Glyphicon glyph="tasks" /> Courses</NavItem>
						<NavDropdown eventKey={3} title="Testing" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1} href="/">Test</MenuItem>
							<MenuItem eventKey={3.2}>Another action</MenuItem>
							<MenuItem eventKey={3.3}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#"><Glyphicon glyph="bookmark" /> Test</NavItem>
						<NavItem eventKey={2} href="#"><Glyphicon glyph="share" /> Logout</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
