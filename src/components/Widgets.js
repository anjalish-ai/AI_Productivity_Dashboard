import { useState, useEffect } from "react";
import axios from "axios";

function Widgets() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=18ac81a2c6ef155634ad8f70cec84399&units=metric"
      )
      .then((res) => setWeather(res.data));
  }, []);

  return (
    <div>
      <h2>📦 Widgets</h2>

      <div>
        <h3>🌤 Weather</h3>
        {weather ? (
          <p>{weather.main.temp}°C in {weather.name}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Widgets;