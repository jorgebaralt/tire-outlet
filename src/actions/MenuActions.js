import {SELECT_MENU_OPTION} from "./types";

export function selectMenuOption(key){
    return {
        type : SELECT_MENU_OPTION,
        payload : key
    };
}