import axios from "axios";

export const UPDATE_CITY_TEXT = 'Update City Text';
export const GET_WEATHER_SUCCESS = 'Get Weather Success'

export const updateCityText = text => {
    return {type: UPDATE_CITY_TEXT, text}
}

export const getWeather = city => dispatch => {
    console.log(city)
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=detroit&appid=7591a829f8dd9490249d38acd17954b1').then(res => {
        dispatch(getWeatherSuccess(res.data))
        // console.log(res.data);
    })
}

export const getWeatherSuccess = weather => {
    console.log(weather)
    return {type: GET_WEATHER_SUCCESS, weather}
}
