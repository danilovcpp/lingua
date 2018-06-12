import axios from 'axios';
import { Course } from '../models/Course';

export class Lingua {
	public GetCourses() {
		return axios.get('http://localhost:59635/api/courses');
	}

	public CreateCourse(course: Course) {
		return axios.post('http://localhost:59635/api/courses', course);
	}
}