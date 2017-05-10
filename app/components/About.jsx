 var React = require("react");

var About =  (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This a weather application built on React.
        I built this while learning React
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - this was the JavaScript framework used.
        </li>
        <li>
          <a href="http://openWeathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
