import {SELECT_MENU_OPTION} from "../actions/types";

export default (state = ['home'] , action) =>{
    switch (action.type){
        case SELECT_MENU_OPTION:
            return [state=action.payload];
        default:
            return state;
    }
}