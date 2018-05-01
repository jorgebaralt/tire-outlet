import {SELECT_MENU_OPTION} from "./types";

export function selectMenuOption(key){
    console.log("action creator called with key =>" + key);
    return {
        type : SELECT_MENU_OPTION,
        payload : key
    };
};