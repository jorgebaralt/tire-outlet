import {SELECT_OIL_OPTION} from "./types";

export function selectOilOption(oilId){
    return {
        type:SELECT_OIL_OPTION,
        payload: oilId
    };
}
