import * as Courses from './Courses';

export interface ApplicationState {
	courses: Courses.CoursesState
}

export const reducers = {
	courses: Courses.reducer
}

export interface AppThunkAction<TAction> {
	(dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
