import {combineReducers} from 'redux';
import MenuReducer from './SelectFromMenuReducer'

export default combineReducers({
    selectedMenu: MenuReducer
});
