import React, { createContext, useReducer } from 'react';

import { convertJsonToTypes } from '../functions';

const initialState = {
	jsonInput: '',
	typesOutput: ''
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTIONS.JSON_INPUT:
			return { ...state, jsonInput: action.payload };
		case ACTIONS.TYPES_OUTPUT:
			return { ...state, jsonInput: action.payload };
		case ACTIONS.JSON_TO_TYPES:
			return { ...state, typesOutput: convertJsonToTypes(state.jsonInput) };
		default:
			return state;
	}
};

export const AppContext = createContext(initialState);

export function AppContextProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <AppContext.Provider value={[state, dispatch]}>{children}</AppContext.Provider>;
}

export const ACTIONS = {
	JSON_INPUT: 'JSON_INPUT',
	TYPES_OUTPUT: 'TYPES_OUTPUT',
	JSON_TO_TYPES: 'JSON_TO_TYPES'
};
