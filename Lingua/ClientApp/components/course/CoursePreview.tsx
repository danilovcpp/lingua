import * as React from 'react';
import { Well } from 'react-bootstrap';
import { Course } from '../../models/Course';

interface CoursePreviewProps {
	course: Course;
}

export class CoursePreview extends React.Component<CoursePreviewProps, {}> {
	public render() {
		return (
			<Well bsSize="small">
				<h3>{this.props.course.name}</h3>
				<p>{this.props.course.description}</p>
			</Well>
		)
	}
}
