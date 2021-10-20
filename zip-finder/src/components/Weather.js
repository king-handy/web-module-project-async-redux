import { connect } from "react-redux";

const Weather = (props) => {
    console.log(props);
    return(
        <h1>Weather</h1>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps, {})(Weather);
