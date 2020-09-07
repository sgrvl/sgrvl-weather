import React, { useState } from "react";
import { /* useFetchForecast, */ placeholder } from "./fetchForecast";
import styled from "styled-components";
import Daily from "./Daily";

const StyledForecast = styled.div`
	width: 100%;
`;

const Forecast = ({ lat, lon }) => {
	// eslint-disable-next-line no-unused-vars
	const [weatherData, setWeatherData] = useState({
		loading: false,
		data: placeholder,
	});
	//useFetchForecast(lat, lon, setWeatherData);
	//console.log(weatherData.data);
	return (
		<StyledForecast>
			{weatherData.data && !weatherData.loading && (
				<Daily data={weatherData.data} />
			)}
		</StyledForecast>
	);
};

export default Forecast;
