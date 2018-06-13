import * as React from 'react';
import { Well, Button } from 'react-bootstrap';
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
				<Button onClick={() => { this.audioElement.play() }}>Play</Button>
				<audio id="beep" loop ref={(audio) => this.audioElement = audio}>
					<source src="http://localhost:59635/api/courses/listen/2" type="audio/wav" />
				</audio>
			</Well>
		)
	}

	audioElement: any;
}
