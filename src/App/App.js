import React, { useState } from "react";
import { /* useFetchWeather, */ placeholder } from "./fetchWeather";
import { createGlobalStyle } from "styled-components";
import Header from "../Components/Header/Header";
import Top from "../Components/Top/Top";
import Bottom from "../Components/Bottom/Bottom";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
		scroll-behavior: smooth;
		overflow: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

	body {
		width: 100%;
		max-width: 100vw;
		margin: 0;
		padding: 0;
		color: #2b2b2b;
		background-color: #EBC6B2;
	}

  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;			
  }

  ol, ul {
    list-style: none;
  }
`;

const App = () => {
	const [city, setCity] = useState("Canggu");
	// eslint-disable-next-line no-unused-vars
	const [weatherData, setWeatherData] = useState({
		loading: false,
		data: placeholder,
	});

	//useFetchWeather(city, setWeatherData, setCity);

	console.log(weatherData.data);

	return (
		<>
			{weatherData.data && !weatherData.loading && (
				<div className="App">
					<Header data={weatherData.data} setCity={setCity} />
					<Top data={weatherData.data} />
					<Bottom data={weatherData.data} />
				</div>
			)}
			<GlobalStyle />
		</>
	);
};

export default App;
