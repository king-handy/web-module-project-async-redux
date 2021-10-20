// import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    title: state.shared.title
  }
}

export default connect(mapStateToProps, {})(App);
