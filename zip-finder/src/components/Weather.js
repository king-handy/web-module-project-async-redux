import { connect } from "react-redux";
import { getWeather, updateCityText } from "../actions/weather.actions";

const Weather = (props) => {
    return(
        <div>
            <input value={props.weather.cityText} onChange={(e) => props.updateCityText(e.target.value)} />
            <button onClick={() => props.getWeather(props.weather.cityText)}>submit</button>

            <h3>{props.weather.city}</h3>
            <p>{props.weather.description}</p>
            <p>{props.weather.temp}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, { updateCityText, getWeather })(Weather);
