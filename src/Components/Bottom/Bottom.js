import React, { useState } from "react";
import { /* useFetchForecast, */ placeholder } from "./fetchForecast";
import styled from "styled-components";
import Forecast from "./Forecast/Forecast";
import Details from "./Details";

const StyledBot = styled.div`
	height: 100vh;
	max-height: 100%;
	padding-top: 35px;
	display: grid;
	grid-template-rows: 1fr 2fr 75%;
	justify-items: center;
	align-items: center;
`;

const Bottom = ({ data }) => {
	// eslint-disable-next-line no-unused-vars
	const [weatherData, setWeatherData] = useState({
		loading: false,
		data: placeholder,
	});
	/* One Call API only works with latitudes, Current Weather API works with City name and returns a lat/lon */
	//useFetchForecast(data.coord.lat, data.coord.lon, setWeatherData);
	return (
		<StyledBot>
			<button onClick={() => window.scrollBy(0, -window.innerHeight)}>
				Top
			</button>
			{weatherData.data && !weatherData.loading && (
				<>
					<Forecast data={weatherData.data} />
					<Details data={weatherData.data.current} />
				</>
			)}
		</StyledBot>
	);
};

export default Bottom;
