import{SELECT_MENU_OPTION} from "../actions/types";

const INITIAL_STATE='home';

export default function(state=INITIAL_STATE,action){
    switch(action.type){
        case SELECT_MENU_OPTION:
            return action.payload;
        default:
            return state;
    }

};