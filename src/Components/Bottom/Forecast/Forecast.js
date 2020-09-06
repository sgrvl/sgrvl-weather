import React, { useState } from "react";
import { /* useFetchForecast, */ placeholder } from "./fetchForecast";
import Daily from "./Daily";

const Forecast = ({ lat, lon }) => {
	const [weatherData, setWeatherData] = useState({
		loading: false,
		data: placeholder,
	});
	//useFetchForecast(lat, lon, setWeatherData);
	console.log(weatherData.data);
	return (
		<>
			{weatherData.data && !weatherData.loading && (
				<Daily data={weatherData.data} />
			)}
		</>
	);
};

export default Forecast;
