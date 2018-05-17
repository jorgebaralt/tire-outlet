import {combineReducers} from 'redux';
import HomeServices from './reducer_home_services';
import SelectedService from './reducer_selected_services';

export default combineReducers({
    services: HomeServices,
    selectedService:SelectedService
});
