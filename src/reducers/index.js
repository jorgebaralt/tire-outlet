import {combineReducers} from 'redux';
import HomeServices from './reducer_home_services';
import SelectedService from './reducer_selected_services';
import OilOptions from './reducer_oil_options';
import SelectedOil from './reducer_selected_oil'
import TireServices from './reducer_tire_services'

export default combineReducers({
    services: HomeServices,
    selectedService:SelectedService,
    oilOptions:OilOptions,
    selectedOil:SelectedOil,
    tireServices: TireServices
});
