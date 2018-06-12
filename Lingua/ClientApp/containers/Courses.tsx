import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Well, ButtonToolbar, Button, Glyphicon } from 'react-bootstrap';
import { CoursePreview } from '../components/course';
import * as CoursesState from '../store/Courses';
import { ApplicationState } from '../store';
import { connect } from 'react-redux';

type CoursesProps =
	CoursesState.CoursesState
	& typeof CoursesState.actionCreators
	& RouteComponentProps<{}>;

class Courses extends React.Component<CoursesProps, {}> {
	componentWillMount() {
		this.props.requestCourses();
	}

	public render() {
		return (
			<div>
				{this.renderToolbar()}
				<h3>Courses</h3>
				{this.props.courses.map(course => <CoursePreview course={course} key={`course-${course.id}`} />)}
			</div>
		)
	}

	private renderToolbar = () => {
		return (
			<ButtonToolbar>
				<Button bsStyle="success" bsSize="small"><Glyphicon glyph="plus" /> New course</Button>
			</ButtonToolbar>
		)
	}
}

export default connect(
	(state: ApplicationState) => state.courses,
	CoursesState.actionCreators
)(Courses as any) as any;