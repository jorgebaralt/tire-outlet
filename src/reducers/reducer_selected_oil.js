import { SELECT_OIL_OPTION } from '../actions/types';

export default function (state = { id: null }, action) {
	switch (action.type) {
		case SELECT_OIL_OPTION: {
			return { id: action.payload };
		}
		default:
			return state;
	}
}
