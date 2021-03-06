import { SELECT_MENU_OPTION } from '../actions/types';

export default (state = ['Home'], action) => {
	switch (action.type) {
		case SELECT_MENU_OPTION:
			return [action.payload];
		default:
			return state;
	}
};
