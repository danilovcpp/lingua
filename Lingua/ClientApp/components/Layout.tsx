import * as React from 'react';
import { Menu } from './Menu';
import { Header } from './Header';
import { Grid, Row, Col, Breadcrumb } from 'react-bootstrap';

export class Layout extends React.Component<{}, {}> {
	public render() {
		return (
			<div>
				<Header />
				<Grid>
					<Row>
						<Col md={3}>
							<Menu />
						</Col>
						<Col md={9}>
							<Breadcrumb>
								<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
								<Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
									Library
								</Breadcrumb.Item>
								<Breadcrumb.Item active>Data</Breadcrumb.Item>
							</Breadcrumb>{this.props.children}</Col>
					</Row>
				</Grid>
			</div>
		)
	}
}
