import { GET_WEATHER_SUCCESS, UPDATE_CITY_TEXT } from "../actions/weather.actions";

const initialState = {
    cityText: '',
    city: '',
    state: '',
    zip: ''
}

export const weatherReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_CITY_TEXT:
            return {...state, cityText: action.text}
        case GET_WEATHER_SUCCESS:
            const temp = action.weather.name.temp;
            const city = action.weather.name;
            const description = action.waether.waether[0].description;
            console.log(action);
            return {...state, city, description, temp};
        default:
            return state
    }
}
