import * as React from 'react';
import { ListGroup, ListGroupItem, Panel, Button, Glyphicon, FormGroup, InputGroup, FormControl, Label } from 'react-bootstrap';

export class Menu extends React.Component<{}, {}> {
	public render() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title componentClass="h4">Courses</Panel.Title>
				</Panel.Heading>
				<Panel.Body>
					<FormControl type="text" placeholder="Find a course.." bsSize="small" />
				</Panel.Body>
				<ListGroup>
					<ListGroupItem href="/">Link 1<Label bsStyle="primary" className="pull-right">primary</Label></ListGroupItem>
					<ListGroupItem bsStyle="warning" href="/">Link 2<Label bsStyle="warning" className="pull-right">private</Label></ListGroupItem>
					<ListGroupItem href="/">Link 3<Label bsStyle="success" className="pull-right">success</Label></ListGroupItem>
					<ListGroupItem href="/">Link 4<Label bsStyle="danger" className="pull-right">danger</Label></ListGroupItem>
					<ListGroupItem href="/">Link 5<Label bsStyle="info" className="pull-right">info</Label></ListGroupItem>
				</ListGroup>
			</Panel>
		)
	}
}
