import axios from "axios";

export const UPDATE_CITY_TEXT = 'Update City Text';
export const GET_WEATHER_SUCCESS = 'Get Weather Success'

export const updateCityText = text => {
    return {type: UPDATE_CITY_TEXT, text}
}

export const getWeather = city => dispatch => {
    console.log(city)
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa2aefc95ab3fbbaaf699eea4a115eaf`).then(res => {
        dispatch(getWeatherSuccess(res.data))
        console.log(res.data);
    })
}

export const getWeatherSuccess = weather => {
    console.log(weather)
    return {type: GET_WEATHER_SUCCESS, weather}
}
