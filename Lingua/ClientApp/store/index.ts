export interface ApplicationState {
}

export const reducers = {
}

export interface AppThunkAction<TAction> {
	(dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
