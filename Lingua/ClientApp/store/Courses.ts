﻿import { fetch, addTask } from 'domain-task';
import { Action, Reducer, ActionCreator } from 'redux';
import { AppThunkAction } from './';
import { Course } from '../models/Course';

export interface CoursesState {
	isLoading: boolean;
	courses: Course[];
}

interface ReceiveCoursesAction {
	type: 'RECEIVE_COURSES';
	courses: Course[];
}

interface CreateCourseSuccessAction {
	type: 'CREATE_COURSE_SUCCESS';
	course: Course;
}

type KnownAction = ReceiveCoursesAction | CreateCourseSuccessAction;

export const actionCreators = {
	requestCourses: (): AppThunkAction<KnownAction> => (dispatch, getState) => {
		let fetchTask = fetch(`api/courses`)
			.then(response => response.json() as Promise<Course[]>)
			.then(data => {
				dispatch({ type: 'RECEIVE_COURSES', courses: data });
			});

		addTask(fetchTask);
	},
	createContext: (course: Course): AppThunkAction<KnownAction> => (dispatch, getState) => {
		let fetchTask = fetch(`api/courses`, { 'method': 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(course) })
			.then(response => response.json() as Promise<Course>)
			.then(data => {
				dispatch({ type: 'CREATE_COURSE_SUCCESS', course: data });
			});

		addTask(fetchTask);
	}
};

const unloadedState: CoursesState = { courses: [], isLoading: false };

export const reducer: Reducer<CoursesState> = (state: CoursesState, incomingAction: Action) => {
	const action = incomingAction as KnownAction;
	switch (action.type) {
		case 'RECEIVE_COURSES':
			return {
				courses: action.courses,
				isLoading: false
			};
		case 'CREATE_COURSE_SUCCESS':
			return {
				...state,
				courses: state.courses.concat(action.course)
			};
		default:
			const exhaustiveCheck: never = action;
	}

	return state || unloadedState;
};
